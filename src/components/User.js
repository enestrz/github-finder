import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "38747547",
      name: "Enes Terzi",
      login: "enestrz",
      avatar_url: "https://avatars.githubusercontent.com/u/38747547?v=4",
      html_url: "https://github.com/enestrz",
      followers: 0,
      blog: "https://www.instagram.com/enestrz/",
    };
  }
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="col-md-4 col-sm-6 col-lg-3">
        <div className="card mt-2">
          <img src={avatar_url} className="img-fluid" alt="" />
          <div className="card-body">
            <h5 className="card-title">{login}</h5>
            <Link to={`/user/${login}`} className="btn btn-primary btn-sm">
              Go Profile
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
