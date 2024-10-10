import { Routes, Route } from "react-router-dom";
import { memo } from "react";
import Error from "../views/Error";
import Index from "../views/Index";
import Fashion from "../views/Fashion";
import Accessory from "../views/Accessory";
import Digital from "../views/digital";
import ItemDetail from "../components/products/ItemDetail";
import CartView from "../components/carts/CartView";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Index />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/accessory" element={<Accessory />} />
      <Route path="/digital" element={<Digital />} />
      <Route path="/product/:id" element={<ItemDetail />} />
      <Route path="/cart" element={<CartView />} />
    </Routes>
  );
};

export default memo(Router);
