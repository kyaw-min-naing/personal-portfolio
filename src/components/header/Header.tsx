import React from "react";
import "./Header.css";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <nav className="header">
      <ul className="logo">
        <li>Kyaw Min Naing</li>
      </ul>
      <ul className="nav-links">
        <li onClick={() => onNavigate("home")}>Home</li>
        <li onClick={() => onNavigate("about")}>About</li>
        <li onClick={() => onNavigate("services")}>Services</li>
        <li onClick={() => onNavigate("work")}>Latest Work</li>
        <li onClick={() => onNavigate("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
