import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_KEY } from "../../server/api";

export const useGetOneCoffee = (id: string | undefined) => {
  return useQuery({
    queryKey: ["get-one", id],
    queryFn: async () => {
      const response = await axios.get(`${API_KEY}/${id}`);
      return response.data;
    },
  });
};
