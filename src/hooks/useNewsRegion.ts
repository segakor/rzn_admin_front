import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createNewsRegion, deleteNewsRegion, getNewsRegion, updateNewsRegion } from "../api/newsRegion";
import { notification } from "antd";
import { TCreateNewsArt } from "../api/newsArt";

const GET_NEWS_REGION = "GET_NEWS_REGION";

export const useGetNewsRegion = () => {
  return useQuery({
    queryKey: [GET_NEWS_REGION],
    queryFn: () => getNewsRegion(),
  });
};

export const useDeleteNewsRegion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteNewsRegion(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_NEWS_REGION] });
    },
  });
};

export const useCreateNewsRegion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateNewsArt) => createNewsRegion(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_NEWS_REGION] });
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

export const useUpdateNewsRegion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateNewsArt & { id: number }) => updateNewsRegion(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_NEWS_REGION] });
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
