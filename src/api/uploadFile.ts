import { axiosClient } from "../config";

export type TFileData = {
  id: number;
  filePath: string;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const uploadFile = async (data: any) => {
  //NOTE: data type UploadRequestOption
  try {
    const form = new FormData();
    form.append("file", data.file);
    const response = await axiosClient.post<TFileData>(`/uploadFile`, form);
    data.onSuccess(response.data);
    return response.data;
  } catch (error) {
    data.onError(error);
  }
};

export const deleteFile = async (params: { filePath: string; id: number }) => {
  const { id, filePath } = params;
  return (
    await axiosClient.delete(`/deleteFile/${id}`, { params: { filePath } })
  ).data;
};
