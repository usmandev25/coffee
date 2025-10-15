import { useForm } from "react-hook-form";
import "./admin.scss";
import type { IPostProduct } from "../../types/types";
import { usePostCoffee } from "../../hooks/usePostCoffee/usePostCoffee";
const Admin = () => {
  const { register, handleSubmit, reset } = useForm<IPostProduct>();
  const { mutate, error, isError, isPending } = usePostCoffee();
  const handleData = (data: IPostProduct) => {
    mutate(data)
    reset();
  };
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <form onSubmit={handleSubmit(handleData)}>
      <div id="admin">
        <div className="container">
          <center>
            <h1>CREATE PRODUCT</h1>
          </center>
          <div className="admin">
            <div className="admin--article">
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="title"
              />
              <input
                {...register("price", { required: true, valueAsNumber: true })}
                type="number"
                placeholder="price"
              />
              <button type="submit">
                {isPending ? "create..." : "Create"}
              </button>
            </div>
            <input
              {...register("image", { required: true })}
              type="text"
              placeholder="place for a photo"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Admin;
