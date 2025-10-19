import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API_KEY } from "../../server/api";

export const useDeleteCoffee = () => {
    const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["delete-coffee"],
    mutationFn: async (id: number) => {
      await axios.delete(`${API_KEY}/${id}`);
    },
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["get-coffee"]})
    }
  });
};
