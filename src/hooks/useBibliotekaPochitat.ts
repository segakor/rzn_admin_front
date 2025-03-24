import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import {
  getBibliotekaPochitat,
  getBibliotekaPochitatDetail,
  createBibliotekaPochitatDetail,
  updateBibliotekaPochitat,
  deleteBibliotekaPochitat,
  TUpdateBibliotekaPochitat,
  TCreateBibliotekaPochitat,
} from "../api/biblioteka";

const GET_POCHITAT = "GET_POCHITAT";
const GET_POCHITAT_DETAIL = "GET_POCHITAT_DETAIL";

export const useGetBibliotekaPochitat = () => {
  return useQuery({
    queryKey: [GET_POCHITAT],
    queryFn: async () => {
      try {
        return await getBibliotekaPochitat();
      } catch {
        notification.error({
          message: "Не удалось загрузить данные",
          duration: 10,
        });
      }
    },
    staleTime: 0,
    gcTime: 0,
  });
};

export const useGetBibliotekaPochitatDetail = (id: string) => {
  return useQuery({
    queryKey: [GET_POCHITAT_DETAIL, id],
    queryFn: () => getBibliotekaPochitatDetail(id),
  });
};

export const useDeleteBibliotekaPochitat = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteBibliotekaPochitat(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_POCHITAT] });
    },
  });
};

export const useCreateBibliotekaPochitat = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateBibliotekaPochitat) =>
      createBibliotekaPochitatDetail(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_POCHITAT] });
      notification.success({
        message: "Запись создана",
        duration: 5,
        placement: "bottom",
      });
    },
    onError: (err: { data: { message: string } }) => {
      notification.error({
        message: err?.data?.message,
        duration: 10,
      });
    },
  });
};

export const useUpdateBibliotekaPochitat = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TUpdateBibliotekaPochitat) =>
      updateBibliotekaPochitat(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [GET_POCHITAT_DETAIL],
      });
      notification.success({
        message: "Запись обновлена",
        duration: 5,
        placement: "bottom",
      });
    },
    onError: (err: { data: { message: string } }) => {
      notification.error({
        message: err?.data?.message,
        duration: 10,
      });
    },
  });
};
