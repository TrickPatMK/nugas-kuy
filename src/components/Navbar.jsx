import "material-icons/iconfont/filled.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  function onClickHandler(e) {

    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => item.classList.remove("active"))
    e.currentTarget.classList.toggle("active")
  }
  
  return (
    <>
      <nav className="nav-wrapper">
        <Link to='/' className="nav-item active" onClick={onClickHandler}>
          <span className="material-icons">home</span>
          <span className="nav-item-text">Home</span>
        </Link>
        <Link to='/addTask' className="nav-item" onClick={onClickHandler}>
          <span className="material-icons">add</span>
          <span className="nav-item-text">AddTask</span>
        </Link>
      </nav>
    </>
  )
}