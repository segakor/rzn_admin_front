import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getNewsArt,
  deleteNewsArt,
  createNewsArt,
  TNewsArt,
} from "../api/news";

const GET_NEWS_ART = "GET_NEWS_ART";

export const useGetNewsArt = () => {
  return useQuery({ queryKey: [GET_NEWS_ART], queryFn: () => getNewsArt() });
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
    mutationFn: (body: TNewsArt) => createNewsArt(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_NEWS_ART] });
    },
  });
};
