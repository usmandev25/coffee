import { useGetCoffee } from "../../hooks/useGetCoffee/useGetCoffee";
import { useCoffee } from "../../hooks/useOrderCoffee/useCoffee";
import "./Orders.scss";
const Orders = () => {
  const { cart, decrementCount, incrementCount, deleteCart, deleteAllCoffee } = useCoffee();
  const { isLoading, error, isError } = useGetCoffee();
  console.log(cart, "cart");

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div id="order">
      <center>
        <h1 style={{ paddingBottom: "60px" }}>ORDER</h1>
      </center>
      <div className="container">
        <div className="order">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            cart.map((el) => (
              <div className="order--card" key={el._id}>
                <img src={el.image} alt="img" />
                <div className="order--card__article">
                  <h2>{el.title}</h2>
                  <h3>{el.price} $</h3>
                </div>
                <div className="order--card__delete">
                  <button onClick={() => deleteCart(el._id)}>delete</button>
                  <div className="order--card__delete--count">
                    <button onClick={() => decrementCount(el._id)}>-</button>
                    <h3>{el.count}x</h3>
                    <button onClick={() => incrementCount(el._id)}>+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <center>
        <button className="deleteAll" onClick={() => deleteAllCoffee()}>to order</button>
      </center>
    </div>
  );
};

export default Orders;
