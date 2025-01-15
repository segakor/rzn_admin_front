import { format, startOfDay } from "date-fns";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import {
  createOrganizovannyeMarshruty,
  deleteOrganizovannyeMarshruty,
  getOrganizovannyeMarshruty,
  getOrganizovannyeMarshrutyDetail,
  TCreateOrganizovannyeMarshruty,
  updateOrganizovannyeMarshruty,
} from "../api/organizovannyeMarshruty";

const GET_ORGANIZOVANNYE_MARSHRUTY = "GET_ORGANIZOVANNYE_MARSHRUTY";
const GET_ORGANIZOVANNYE_MARSHRUTY_DETAIL =
  "GET_ORGANIZOVANNYE_MARSHRUTY_DETAIL";

export const useGetOrganizovannyeMarshruty = () => {
  return useQuery({
    queryKey: [GET_ORGANIZOVANNYE_MARSHRUTY],
    queryFn: async () => {
      try {
        return await getOrganizovannyeMarshruty();
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

export const useGetOrganizovannyeMarshrutyDetail = (id: string) => {
  return useQuery({
    queryKey: [GET_ORGANIZOVANNYE_MARSHRUTY_DETAIL, id],
    queryFn: () => getOrganizovannyeMarshrutyDetail(id),
  });
};

export const useDeleteOrganizovannyeMarshruty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteOrganizovannyeMarshruty(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_ORGANIZOVANNYE_MARSHRUTY],
      });
    },
  });
};

export const useCreateOrganizovannyeMarshruty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateOrganizovannyeMarshruty) =>
      createOrganizovannyeMarshruty({
        ...body,
        dates: body.dates.map((item) => format(startOfDay(item), "yyyy-MM-dd")),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_ORGANIZOVANNYE_MARSHRUTY],
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

export const useUpdateOrganizovannyeMarshruty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateOrganizovannyeMarshruty & { id: number }) =>
      updateOrganizovannyeMarshruty({
        ...body,
        dates: body.dates.map((item) => format(startOfDay(item), "yyyy-MM-dd")),
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [GET_ORGANIZOVANNYE_MARSHRUTY_DETAIL],
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
