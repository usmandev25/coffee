import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Menu from "./components/pages/menu/Menu";
import Admin from "./components/pages/admin/Admin";
import Orders from "./components/pages/orders/Orders";
import AdminList from "./components/pages/adminList/AdminList";
import AdminOrders from "./components/pages/adminOrders/AdminOrders";
import ClientData from "./components/pages/clientData/ClientData";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/clientData" element={<ClientData />} />
        <Route path="/adminList" element={<AdminList />} />
        <Route path="/adminOrders" element={<AdminOrders />} />
      </Routes>
    </div>
  );
}

export default App;
