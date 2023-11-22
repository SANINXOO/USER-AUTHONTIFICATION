import { Router } from "express";
import * as controller from "./controller.js";
import Auth from "./auth.js";

const router=Router();

router.route("/adduser").post(controller.addUser);
router.route("/login").post(controller.login);
router.route("/home").post(Auth,controller.home);


export default router;