import {z} from "zod";


export const UserRoleEnum = z.enum(["admin","store-keeper"]);



export const UserSchema = z.object({
  _id : z.string(),
  name: z.string().min(1,"Name is required").max(100,"Name is too long"),
  email:z.string().email("Invalid email address"),
  passwordHash: z.string(),
  isDraft: z.boolean().optional().default(false),
  role: UserRoleEnum,
  createdAt:z.date().optional(),
  updatedAt:z.date().optional(),
});