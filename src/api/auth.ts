import { axiosClient } from "../config";

export const login = async ({
  userName,
  password,
}: {
  userName: string;
  password: string;
}) => {
  return (
    await axiosClient.post<{ token: string }>(`/api/login`, {
      userName,
      password,
    })
  ).data;
};
