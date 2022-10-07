import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import WebBook from './pages/WebBook/WebBook';
import ContactUs from './pages/ContactUs/ContactUs';
import AddSelling from './pages/AddSelling/AddSelling';
import AddMessage from './pages/AddMessage/AddMessage';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import UpdateComment from './pages/UpdateComment/UpdateComment';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/webbook" component={WebBook} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/addSelling" component={AddSelling} />
          <Route exact path="/addMessage" component={AddMessage} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/updateselling/:phone" component={UpdateComment} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
