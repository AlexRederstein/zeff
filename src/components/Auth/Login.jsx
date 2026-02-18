import "./Auth.scss";

export default () => {
  return (
    // <div>
    <form className="login-form" action="">
      <span>Логин:</span>
      <input type="text" />
      <span>Пароль:</span>
      <input type="text" />
      <label className="checkbox">
        <input type="checkbox" />
        Запомнить меня
      </label>
      <button>Войти</button>
      <hr />
      <a href="">Забыли пароль?</a>
      <a href="">Регистрация</a>
    </form>
    // </div>
  );
};
