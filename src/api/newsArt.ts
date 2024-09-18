import { axiosClient } from "../config";
import { TResponseTableData } from "../types/types";

export type TNewsArt = {
  id: number;
  title: string;
  bodyText: string;
  createdAt: string;
  updatedAt: string;
  storage_image: {
    imagePath: string;
  }
};

export type TCreateNewsArt = {
  title: string;
  bodyText: string;
  imageId: number;
};

export const getNewsArt = async () => {
  return (await axiosClient.get<TResponseTableData<TNewsArt[]>>(`/newsArt`))
    .data;
};

export const deleteNewsArt = async (id: number) => {
  return (await axiosClient.delete(`/newsArt/${id}`)).data;
};

export const createNewsArt = async (body: TCreateNewsArt) => {
  return (await axiosClient.post(`/newsArt`, { ...body })).data;
};

export const updateNewsArt = async (body: TCreateNewsArt) => {
  return (await axiosClient.put(`/newsArt`, { ...body })).data;
};