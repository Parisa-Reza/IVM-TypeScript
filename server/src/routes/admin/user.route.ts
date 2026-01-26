import { Router , Request, Response} from "express";
import { userController } from "@/modules/user";
import { CreateUserSchema } from "@/schemas/users";
import { validateRequestBody } from "@/middlewares";

const adminUserRouter = Router();

adminUserRouter.post("/", validateRequestBody(CreateUserSchema), userController.createUser);
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