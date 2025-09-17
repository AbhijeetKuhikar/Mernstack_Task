import express from "express"
import { GetHome, GetAnotherRoute } from "../Controllers/controller.js"

let router = express.Router()

router.get("/", GetHome)

router.get("/another-route", GetAnotherRoute)

export default router