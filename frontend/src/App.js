import logo from "./logo.svg";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Register from "./pages/register page/Register";
import Login from "./pages/login page/Login";
import PriceManagement from "./pages/priceManagement/priceManagement";
import PriceList from "./pages/PriceList/PriceList";
import UpdatePrice from "./pages/UpdatePrice page/UpdatePrice";
import AdminDashboard from "./component/Admin/AdminDashboard";
import AddRoad from "./component/Admin/AddRoad";
import LorryManagement from "./pages/lorryManagement/lorryManagement";

function App() {
  return (
    <div>
      <main>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/admin" exact element={<AdminDashboard />} />
            <Route path="/AddRoad" exact element={<AddRoad />} />
            <Route
              path="/PriceManagement"
              exact
              element={<PriceManagement />}
            />
            <Route path="/PriceList" exact element={<PriceList />} />
            <Route
              path="/LorryManagement"
              exact
              element={<LorryManagement />}
            />

            <Route
              exact
              path="/PriceList/update/:sellerID"
              element={<UpdatePrice />}
            />
          </Routes>
      </main>
    </div>
  );
}

export default App;
