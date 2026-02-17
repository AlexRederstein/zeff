import user from "/files/user.png";
import burger from "/files/burger.png";
import logo from "/files/logo.svg";
import { useState } from "react";
import "./Header.scss";

export default () => {
  var [opened, setOpened] = useState(true);

  return (
    <header>
      <a
        href=""
        style={{ height: "100%", display: "inline-block", borderRadius: "5px" }}
      >
        <img src={logo} alt="logo" style={{ height: "100%" }} />
      </a>
      <div className="avatar-container">
        <span>Иванов В.</span>
        <button className="avatar-button">
          <img src={user} alt="avatar" />
        </button>
        <button
          className="avatar-button burger-button"
          onClick={() => setOpened(!opened)}
        >
          <img src={burger} alt="avatar" />
        </button>
      </div>
      {opened && <ContextMenu />}
    </header>
  );
};

const ContextMenu = () => {
  return (
    <div className="context-menu">
      <ul>
        <li>
          <a href="">Профиль</a>
        </li>
        <li>
          <a href="">Понравившиеся</a>
        </li>
        <li>
          <a href="">Настройки</a>
        </li>
      </ul>
    </div>
  );
};
