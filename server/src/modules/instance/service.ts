
import { InstanceModel } from "@/modules/instance";
import { CreateInstance } from "@/types/instances";

export const createInstance = async (instancePayload: CreateInstance) => {
  const newInstance = await InstanceModel.create(instancePayload);
  return newInstance;
};
