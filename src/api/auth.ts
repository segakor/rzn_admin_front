import { axiosClient } from "../config";

export const login = async ({
  userName,
  password,
}: {
  userName: string;
  password: string;
}) => {
  return (
    await axiosClient.post<{ token: string }>(`/login`, {
      userName,
      password,
    })
  ).data;
};

export const checkAuth = async () => {
  return (await axiosClient.get(`/me`)).data;
};
