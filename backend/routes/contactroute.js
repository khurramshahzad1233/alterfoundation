import express from "express"
import { contactformcontroller, involveformcontroller } from "../controller/contactcontroller.js"

const router=express.Router();
router.route("/contact/form").post(contactformcontroller);
router.route("/contact/involve").post(involveformcontroller)

export default router;