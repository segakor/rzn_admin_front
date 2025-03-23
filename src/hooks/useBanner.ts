import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import {
  createBanner,
  deleteBanner,
  getBanner,
  getBannerDetail,
  TCreateBanner,
  TUpdateBanner,
  updateBanner,
} from "../api/banner";

const GET_BANNER = "GET_BANNER";
const GET_GIT_DETAIL = "GET_GIT_DETAIL";

export const useGetBanner = () => {
  return useQuery({
    queryKey: [GET_BANNER],
    queryFn: async () => {
      try {
        return await getBanner();
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

export const useGetBannerDetail = (id: string) => {
  return useQuery({
    queryKey: [GET_GIT_DETAIL, id],
    queryFn: () => getBannerDetail(id),
  });
};

export const useDeleteBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteBanner(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_BANNER] });
    },
  });
};

export const useCreateBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateBanner) => createBanner(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_BANNER] });
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

export const useUpdateBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TUpdateBanner) => updateBanner(body),
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
