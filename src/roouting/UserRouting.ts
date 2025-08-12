import { Router } from "express"
import userController from "../controller/UserController";



const router = Router();

userController(router);

export default router;