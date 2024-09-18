import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getNewsArt,
  deleteNewsArt,
  createNewsArt,
  TCreateNewsArt,
  updateNewsArt,
} from "../api/news";
import { notification } from "antd";

const GET_NEWS_ART = "GET_NEWS_ART";

export const useGetNewsArt = () => {
  return useQuery({
    queryKey: [GET_NEWS_ART],
    queryFn: () => getNewsArt(),
  });
};

export const useDeleteNewsArt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteNewsArt(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_NEWS_ART] });
    },
  });
};

export const useCreateNewsArt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateNewsArt) => createNewsArt(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_NEWS_ART] });
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

export const useUpdateNewsArt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateNewsArt & { id: number }) => updateNewsArt(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_NEWS_ART] });
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
