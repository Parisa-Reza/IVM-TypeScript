import { Router } from "express";

const adminUserRouter = Router();

adminUserRouter.post("/", (req, res) => {})
adminUserRouter.get("/", (req, res) => {})
adminUserRouter.get("/:id", (req, res) => {})
adminUserRouter.put("/:id", (req, res) => {})
adminUserRouter.delete("/:id", (req, res) => {})
adminUserRouter.patch("/:id/restore", (req, res) => {})

export default adminUserRouter;