import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import { createLongRead, getLongRead, TLongRead, updateLongRead } from "../api/longRead";

const GET_LONG_READ = "GET_LONG_READ";

export const useGetLongRead = (id: string) => {
  return useQuery({
    queryKey: [GET_LONG_READ, id],
    queryFn: () => getLongRead(id),
  });
};

export const useCreateLongRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: Omit<TLongRead, 'id'>) => createLongRead(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_LONG_READ] });
      notification.success({
        message: 'Запись создана',
        duration: 5,
        placement: 'bottom'
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

export const useUpdateLongRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: Omit<TLongRead, 'id'>) => updateLongRead(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_LONG_READ] });
      notification.success({
        message: 'Запись обновлена',
        duration: 5,
        placement: 'bottom'
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
