import { axiosClient } from "../config";

export type TImageData = {
  id: number;
  imagePath: string;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const uploadImage = async (data: any, destination: string) => {
  //NOTE: data type UploadRequestOption
  try {
    const form = new FormData();
    form.append("file", data.file);
    const response = await axiosClient.post<TImageData>(`/upload`, form, {
      params: { destination },
    });
    data.onSuccess(response.data);
    return response.data;
  } catch (error) {
    data.onError(error);
  }
};
