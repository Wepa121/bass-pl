import {Link} from "react-router-dom"
import Title from "../components/Title"
import NavLink from "../components/NavLink"
function Header() {
  return (
    <header>
      <div className="container flex">
        <div className="asci">
          <Title data = "Electronics"/>
          <Title data = "Best seller"/>
        </div>
        <nav>
          <ul>
            <li><Link to = "/" className="link"><NavLink data = "Home"/></Link></li>
            <li><Link to = "/about" className="link"><NavLink data = "About"/></Link></li>
            <li><Link to = "/contact" className="link"><NavLink data = "Contact"/></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header