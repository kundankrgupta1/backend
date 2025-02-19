import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const ConnectDB = async () => {
	try {
		const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DBNAME}`)
		console.log("MongoDB Connected !!!", "Hosted:", connectionInstance.connection.host)
	} catch (error) {
		throw new Error("Database connection failed!!!")
	}
}

export default ConnectDB;