module.exports = class UserDTO {
  email;
  userid;
  name;

  constructor(model) {
    this.email = model.email;
    this.userid = model.userid;
    this.name = model.name;
  }
};
