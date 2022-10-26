import {FaRobot} from "react-icons/fa"
import {AiFillHome} from "react-icons/ai"
import {TbPhoneCall} from "react-icons/tb"
import {BiEnvelope} from "react-icons/bi"
function Footer() {
  return (
    <footer>
      <div className="container">
        <div><FaRobot size = "3rem"/>
          <p>Copyright &#169; 2022. All rights reserved</p>
        </div>
        <div className="contact">
          <p>Contact Us</p>
          <div className="contacts"><AiFillHome size="1.25rem"/><p>Turkmenistan. Ashgabat</p></div>
          <div className="contacts"><TbPhoneCall size="1.25rem"/><p>+99364488958</p></div>
          <div className="contacts"><BiEnvelope size="1.25rem"/><p>example@gmail.com</p></div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer