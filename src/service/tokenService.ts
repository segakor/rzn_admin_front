const JWT_TOKEN_KEY_NAME = "rznJwt";

export const tokenService = {
  getJwtToken() {
    return JSON.parse(localStorage.getItem(JWT_TOKEN_KEY_NAME) ?? "{}").token;
  },
  getIsAuth() {
    return JSON.parse(localStorage.getItem(JWT_TOKEN_KEY_NAME) ?? "{}").token
      ? true
      : false;
  },
  removeJwtToken() {
    localStorage.removeItem(JWT_TOKEN_KEY_NAME);
  },
  setJwtToken(value: { token: string }) {
    localStorage.setItem(JWT_TOKEN_KEY_NAME, JSON.stringify(value));
  },
};
