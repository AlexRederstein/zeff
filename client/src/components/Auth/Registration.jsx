export default () => {
  return (
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
      <Link to="">Забыли пароль?</Link>
      <Link to="/registrarion">Регистрация</Link>
    </form>
  );
};
