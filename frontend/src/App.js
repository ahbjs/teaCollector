import './App.css';
import { Routes, Route} from "react-router-dom";
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
      <Routes>
      
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/webbook" element={<WebBook/>} />
          <Route exact path="/contactus" element={<ContactUs/>} />
          <Route exact path="/addSelling" element={<AddSelling/>} />
          <Route exact path="/addMessage" element={<AddMessage/>} />
          <Route exact path="/aboutus" element={<AboutUs/>} />
          <Route exact path="/updateselling/:phone" element={<UpdateComment/>} />
        
      </Routes>
    </div>
  );
}

export default App;
