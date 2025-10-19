import { Link } from "react-router-dom";
import "./AdminOrders.scss";
import { useClient, useCoffee } from "../../hooks/useOrderCoffee/useCoffee";
const AdminOrders = () => {
  const { client } = useClient();
  const { cart } = useCoffee();
  console.log(client, "client");

  return (
    <div id="adminOrders">
      <div className="adminModal">
        <Link to={"/admin"}>add</Link>
        <Link to={"/adminList"}>list</Link>
        <Link to={"/"}>orders</Link>
      </div>
      <div className="container">
        <center>Orders Made</center>
        <div className="adminOrders">
          <div className="adminOrders--text">
            <h1>adress</h1>
            <h1>item</h1>
            <h1>send</h1>
          </div>
          <div className="adminOrders--block">
            {client.map((el) => (
              <div className="adminOrders--block__card">
                <div className="adminOrders--block__card--adress">
                  <h1>city: {el.city}</h1>
                  <h1>adress: {el.adress}</h1>
                </div>
                <div className="adminOrders--block__card--article">
                  {cart.map((el) => (
                    <div className="adminOrders--block__card--article__item">
                      <h1>{el.title}</h1>
                      <h1>${el.price}</h1>
                    </div>
                  ))}
                </div>
                <button>send</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
