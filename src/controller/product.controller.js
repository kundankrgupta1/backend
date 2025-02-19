import userModel from "../model/user.model.js";

const productCreate = async (req, res) => {

	const { _id } = req.user;

	try {
		const user = await userModel.findById(_id);

		if (!user) {
			return res.status(401).json({
				message: "Unauthorized access!!, user not found",
				success: false
			})
		}

		const newProduct = new productModel({
			itemName, color, brand
		})

		await newProduct.save();

		return res.status(200).json({
			message: "product added successfully!!!",
			success: true
		})

	} catch (error) {
		return res.status(500).json({
			message: error,
			success: false
		})
	}
}

const getAllProduct = async (req, res) => {
	const { _id } = req.user;

	try {
		const user = await userModel.findById(_id);

		if (!user) {
			return res.status(401).json({
				message: "Unauthorized access!!, user not found",
				success: false
			})
		}

		const allProduct = await productModel.find();

		return res.status(200).json({
			message: "All product fetched successfully!!",
			success: true,
			allProduct
		})

	} catch (error) {
		return res.status(500).json({
			message: error,
			success: false
		})
	}
}

const updateProduct = async (req, res) => {
	const { _id } = req.user;

	try {
		const user = await userModel.findById(_id);
		if (!user) {
			return res.status(401).json({
				message: "Unauthorized access!!, user not found",
				success: false
			})
		}
		const updateProduct = await productModel.
	} catch (error) {

	}
}

export { productCreate, getAllProduct };