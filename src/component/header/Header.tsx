import { Link } from "react-router-dom";
import logo from "/src/assets/shared/logo.svg";
import { useEffect, useRef, useState } from "react";
import "./Header.scss";
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "DESTINATION", href: "#destination" },
    { name: "CREW", href: "#crew" },
    { name: "TECHNOLOGY", href: "#technology" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <div ref={navRef}>
      <div className={`menu-btn ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className={`menu-btn_burger ${isOpen ? "open" : ""}`}></span>
      </div>

      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="navbar-brand">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>

        <ul className={`navbar-nav ${isOpen ? "open" : ""}`}>
          {navItems.map((item, index) => (
            <div className="fit-container">
              <li
                key={index}
                className={`nav-item ${activeItem === index ? "active" : ""}`}
                onClick={() => handleItemClick(index)}
              >
                <a href={item.href}>{item.name}</a>
              </li>
            </div>
          ))}
        </ul>

        {/* <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">00 HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">01 DESTINATION</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">02 CREW</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">01 TECHNOLOGY</Link>
          </li>
        </ul> */}
      </nav>
    </div>
  );
};

export default Header;
