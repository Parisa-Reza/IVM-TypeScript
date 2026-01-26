import { Router , Request, Response} from "express";

const adminUserRouter = Router();

adminUserRouter.post("/", (_req : Request, _res:Response) => {})
adminUserRouter.get("/", (_req : Request, _res:Response) => {})
adminUserRouter.get("/:id", (_req : Request, _res:Response) => {})
adminUserRouter.put("/:id", (_req : Request, _res:Response) => {})
adminUserRouter.delete("/:id", (_req : Request, _res:Response) => {})
adminUserRouter.patch("/:id/restore", (_req : Request, _res:Response) => {})

export default adminUserRouter;