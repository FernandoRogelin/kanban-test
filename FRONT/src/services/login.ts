import fetchService from "services";

import { LoginPayload } from "types/login";

export const loginApp = (payload: LoginPayload) =>
  fetchService({
    url: "login/",
    body: payload,
    method: "POST",
  });
