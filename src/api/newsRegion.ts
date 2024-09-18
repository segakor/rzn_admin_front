import { axiosClient } from "../config";
import { TResponseTableData } from "../types/types";

export type TNewsRegion = {
  id: number;
  title: string;
  bodyText: string;
  createdAt: string;
  updatedAt: string;
  storage_image: {
    imagePath: string;
  }
};

export type TCreateNewsRegion = {
  title: string;
  bodyText: string;
  imageId: number;
};

export const getNewsRegion = async () => {
  return (await axiosClient.get<TResponseTableData<TNewsRegion[]>>(`/newsRegion`))
    .data;
};

export const deleteNewsRegion = async (id: number) => {
  return (await axiosClient.delete(`/newsRegion/${id}`)).data;
};

export const createNewsRegion = async (body: TCreateNewsRegion) => {
  return (await axiosClient.post(`/newsRegion`, { ...body })).data;
};

export const updateNewsRegion = async (body: TCreateNewsRegion) => {
  return (await axiosClient.put(`/newsRegion`, { ...body })).data;
};