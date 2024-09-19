import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <div className="menu-container">
          <button onClick={toggleMenu} id="menu-toggle">
            ☰
          </button>

          <div className={`menu ${isOpen ? "open" : ""}`}>
            <div className="info">
              <FaUserCircle></FaUserCircle>
              <h3>Ayan Tahir</h3>
            </div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
