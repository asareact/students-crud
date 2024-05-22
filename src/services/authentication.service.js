import { BaseURL } from "api.routes";

const { APIRoutes } = require("api.routes");

export const login = async (body) => {
  const response = await fetch(`${BaseURL}${APIRoutes.login}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.text();

  return data;
};
