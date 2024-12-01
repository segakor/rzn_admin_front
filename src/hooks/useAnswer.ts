import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import {
  createAnswer,
  deleteAnswer,
  getAnswer,
  getAnswerDetail,
  TAnswer,
  TCreateAnswer,
  updateAnswer,
} from "../api/answers";

const GET_ANSWER = "GET_ANSWER";
const GET_ANSWER_DETAIL = "GET_ANSWER_DETAIL";

export const useGetAnswer = () => {
  return useQuery({
    queryKey: [GET_ANSWER],
    queryFn: () => getAnswer(),
    staleTime: 0,
    gcTime: 0,
  });
};

export const useGetAnswerDetail = (id: string) => {
  return useQuery({
    queryKey: [GET_ANSWER_DETAIL, id],
    queryFn: () => getAnswerDetail(id),
  });
};

export const useDeleteAnswer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteAnswer(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_ANSWER] });
    },
  });
};

export const useCreateAnswer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TCreateAnswer) => createAnswer(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_ANSWER] });
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

export const useUpdateAnswer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: TAnswer) =>
      updateAnswer(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [GET_ANSWER_DETAIL],
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
