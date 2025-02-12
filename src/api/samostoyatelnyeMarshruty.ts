import { axiosClient } from "../config";
import { TResponseTableData } from "../types/types";

export type TSamostoyatelnyeMarshruty = {
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
  linkPath: string;
  sequence: number;
};

export type TCreateSamostoyatelnyeMarshruty = Omit<
  TSamostoyatelnyeMarshruty,
  "id" | "storage_image"
> & { imageId: string };

export type TUpdateSamostoyatelnyeMarshruty = Omit<
  TSamostoyatelnyeMarshruty,
  "storage_image"
> & { imageId: string };

export const getSamostoyatelnyeMarshruty = async () => {
  return (
    await axiosClient.get<TResponseTableData<TSamostoyatelnyeMarshruty[]>>(
      `/samostoyatelnyeMarshruty`
    )
  ).data;
};

export const getSamostoyatelnyeMarshrutyDetail = async (id: string) => {
  return (
    await axiosClient.get<TSamostoyatelnyeMarshruty>(
      `/samostoyatelnyeMarshruty/${id}`
    )
  ).data;
};

export const deleteSamostoyatelnyeMarshruty = async (id: number) => {
  return (await axiosClient.delete(`/samostoyatelnyeMarshruty/${id}`)).data;
};

export const createSamostoyatelnyeMarshruty = async (
  body: TCreateSamostoyatelnyeMarshruty
) => {
  return (await axiosClient.post(`/samostoyatelnyeMarshruty`, { ...body }))
    .data;
};

export const updateSamostoyatelnyeMarshruty = async (
  body: TCreateSamostoyatelnyeMarshruty
) => {
  return (await axiosClient.put(`/samostoyatelnyeMarshruty`, { ...body })).data;
};
