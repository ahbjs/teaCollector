import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import AdminDashboard from './component/Admin/AdminDashboard';
import RoadManagement from './component/Admin/RoadManagement';
import AddRoad from './component/Admin/AddRoad';
import AddSeller from './component/Seller/AddSeller';
import ViewSeller from './component/Seller/ViewSeller';

function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<AddSeller/>} />
        <Route exact path="/AdminDashboard" element={<AdminDashboard/>} />
        <Route exact path="/RoadManagement" element={<RoadManagement/>} />
        <Route exact path="/AddRoad" element={<AddRoad/>} />
        <Route exact path="/AddSeller" element={<AddSeller/>} />
        <Route exact path="/viewSellers" element={<ViewSeller/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
