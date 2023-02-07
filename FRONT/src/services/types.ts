export type fetchServiceProps = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: Record<string, string | number | boolean> | string;
};
