import React, { Component } from "react";

class EditUser extends Component {
  state = {
    username: "",
    password: ""
  };

  doGetUser = async () => {
    try {
      const user = await fetch(`/users/profile`);
      const parsedUser = await user.json();
      console.log(
        parsedUser,
        "<-- parsedUser in doGetUser function in ShowUser.js"
      );
      return parsedUser;
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h1>User Edit Page</h1>
        <div>
          <form onSubmit={this.submitEdit}>
            <h3>Password: </h3>
            <input
              type="password"
              name="password"
              onChange={this.props.changeHandler}
              value={this.props.user.password}
            />
            <br />
            <h3>Email: </h3>
            <input
              type="text"
              name="email"
              onChange={this.props.changeHandler}
              value={this.props.user.email}
            />
            <br />
            <button type="submit" className="updateBtn">
              Update Account
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditUser;
