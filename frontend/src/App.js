import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import AdminDashboard from './component/Admin/AdminDashboard';

function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<AdminDashboard/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
