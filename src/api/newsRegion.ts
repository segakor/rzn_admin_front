import { axiosClient } from "../config";
import { TResponseTableData } from "../types/types";
import { TCreateNewsArt, TNewsArt } from "./newsArt";

export const getNewsRegion = async () => {
  return (await axiosClient.get<TResponseTableData<TNewsArt[]>>(`/newsRegion`))
    .data;
};

export const deleteNewsRegion = async (id: number) => {
  return (await axiosClient.delete(`/newsRegion/${id}`)).data;
};

export const createNewsRegion = async (body: TCreateNewsArt) => {
  return (await axiosClient.post(`/newsRegion`, { ...body })).data;
};

export const updateNewsRegion = async (body: TCreateNewsArt) => {
  return (await axiosClient.put(`/newsRegion`, { ...body })).data;
};
