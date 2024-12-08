import { axiosClient } from "../config";
import { TResponseTableData } from "../types/types";

export type TChtoPosmotret = {
  id: number;
  title: string;
  subTitle: string;
  address: string;
  storage_image: {
    imagePath: string;
  };
  category: string;
  tags: number[];
  template: string;
  contacts: string;
};

export type TCreateChtoPosmotret = Omit<
  TChtoPosmotret,
  "id" | "storage_image"
> & { imageId: string }; /* {
  title: string;
  subTitle: string;
  address: string;
  imageId: number;
  category: string;
  tags: number[];
  template: string
  contacts: string;
}; */

export type TUpdateChtoPosmotret = Omit<TChtoPosmotret, "storage_image"> & {
  imageId: string;
};

export const getChtoPosmotret = async () => {
  return (
    await axiosClient.get<TResponseTableData<TChtoPosmotret[]>>(
      `/chtoposmotret`
    )
  ).data;
};

export const getChtoPosmotretDetail = async (id: string) => {
  return (await axiosClient.get<TChtoPosmotret>(`/chtoposmotret/${id}`)).data;
};

export const deleteChtoPosmotret = async (id: number) => {
  return (await axiosClient.delete(`/chtoposmotret/${id}`)).data;
};

export const createChtoPosmotret = async (body: TCreateChtoPosmotret) => {
  return (await axiosClient.post(`/chtoposmotret`, { ...body })).data;
};

export const updateChtoPosmotret = async (body: TCreateChtoPosmotret) => {
  return (await axiosClient.put(`/chtoposmotret`, { ...body })).data;
};
