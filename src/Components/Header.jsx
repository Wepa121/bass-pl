import {title, seller} from "../Data/data"
import {Link} from "react-router-dom"
function Header() {
  return (
    <header>
      <div className="container flex">
        <div className="asci">
          <p className="title">{title}</p>
          <p className="title-content">{seller}</p>
        </div>
        <nav>
          <ul>
            <li><Link to = "/" className="link">Home</Link></li>
            <li><Link to = "/about" className="link">About</Link></li>
            <li><Link to = "/contact" className="link">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header