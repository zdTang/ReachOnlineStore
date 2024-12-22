import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Settings from "./components/Settings/Settings";
import Navigation from "./components/UI/Navigation";
import Main from "./Main";
import CartProvider from "./store/CartProvider";
import ItemManagement from "./components/Settings/ItemManagement";
import Metrics from "./components/Settings/Metrics";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="settings" element={<Settings />}>
            <Route path="management" element={<ItemManagement />} />
            <Route path="metrics" element={<Metrics />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};
export default App;
