const authMiddleware = async (req, res, next) => {
	try {
		const token = req.header.authorization.split(" ")[1];
		if (token) {
			return res.status(500).json({
				message: "token not provided!!!",
				success: false
			})
		}

		jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
			if (err) console.log(err)

			console.log(decoded)
			req.user = decoded;
			next();
		})

	} catch (error) {
		return res.status(500).json({
			message: error,
			success: false
		})
	}
}

export default authMiddleware;