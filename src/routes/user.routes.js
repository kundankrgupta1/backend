import { Router } from "express";
import { userLogin, userReg } from "../controller/user.controller.js";
const userRouter = Router();
userRouter.post("/reg", userReg);
userRouter.post("/login", userLogin);
export default userRouter;
