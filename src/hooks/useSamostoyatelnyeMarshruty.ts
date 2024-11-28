import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getSamostoyatelnyeMarshruty,
  deleteSamostoyatelnyeMarshruty,
  createSamostoyatelnyeMarshruty,
  TCreateSamostoyatelnyeMarshruty,
  updateSamostoyatelnyeMarshruty,
  getSamostoyatelnyeMarshrutyDetail
} from "../api/samostoyatelnyeMarshruty";
import { notification } from "antd";

const GET_SAMOSTOYATELNYE_MARSHRUTY = "GET_SAMOSTOYATELNYE_MARSHRUTY";
const GET_SAMOSTOYATELNYE_MARSHRUTY_DETAIL = "GET_SAMOSTOYATELNYE_MARSHRUTY_DETAIL";

export const useGetSamostoyatelnyeMarshruty = () => {
  return useQuery({
    queryKey: [GET_SAMOSTOYATELNYE_MARSHRUTY],
    queryFn: () => getSamostoyatelnyeMarshruty(),
    staleTime: 0,
    gcTime: 0,
  });
};

export const useGetSamostoyatelnyeMarshrutyDetail = (id: string) => {
  return useQuery({
    queryKey: [GET_SAMOSTOYATELNYE_MARSHRUTY_DETAIL, id],
    queryFn: () => getSamostoyatelnyeMarshrutyDetail(id),
  });
};

export const useDeleteSamostoyatelnyeMarshruty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteSamostoyatelnyeMarshruty(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_SAMOSTOYATELNYE_MARSHRUTY] });
    },
  });
};

export const useCreateSamostoyatelnyeMarshruty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateSamostoyatelnyeMarshruty) => createSamostoyatelnyeMarshruty(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_SAMOSTOYATELNYE_MARSHRUTY] });
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

export const useUpdateSamostoyatelnyeMarshruty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateSamostoyatelnyeMarshruty & { id: number }) =>
      updateSamostoyatelnyeMarshruty(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [GET_SAMOSTOYATELNYE_MARSHRUTY_DETAIL],
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
