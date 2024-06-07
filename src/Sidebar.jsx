import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const navItems = ['Home','About'];


export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header>
            <button
              type="button"
              className="sidebar-burger"
              onClick={() => setIsOpen(!isOpen)}
            >
                
              <span className="material-symbols-outlined">
                {isOpen ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
              </span>
            </button>
            {/* <img src={logo} /> */}
          </header>

          <nav>
            <ul>
                {
                    navItems.map((items) => (
                        <li key={items}><Link to={items}>{items}</Link></li>
                    ))
                }
            </ul>
          </nav>
          
        </div>
      </aside>
  )
}
