import { axiosClient } from "../config";
import { TResponseTableData } from "../types/types";

export type TGid = {
  id: number;
  title: string;
  fio: string;
  phone: string;
  isActive: boolean;
  bodyText: string;
  imageId: number;
  storage_image: {
    imagePath: string;
  };
};

export type TCreateGid = Omit<TGid, "id">;

export type TUpdateGid = Omit<TGid, "storage_image"> & { imageId: string };

export const getGid = async () => {
  return (await axiosClient.get<TResponseTableData<TGid[]>>(`/gid`)).data;
};

export const getGidDetail = async (id: string) => {
  return (await axiosClient.get<TGid>(`/gid/${id}`)).data;
};

export const deleteGid = async (id: number) => {
  return (await axiosClient.delete(`/gid/${id}`)).data;
};

export const createGid = async (body: TCreateGid) => {
  return (await axiosClient.post(`/gid`, { ...body })).data;
};

export const updateGid = async (body: TUpdateGid) => {
  return (await axiosClient.put(`/gid`, { ...body })).data;
};
