import { axiosClient } from "../config";
import { TResponseTableData } from "../types/types";

export type TBanner = {
  id: number;
  title: string;
  subTitle: string;
  isActive: boolean;
  linkPath: string;
  sequence: number;
  imageId: number;
  storage_image: {
    imagePath: string;
  };
};

export type TCreateBanner = Omit<TBanner, "id">;

export type TUpdateBanner = Omit<TBanner, "storage_image"> & {
  imageId: string;
};

export const getBanner = async () => {
  return (await axiosClient.get<TResponseTableData<TBanner[]>>(`/banner`)).data;
};

export const getBannerDetail = async (id: string) => {
  return (await axiosClient.get<TBanner>(`/banner/${id}`)).data;
};

export const deleteBanner = async (id: number) => {
  return (await axiosClient.delete(`/banner/${id}`)).data;
};

export const createBanner = async (body: TCreateBanner) => {
  return (await axiosClient.post(`/banner`, { ...body })).data;
};

export const updateBanner = async (body: TUpdateBanner) => {
  return (await axiosClient.put(`/banner`, { ...body })).data;
};
