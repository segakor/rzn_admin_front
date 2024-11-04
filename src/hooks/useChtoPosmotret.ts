import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getChtoPosmotret,
  deleteChtoPosmotret,
  createChtoPosmotret,
  TCreateChtoPosmotret,
  updateChtoPosmotret,
  getChtoPosmotretDetail,
} from "../api/chtoPosmotret";
import { notification } from "antd";

const GET_CHTO_POSMOTRET = "GET_CHTO_POSMOTRET";
const GET_CHTO_POSMOTRET_DETAIL = "GET_CHTO_POSMOTRET_DETAIL";

export const useGetChtoPosmotret = () => {
  return useQuery({
    queryKey: [GET_CHTO_POSMOTRET],
    queryFn: () => getChtoPosmotret(),
    staleTime: 0,
    gcTime: 0,
  });
};

export const useGetChtoPosmotretDetail = (id: string) => {
  return useQuery({
    queryKey: [GET_CHTO_POSMOTRET_DETAIL, id],
    queryFn: () => getChtoPosmotretDetail(id),
  });
};

export const useDeleteChtoPosmotret = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteChtoPosmotret(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_CHTO_POSMOTRET] });
    },
  });
};

export const useCreateChtoPosmotret = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateChtoPosmotret) => createChtoPosmotret(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_CHTO_POSMOTRET] });
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

export const useUpdateChtoPosmotret = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateChtoPosmotret & { id: number }) =>
      updateChtoPosmotret(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [GET_CHTO_POSMOTRET_DETAIL],
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
