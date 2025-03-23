import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getNasledie,
  getNasledieDetail,
  deleteNasledie,
  createNasledie,
  TCreateNasledie,
  updateNasledie,
  ENasledieCategory,
  TUpdateNasledie,
} from "../api/nasledie";
import { notification } from "antd";

const GET_NASLEDIE = "GET_NASLEDIE";
const GET_NASLEDIE_DETAIL = "GET_NASLEDIE_DETAIL";

export const useGetNasledie = (category?: ENasledieCategory) => {
  return useQuery({
    queryKey: [GET_NASLEDIE],
    queryFn: async () => {
      try {
        return await getNasledie(category);
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

export const useGetNasledieDetail = (id: string) => {
  return useQuery({
    queryKey: [GET_NASLEDIE_DETAIL, id],
    queryFn: () => getNasledieDetail(id),
  });
};

export const useDeleteNasledie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteNasledie(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_NASLEDIE] });
    },
  });
};

export const useCreateNasledie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateNasledie) => createNasledie(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_NASLEDIE] });
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

export const useUpdateNasledie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TUpdateNasledie) => updateNasledie(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [GET_NASLEDIE_DETAIL],
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
