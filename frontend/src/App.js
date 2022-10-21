
import logo from "./logo.svg";
import "./App.css";
import Register from "./pages/register page/Register";
import Login from "./pages/login page/Login";
import PriceManagement from "./pages/priceManagement/priceManagement";
import PriceList from "./pages/PriceList/PriceList";
import UpdatePrice from "./pages/UpdatePrice page/UpdatePrice";
import LorryManagement from "./pages/lorryManagement/lorryManagement";

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import AdminDashboard from './component/Admin/AdminDashboard';
import RoadManagement from './component/Admin/RoadManagement';
import AddRoad from './component/Admin/AddRoad';
import EditRoad from './component/Admin/EditRoad';

import AddSeller from './component/Seller/AddSeller';
import ViewSeller from './component/Seller/ViewSeller';

import EditSeller from './component/Seller/EditSeller';


function App() {
  return (
    <div>
      <main>
          <Routes>

          </Routes>
      </main>

      <Routes>
        <Route exact path="/AdminDashboard" element={<AdminDashboard/>} />
        <Route exact path="/RoadManagement" element={<RoadManagement/>} />
        <Route exact path="/AddRoad" element={<AddRoad/>} />

        <Route exact path="/AddSeller" element={<AddSeller/>} />
        <Route exact path="/viewSellers" element={<ViewSeller/>} />
        <Route exact path="/EditSeller/:id" element={<EditSeller/>} />

        <Route exact path="/EditRoad/:id" element={<EditRoad/>} />

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
              path="/update/:sellerID"
              
              element={<UpdatePrice />}
            />

      </Routes>
    </div>
  );
}

export default App;
