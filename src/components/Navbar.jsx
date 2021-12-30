import "material-icons/iconfont/filled.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="nav-wrapper">
        <Link to='/' className="nav-item">
        <span class="material-icons">home</span>
          <span className="nav-item-text">Home</span>
        </Link>
        <Link to='/addTask' className="nav-item">
          <span class="material-icons">add</span>
          <span className="nav-item-text">AddTask</span>
        </Link>
      </nav>
    </>
  )
}