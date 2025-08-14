import { httpClient } from "./http";
import type { Category } from "../models/category.model";

export const fetchCategory = async (): Promise<Category[]> => {
  const { data } = await httpClient.get<Category[]>("/category");
  return data;
};
