import avatar from "/files/user.png";
import "./Profile.scss";
import user from "../../user.json";

export default () => {
  console.log(user);

  return (
    <div className="profile">
      <div className="profile-info-container">
        <img src={avatar} alt="avatar" />
        <div className="profile-info">
          <h1>{user.name}</h1>
          <span>{user.nickname}</span>
          <span>Дата регистрации: {user.registration_date}</span>
        </div>
      </div>
      <span>Ваши статьи:</span>
      <div className="statistics-container"></div>
    </div>
  );
};
