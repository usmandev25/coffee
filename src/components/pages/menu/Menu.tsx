import { useGetCoffee } from "../../hooks/useGetCoffee/useGetCoffee";
import { useCoffee } from "../../hooks/useOrderCoffee/useCoffee";
import "./Menu.scss";
const Menu = () => {
  const { data, isError, error, isLoading } = useGetCoffee();
  const {pushCoffeeInCart} = useCoffee()
  console.log(data, "data");
  

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div id="menu">
        <center>
            <h1 style={{paddingBottom: "60px"}}>MENU</h1>
        </center>
      <div className="container">
        {isLoading ? (
          "Loading..."
        ) : (
          <div className="menu">
            {
             data?.map((el) => (
                <div className="menu--card" key={el._id}>
                    <img src={el.image} alt={el.title} />
                    <h1>{el.title}</h1>
                    <div className="menu--card__nav">
                        <h2>{el.price} $</h2>
                        <button onClick={() => pushCoffeeInCart(el)}>to order</button>
                    </div>
                </div>
             ))   
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
