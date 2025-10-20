import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_KEY } from "../../server/api";
import type { IPatch } from "../../types/types";

export const usePatchCoffee = () => {
  return useMutation({
    mutationKey: ["patch-coffee"],
    mutationFn: async ({ id, patchProduct }: IPatch) => {
      const response = await axios.patch(`${API_KEY}/${id}`, patchProduct);
      return response.data;
    },
  });
};
