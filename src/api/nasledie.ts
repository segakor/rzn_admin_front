import { axiosClient } from "../config";
import { TResponseTableData } from "../types/types";

export type TNasledie = {
  id: number;
  title: string;
  subTitle: string;
  category: ENasledieCategory;
  template: string;
  imageId: number;
  storage_image: {
    imagePath: string;
  };
};

export enum ENasledieCategory {
  RYAZAN = "ryazan",
  KASIMOV = "kasimov",
}

export type TCreateNasledie = Omit<TNasledie, "id">;

export type TUpdateNasledie = Omit<TNasledie, "storage_image"> & {
  imageId: number;
};

export const getNasledie = async (params?: ENasledieCategory) => {
  return (
    await axiosClient.get<TResponseTableData<TNasledie[]>>(`/nasledie`, {
      params,
    })
  ).data;
};

export const getNasledieDetail = async (id: string) => {
  return (await axiosClient.get<TNasledie>(`/nasledie/${id}`)).data;
};

export const deleteNasledie = async (id: number) => {
  return (await axiosClient.delete(`/nasledie/${id}`)).data;
};

export const createNasledie = async (body: TCreateNasledie) => {
  return (await axiosClient.post(`/nasledie`, { ...body })).data;
};

export const updateNasledie = async (body: TUpdateNasledie) => {
  return (await axiosClient.put(`/nasledie`, { ...body })).data;
};
