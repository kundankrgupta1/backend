import app from "./src/app/app.js";
import ConnectDB from "./src/config/db.js";
import dotenv from "dotenv"
dotenv.config();

const PORT = process.env.PORT || 3000;

ConnectDB().then(() => {
	console.log("Server is Starting...")
	app.listen(PORT, () => {
		console.log("server is running on", PORT)
	})
}).catch((e) => {
	console.log(e)
})
