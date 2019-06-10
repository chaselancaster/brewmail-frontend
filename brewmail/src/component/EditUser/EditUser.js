import React, { Component } from "react";

class EditUser extends Component {
  state = {
    username: "",
    password: "",
    email: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateUser = async e => {
    try {
      e.preventDefault();
      const userCall = await fetch(
        `http://localhost:3001/user/update/${this.props.currentUser._id}`,
        {
          method: "PUT",
          // credentials: "include",
          body: JSON.stringify(this.state),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(userCall, "<-- userCall in updateUser function");
      const response = await userCall.json();
      console.log(response, "<-- response in updateUser function");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h1>User Edit Page</h1>
        <div>
          <form onSubmit={this.updateUser}>
            <h3>Password: </h3>
            <input
              type="text"
              name="username"
              onChange={this.changeHandler}
              value={this.props.currentUser.username}
            />
            <input
              type="password"
              name="password"
              onChange={this.changeHandler}
              value={this.props.currentUser.password}
            />
            <br />
            <h3>Email: </h3>
            <input
              type="text"
              name="email"
              onChange={this.changeHandler}
              value={this.props.currentUser.email}
            />
            <br />
            <button type="submit">Update Account</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditUser;
