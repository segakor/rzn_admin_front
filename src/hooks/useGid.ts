import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import {
  createGid,
  deleteGid,
  getGid,
  getGidDetail,
  TCreateGid,
  TUpdateGid,
  updateGid,
} from "../api/gid";

const GET_GID = "GET_GID";
const GET_GIT_DETAIL = "GET_GIT_DETAIL";

export const useGetGid = () => {
  return useQuery({
    queryKey: [GET_GID],
    queryFn: async () => {
      try {
        return await getGid();
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

export const useGetGidDetail = (id: string) => {
  return useQuery({
    queryKey: [GET_GIT_DETAIL, id],
    queryFn: () => getGidDetail(id),
  });
};

export const useDeleteGid = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteGid(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_GID] });
    },
  });
};

export const useCreateGid = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateGid) => createGid(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_GID] });
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

export const useUpdateGid = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TUpdateGid) => updateGid(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [GET_GIT_DETAIL],
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
