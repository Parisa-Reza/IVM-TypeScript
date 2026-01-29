import { z } from "zod";

import { CreateInstanceSchema, InstanceSchema } from "@/schemas/instances";


export type Instance = z.infer<typeof InstanceSchema>;
export type CreateInstance = z.infer<typeof CreateInstanceSchema>;
