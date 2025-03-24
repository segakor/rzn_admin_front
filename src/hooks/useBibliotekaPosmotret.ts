import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import {
  getBibliotekaPosmotret,
  getBibliotekaPosmotretDetail,
  createBibliotekaPosmotretDetail,
  updateBibliotekaPosmotret,
  deleteBibliotekaPosmotret,
  TUpdateBibliotekaPosmotret,
  TCreateBibliotekaPosmotret,
} from "../api/biblioteka";

const GET_POSMOTRET = "GET_POSMOTRET";
const GET_POSMOTRET_DETAIL = "GET_POSMOTRET_DETAIL";

export const useGetBibliotekaPosmotret = () => {
  return useQuery({
    queryKey: [GET_POSMOTRET],
    queryFn: async () => {
      try {
        return await getBibliotekaPosmotret();
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

export const useGetBibliotekaPosmotretDetail = (id: string) => {
  return useQuery({
    queryKey: [GET_POSMOTRET_DETAIL, id],
    queryFn: () => getBibliotekaPosmotretDetail(id),
  });
};

export const useDeleteBibliotekaPosmotret = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteBibliotekaPosmotret(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_POSMOTRET] });
    },
  });
};

export const useCreateBibliotekaPosmotret = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateBibliotekaPosmotret) =>
      createBibliotekaPosmotretDetail(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_POSMOTRET] });
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

export const useUpdateBibliotekaPosmotret = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TUpdateBibliotekaPosmotret) =>
      updateBibliotekaPosmotret(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [GET_POSMOTRET_DETAIL],
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
