import { axiosClient } from "../config";

export const uploadImgBB = async (data: any) => {
  //NOTE: data type UploadRequestOption
  try {
    const form = new FormData();
    form.append("image", data.file);
    const response = await axiosClient.post(`http://79.174.85.156:5001/api/media/image`, form);
    data.onSuccess(response.data);
  } catch (error) {
    data.onError(error);
  }
};