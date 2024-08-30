/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { tokenService } from "../service/tokenService";
import { notification } from "antd";

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
        message: err.data.message,
        duration: 3,
      });
      console.log(err);
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
