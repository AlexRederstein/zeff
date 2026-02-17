import user from "/files/user.png";
import burger from "/files/burger.png";
import logo from "/files/logo2.svg";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default () => {
  var [opened, setOpened] = useState(false);

  const ref = useRef(null);
  const btnRef = useRef(null);

  const headerClick = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !btnRef.current.contains(event.target)
    ) {
      setOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", headerClick);
    return () => document.removeEventListener("click", headerClick);
  });

  return (
    <header>
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="avatar-container">
        <span>Иванов В.</span>
        <button className="avatar-button">
          <img src={user} alt="avatar" />
        </button>
        <button
          ref={btnRef}
          className="avatar-button burger-button"
          onClick={() => setOpened(!opened)}
        >
          <img src={burger} alt="avatar" />
        </button>
      </div>
      {opened && <ContextMenu ref={ref} />}
    </header>
  );
};

const ContextMenu = ({ ref }) => {
  return (
    <div className="context-menu" ref={ref}>
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
