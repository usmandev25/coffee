import { Link, useNavigate } from "react-router-dom";
import "./AdminList.scss";
import { useGetCoffee } from "../../hooks/useGetCoffee/useGetCoffee";
import { useDeleteCoffee } from "../../hooks/useDeleteCoffee/useDeleteCoffee";
import { useGetOneCoffee } from "../../hooks/useGetOneCoffee/useGetOneCoffee";
const AdminList = () => {
  const { data, isError, isLoading, error } = useGetCoffee();
  const { mutate } = useDeleteCoffee();
  const nav = useNavigate();

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div id="adminList">
      <div className="adminModal">
        <Link to={"/admin"}>add</Link>
        <Link to={"/"}>list</Link>
        <Link to={"/adminOrders"}>orders</Link>
      </div>
      <div className="container">
        <center
          style={{
            fontSize: "40px",
            paddingBottom: "30px",
            transform: "translatex(-200px)",
          }}
        >
          Admin List
        </center>
        <div className="adminList">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            data?.map((el) => (
              <div className="adminList--card" key={el._id}>
                <div className="adminList--card__data">
                  <img src={el.image} alt={el.title} />
                  <div className="adminList--card__data--text">
                    <h2>{el.title}</h2>
                    <h2>${el.price}</h2>
                  </div>
                </div>
                <div className="adminList--card__btn">
                  <button onClick={() => mutate(el._id)}>delete</button>
                  <button
                    onClick={() => {
                      nav(`/edit/${el._id}`);
                    }}
                  >
                    edit
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminList;
