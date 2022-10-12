import "./Footer.css"
import cheat_img from "../../../src/images/cheat_img.JPG"

export default function Footer(){
    return (
      <div className="footer">
        <img className="footer-img" src={cheat_img} />
        <p className="footerText">Home</p>
        <p className="footerText2">About Us</p>
        <p className="footerText3">Web Book</p>
        <p className="footerText4">Service Details</p>

        <div className="terms">
          <p className="termText">Terms . Privacy Policy</p>
        </div>
        <p className="copyRights">Copyright @ Phuongmadethis 2022</p>
      </div>
    );
}