import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const userReg = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await userModel.findOne({ email });
		if (user) {
			return res.status(500).json({
				message: "User already Registered!!!",
				success: false
			})
		}
		const hashPassword = bcrypt.hashSync(password, 10)
		const newUser = new userModel({ email, password: hashPassword })
		await newUser.save();

		return res.status(200).json({
			message: "User Registered Successfully!!!",
			success: true
		})

	} catch (error) {
		return res.status(200).json({
			message: error,
			success: false
		})
	}
}

const userLogin = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await userModel.findOne({ email });
		if (!user) {
			return res.status(500).json({
				message: "User not found",
				success: false
			})
		}

		const isMath = bcrypt.compareSync(password, user.password)

		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY)

		if (!isMath) {
			return res.status(500).json({
				message: "wrong password",
				success: false
			})
		}

		return res.status(200).json({
			message: "Login Successfully!!!",
			success: true,
			token,
			user: {
				email: user.email
			}
		})

	} catch (error) {
		return res.status(200).json({
			message: error,
			success: false
		})

	}
}


export { userReg, userLogin };