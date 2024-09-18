const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getImageUrl = (path: string) => {
  return `${BASE_URL}/${path}`
}