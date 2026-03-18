import "./Auth.scss";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const result = await res.json();
      // console.log(res);
      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(result.user));
        console.log(result);
        navigate("/");
      } else {
        alert("not ok");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="login-form" onSubmit={submit}>
      <span>Логин:</span>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <span>Пароль:</span>
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <label className="checkbox">
        <input type="checkbox" />
        Запомнить меня
      </label>
      <button>Войти</button>
      <hr />
      <Link to="">Забыли пароль?</Link>
      <Link to="/registrarion">Регистрация</Link>
    </form>
  );
};
