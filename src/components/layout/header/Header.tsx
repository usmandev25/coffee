import { Link } from "react-router-dom";
import "./Header.scss"
import logo from "../../../assets/image/header--logo.svg"
const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
            <img src={logo} alt="img" />
            <nav className="header--nav">
                <Link to={"/"}>Menu</Link>
                <Link to={"/order"}>Orders</Link>
                <Link to={"/admin"}>Admin</Link>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
