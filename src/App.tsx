import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Menu from "./components/pages/menu/Menu";
import Admin from "./components/pages/admin/Admin";
import Orders from "./components/pages/orders/Orders";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/order" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
