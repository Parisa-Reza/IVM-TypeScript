import { z } from "zod";
import { UserSchema ,UserRoleEnum } from "@/schemas";

export type User = z.infer<typeof UserSchema>;
export type UserRole = z.infer<typeof UserRoleEnum>;
