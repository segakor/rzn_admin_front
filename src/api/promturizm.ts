import { axiosClient } from "../config";
import { TResponseTableData } from "../types/types";

export type TPromturizm = {
  id: number;
  title: string;
  subTitle: string;
  address: string;
  ageLimit: string;
  template: string;
  tags: string[];
  imageId: number;
  storage_image: {
    imagePath: string;
  };
};

export type TCreatePromturizm = Omit<TPromturizm, "id">;

export type TUpdatePromturizm = Omit<TPromturizm, "storage_image"> & {
  imageId: string;
};

export const getPromturizm = async () => {
  return (
    await axiosClient.get<TResponseTableData<TPromturizm[]>>(`/promturizm`)
  ).data;
};

export const getPromturizmDetail = async (id: string) => {
  return (await axiosClient.get<TPromturizm>(`/promturizm/${id}`)).data;
};

export const deletePromturizm = async (id: number) => {
  return (await axiosClient.delete(`/promturizm/${id}`)).data;
};

export const createPromturizm = async (body: TCreatePromturizm) => {
  return (await axiosClient.post(`/promturizm`, { ...body })).data;
};

export const updatePromturizm = async (body: TUpdatePromturizm) => {
  return (await axiosClient.put(`/promturizm`, { ...body })).data;
};
