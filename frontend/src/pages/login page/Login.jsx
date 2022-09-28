import "./Login.css"
import img2 from "../../images/img2.jpg"
import { BrowserRouter ,Link } from "react-router-dom";

export default function Login(){
    return (
      <div>
        <div className="main">
          <img className="sideImage" src={img2} />
          <form className="registerForm">
            <h1 className="SignUpText">Sign In</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <input placeholder="Email" className="input" />
            <br />
            <br />
            <br />
            <input
              input
              type="password"
              placeholder="password"
              className="input-password"
            />
            <br />
            <br />
            <br />
            <BrowserRouter forceRefresh={true}>
              <Link to="/admin">
                <button className="button-3">Login</button>
              </Link>
            </BrowserRouter>
          </form>
        </div>
      </div>
    );
}