import express from "express";
import controller from "./feature1.controller";

const router = express.Router();

router.use("/api/v1/test", controller.getPost);

export = router;