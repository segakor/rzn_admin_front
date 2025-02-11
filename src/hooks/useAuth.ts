/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "@tanstack/react-query";
import { checkAuth, login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { tokenService } from "../service/tokenService";
import { notification } from "antd";

const GET_CHECK_AUTH = "GET_CHECK_AUTH";

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (params: { userName: string; password: string }) =>
      login(params),
    onSuccess: (data) => {
      tokenService.setJwtToken(data);
      navigate("/main");
    },
    onError: (err: any) => {
      notification.error({
        message: err?.data?.message || err.statusText || JSON.stringify(err),
        duration: 10,
      });
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();

  const logount = () => {
    tokenService.removeJwtToken();
    navigate("/login");
  };

  return {
    logount,
  };
};

export const useCheckAuth = (location: string) => {
  return useQuery({
    queryKey: [GET_CHECK_AUTH, location],
    queryFn: () => checkAuth(),
  });
};
