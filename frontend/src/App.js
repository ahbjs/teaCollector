import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Router>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/AddRoad" component={AddRoad} />
          <Route exact path="/PriceManagement" component={PriceManagement} />
          <Route exact path="/PriceList" component={PriceList} />
          <Route exact path="/LorryManagement" component={LorryManagement} />

          <Route
            exact
            path="/PriceList/update/:sellerID"
            component={UpdatePrice}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
