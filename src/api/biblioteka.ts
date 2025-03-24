import { axiosClient } from "../config";
import { TResponseTableData } from "../types/types";

type TCommon = {
  id: number;
  title: string;
  subTitle: string;
  imageId: number;
  storage_image: {
    imagePath: string;
  };
};

export type TBibliotekaPoslushat = {
  prolongation: string;
  date: string;
  linkPathYa: string;
  linkPathIzi: string;
} & TCommon;

export type TBibliotekaPosmotret = {
  prolongation: string;
  date: string;
  linkName: string;
  linkPath: string;
} & TCommon;

export type TBibliotekaPochitat = {
  linkPathOzon: string;
  linkPathLitres: string;
  linkPath: string;
} & TCommon;

export type TCreateBibliotekaPoslushat = Omit<TBibliotekaPoslushat, "id">;
export type TCreateBibliotekaPosmotret = Omit<TBibliotekaPosmotret, "id">;
export type TCreateBibliotekaPochitat = Omit<TBibliotekaPochitat, "id">;

export type TUpdateBibliotekaPoslushat = Omit<
  TBibliotekaPoslushat,
  "storage_image"
> & {
  imageId: string;
};
export type TUpdateBibliotekaPosmotret = Omit<
  TBibliotekaPosmotret,
  "storage_image"
> & {
  imageId: string;
};
export type TUpdateBibliotekaPochitat = Omit<
  TBibliotekaPochitat,
  "storage_image"
> & {
  imageId: string;
};

//NOTE: poslushat
export const getBibliotekaPoslushat = async () => {
  return (
    await axiosClient.get<TResponseTableData<TBibliotekaPoslushat[]>>(
      `/biblioteka/poslushat`
    )
  ).data;
};

export const getBibliotekaPoslushatDetail = async (id: string) => {
  return (
    await axiosClient.get<TBibliotekaPoslushat>(`/biblioteka/poslushat/${id}`)
  ).data;
};

export const deleteBibliotekaPoslushat = async (id: number) => {
  return (await axiosClient.delete(`/biblioteka/poslushat/${id}`)).data;
};

export const createBibliotekaPoslushatDetail = async (
  body: TCreateBibliotekaPoslushat
) => {
  return (await axiosClient.post(`/biblioteka/poslushat`, { ...body })).data;
};

export const updateBibliotekaPoslushat = async (
  body: TUpdateBibliotekaPoslushat
) => {
  return (await axiosClient.put(`/biblioteka/poslushat`, { ...body })).data;
};

//NOTE: posmotert
export const getBibliotekaPosmotret = async () => {
  return (
    await axiosClient.get<TResponseTableData<TBibliotekaPosmotret[]>>(
      `/biblioteka/posmotret`
    )
  ).data;
};

export const getBibliotekaPosmotretDetail = async (id: string) => {
  return (
    await axiosClient.get<TBibliotekaPosmotret>(`/biblioteka/posmotret/${id}`)
  ).data;
};

export const deleteBibliotekaPosmotret = async (id: number) => {
  return (await axiosClient.delete(`/biblioteka/posmotret/${id}`)).data;
};

export const createBibliotekaPosmotretDetail = async (
  body: TCreateBibliotekaPosmotret
) => {
  return (await axiosClient.post(`/biblioteka/posmotret`, { ...body })).data;
};

export const updateBibliotekaPosmotret = async (
  body: TUpdateBibliotekaPosmotret
) => {
  return (await axiosClient.put(`/biblioteka/posmotret`, { ...body })).data;
};

//NOTE: pochitat
export const getBibliotekaPochitat = async () => {
  return (
    await axiosClient.get<TResponseTableData<TBibliotekaPochitat[]>>(
      `/biblioteka/pochitat`
    )
  ).data;
};

export const getBibliotekaPochitatDetail = async (id: string) => {
  return (
    await axiosClient.get<TBibliotekaPochitat>(`/biblioteka/pochitat/${id}`)
  ).data;
};

export const deleteBibliotekaPochitat = async (id: number) => {
  return (await axiosClient.delete(`/biblioteka/pochitat/${id}`)).data;
};

export const createBibliotekaPochitatDetail = async (
  body: TCreateBibliotekaPochitat
) => {
  return (await axiosClient.post(`/biblioteka/pochitat`, { ...body })).data;
};

export const updateBibliotekaPochitat = async (
  body: TUpdateBibliotekaPochitat
) => {
  return (await axiosClient.put(`/biblioteka/pochitat`, { ...body })).data;
};
