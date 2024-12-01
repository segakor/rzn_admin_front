import { axiosClient } from "../config";
import { TResponseTableData } from "../types/types";

export type TAnswer = {
  id: number;
  title: string;
  category: string;
  keywords: string;
  answers: {
    title: string;
    template: string;
  }[];
};

export type TCreateAnswer = Omit<TAnswer, 'id'>

export type TUpdateAnswer = TAnswer


export const getAnswer = async () => {
  return (await axiosClient.get<TResponseTableData<TAnswer[]>>(`/answer`))
    .data;
};

export const getAnswerDetail = async (id: string) => {
  return (await axiosClient.get<TAnswer>(`/answer/${id}`))
    .data;
};

export const deleteAnswer = async (id: number) => {
  return (await axiosClient.delete(`/answer/${id}`)).data;
};

export const createAnswer = async (body: TCreateAnswer) => {
  return (await axiosClient.post(`/answer`, { ...body })).data;
};

export const updateAnswer = async (body: TCreateAnswer) => {
  return (await axiosClient.put(`/answer`, { ...body })).data;
};