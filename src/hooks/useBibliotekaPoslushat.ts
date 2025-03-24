import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import {
  getBibliotekaPoslushat,
  getBibliotekaPoslushatDetail,
  createBibliotekaPoslushatDetail,
  updateBibliotekaPoslushat,
  deleteBibliotekaPoslushat,
  TUpdateBibliotekaPoslushat,
  TCreateBibliotekaPoslushat,
} from "../api/biblioteka";

const GET_POSLUSHAT = "GET_POSLUSHAT";
const GET_POSLUSHAT_DETAIL = "GET_POSLUSHAT_DETAIL";

export const useGetBibliotekaPoslushat = () => {
  return useQuery({
    queryKey: [GET_POSLUSHAT],
    queryFn: async () => {
      try {
        return await getBibliotekaPoslushat();
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

export const useGetBibliotekaPoslushatDetail = (id: string) => {
  return useQuery({
    queryKey: [GET_POSLUSHAT_DETAIL, id],
    queryFn: () => getBibliotekaPoslushatDetail(id),
  });
};

export const useDeleteBibliotekaPoslushat = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteBibliotekaPoslushat(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_POSLUSHAT] });
    },
  });
};

export const useCreateBibliotekaPoslushat = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateBibliotekaPoslushat) =>
      createBibliotekaPoslushatDetail(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_POSLUSHAT] });
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

export const useUpdateBibliotekaPoslushat = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TUpdateBibliotekaPoslushat) =>
      updateBibliotekaPoslushat(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [GET_POSLUSHAT_DETAIL],
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
