import { z } from 'zod';

export const DateMixin = z.object({
  createAt: z.union([z.date(), z.string()]).optional(),
  updatedAt: z.union([z.date(), z.string()]).optional(),
});
export const CreatedMixin = z.object({
  createdAt: z.union([z.date(), z.string()]).optional(),
  createdBy: z.string().nullable().optional(),
});

export const UpdatedMixin = z.object({
  updatedAt: z.union([z.date(), z.string()]).optional(),
  updatedBy: z.string().nullable().optional(),
});

export const SoftDeleteMixin = z.object({
  deleted: z.boolean().optional().default(false),
  // if boolean there will be index by default in mongoose
  // if date there will be no index by default in mongoose
  deletedAt: z.union([z.date(), z.string()]).nullable().optional(),
  deletedBy: z.string().nullable().optional(),
});
