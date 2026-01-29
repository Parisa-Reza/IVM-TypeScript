import mongoose from "mongoose";

import { softDeletePlugin } from "@/common/mongoose-plugins";
import { Instance } from "@/types/instances";

const instanceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subDomain: { type: String},
  },
  {
    timestamps: true,
  }
);
instanceSchema.plugin(softDeletePlugin);

export type InstanceDocument = Instance & mongoose.Document;

export const InstanceModel = mongoose.model<InstanceDocument>(
  "Instance",
  instanceSchema
);
