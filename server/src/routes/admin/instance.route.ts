import { validateRequestBody } from '@/middlewares';
import { instanceController } from '@/modules/instance';
import { CreateInstanceSchema } from '@/schemas/instances';
import Router from 'express';

const adminInstanceRouter = Router();
adminInstanceRouter .post('/',validateRequestBody(CreateInstanceSchema), instanceController.createInstance);
export default adminInstanceRouter ;