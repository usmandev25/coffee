import { useParams } from "react-router-dom";
import { useGetOneCoffee } from "../../hooks/useGetOneCoffee/useGetOneCoffee";
import "./Edit.scss";
import { useForm } from "react-hook-form";
import type { IPostProduct } from "../../types/types";
import { usePatchCoffee } from "../../hooks/usePatchCoffee/usePatchCoffee";
const Edit = () => {
  const { id } = useParams();
  const { data: product } = useGetOneCoffee(id);
  const { mutate: patchCoffee } = usePatchCoffee();
  const { register, handleSubmit} = useForm<IPostProduct>();
  console.log(product);

  const handleData = (data: IPostProduct) => {
    patchCoffee({
      id: id,
      patchProduct: {
        title: data.title,
        price: data.price,
        image: data.image,
      },
    });``
  };

  return (
    <form onSubmit={handleSubmit(handleData)}>
      <div id="edit">
        <div className="container">
          <div className="edit">
            <input
              defaultValue={product?.title}
              {...register("title", { required: true })}
              type="text"
              placeholder="name"
            />
            <input
              defaultValue={product?.price}
              {...register("price", { required: true, valueAsNumber: true })}
              type="number"
              placeholder="price"
            />
            <input
              defaultValue={product?.image}
              {...register("image", { required: true })}
              type="text"
              placeholder="image"
            />
            <button type="submit">send</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Edit;
