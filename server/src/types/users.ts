import { z } from "zod";
import { UserSchema, UserRoleEnum } from "@/schemas";

export type User = z.infer<typeof UserSchema>;
export type UserRole = z.infer<typeof UserRoleEnum>;
// here z.infer is used to extract the TypeScript type from the Zod schema
