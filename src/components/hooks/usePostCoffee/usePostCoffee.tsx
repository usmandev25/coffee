import { useMutation } from "@tanstack/react-query";
import type { IPostProduct } from "../../types/types";
import axios from "axios";
import { API_KEY } from "../../server/api";

export const usePostCoffee = () => {
  return useMutation({
    mutationKey: ["post-coffee"],
    mutationFn: async (body: IPostProduct) => {
      const response = await axios.post(API_KEY, body);
      return response.data;
    },
  });
};
