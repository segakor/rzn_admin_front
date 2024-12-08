import { axiosClient } from "../config";
import { TResponseTableData } from "../types/types";

export type TOrganizovannyeMarshruty = {
  id: number;
  title: string;
  email: string;
  dates: string[];
  price: string;
  includePrice: string;
  days: string;
  storage_image: {
    imagePath: string;
  };
  template: string;
};

export type TCreateOrganizovannyeMarshruty = Omit<TOrganizovannyeMarshruty, 'id' | 'storage_image'> & { imageId: string }

export type TUpdateOrganizovannyeMarshruty = Omit<TOrganizovannyeMarshruty, 'storage_image'> & { imageId: string }


export const getOrganizovannyeMarshruty = async () => {
  return (await axiosClient.get<TResponseTableData<TOrganizovannyeMarshruty[]>>(`/organizovannyeMarshruty`))
    .data;
};

export const getOrganizovannyeMarshrutyDetail = async (id: string) => {
  return (await axiosClient.get<TOrganizovannyeMarshruty>(`/organizovannyeMarshruty/${id}`))
    .data;
};

export const deleteOrganizovannyeMarshruty = async (id: number) => {
  return (await axiosClient.delete(`/organizovannyeMarshruty/${id}`)).data;
};

export const createOrganizovannyeMarshruty = async (body: TCreateOrganizovannyeMarshruty) => {
  return (await axiosClient.post(`/organizovannyeMarshruty`, { ...body })).data;
};

export const updateOrganizovannyeMarshruty = async (body: TCreateOrganizovannyeMarshruty) => {
  return (await axiosClient.put(`/organizovannyeMarshruty`, { ...body })).data;
};