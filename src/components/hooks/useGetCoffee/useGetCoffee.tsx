import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_KEY } from "../../server/api";
import type { IResponse } from "../../types/types";

export const useGetCoffee = () => {
  return useQuery({
    queryKey: ["get-coffee"],
    queryFn: async () => {
      const response = await axios.get<IResponse>(API_KEY);
      return response.data.data;
    },
  });
};
