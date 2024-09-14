import { axiosClient } from "../config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const uploadImgBB = async (data: any, destination: string) => {
  //NOTE: data type UploadRequestOption
  try {
    const form = new FormData();
    form.append("file", data.file);
    const response = await axiosClient.post(`/upload`, form, {
      params: { destination },
    });
    data.onSuccess(response.data);
  } catch (error) {
    data.onError(error);
  }
};
