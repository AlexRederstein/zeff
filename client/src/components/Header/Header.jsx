import user from "/files/user.png";
import logo from "/files/logo2.svg";
import { Link } from "react-router-dom";
import DropMenu from "../DropMenu/DropMenu";
import "./Header.scss";
import { useEffect } from "react";

export default () => {
  useEffect(() => {
    fetch("/api")
      .then((res) => {
        return res.text();
      })
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  }, []);

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
        <DropMenu className="avatar-button burger-button">
          <ul>
            <li>
              <a href="/profile">Профиль</a>
            </li>
            <li>
              <a href="/profile">Настройки</a>
            </li>
            <li>
              <a href="/profile">Выйти</a>
            </li>
          </ul>
        </DropMenu>
      </div>
    </header>
  );
};
