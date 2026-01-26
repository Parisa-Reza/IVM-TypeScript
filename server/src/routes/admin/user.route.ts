import { userController } from "@/modules/user";
import { Router , Request, Response} from "express";

const adminUserRouter = Router();

adminUserRouter.post("/", userController.createUser);
adminUserRouter.get("/", (_req : Request, _res:Response) => {
    throw new Error("Not implemented");
})
adminUserRouter.get("/:id", (_req : Request, _res:Response) => {
    throw new Error("Not implemented");
})
adminUserRouter.put("/:id", (_req : Request, _res:Response) => {
    throw new Error("Not implemented");
})
adminUserRouter.delete("/:id", (_req : Request, _res:Response) => {
    throw new Error("Not implemented");
})
adminUserRouter.patch("/:id/restore", (_req : Request, _res:Response) => {
    throw new Error("Not implemented");
})

export default adminUserRouter;