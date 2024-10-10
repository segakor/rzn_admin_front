import { axiosClient } from "../config";

export type TLongRead = {
  id: number;
  title: string;
  bodyText: string;
};


export const getLongRead = async (id: string) => {
  return (await axiosClient.get<TLongRead>(`/longRead/${id}`)).data;
};

export const createLongRead = async (body: Omit<TLongRead, 'id'>) => {
  return (await axiosClient.post<TLongRead>(`/longRead`, { ...body })).data;
};

export const updateLongRead = async (body: Omit<TLongRead, 'id'>) => {
  return (await axiosClient.put<TLongRead>(`/longRead`, { ...body })).data;
};
