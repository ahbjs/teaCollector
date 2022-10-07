import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import AdminDashboard from './component/Admin/AdminDashboard';
import RoadManagement from './component/Admin/RoadManagement';
import AddRoad from './component/Admin/AddRoad';
import EditRoad from './component/Admin/EditRoad';

function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<AdminDashboard/>} />
        <Route exact path="/RoadManagement" element={<RoadManagement/>} />
        <Route exact path="/AddRoad" element={<AddRoad/>} />
        <Route exact path="/EditRoad/:id" element={<EditRoad/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
