import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getPromturizm,
  deletePromturizm,
  createPromturizm,
  TCreatePromturizm,
  updatePromturizm,
  getPromturizmDetail,
  TUpdatePromturizm,
} from "../api/promturizm";
import { notification } from "antd";

const GET_PROMTURIZM = "GET_PROMTURIZM";
const GET_PROMTURIZM_DETAIL = "GET_PROMTURIZM_DETAIL";

export const useGetPromturizm = () => {
  return useQuery({
    queryKey: [GET_PROMTURIZM],
    queryFn: async () => {
      try {
        return await getPromturizm();
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

export const useGetPromturizmDetail = (id: string) => {
  return useQuery({
    queryKey: [GET_PROMTURIZM_DETAIL, id],
    queryFn: () => getPromturizmDetail(id),
  });
};

export const useDeletePromturizm = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deletePromturizm(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_PROMTURIZM],
      });
    },
  });
};

export const useCreatePromturizm = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreatePromturizm) => createPromturizm(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_PROMTURIZM],
      });
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

export const useUpdatePromturizm = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TUpdatePromturizm & { id: number }) =>
      updatePromturizm(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [GET_PROMTURIZM_DETAIL],
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
