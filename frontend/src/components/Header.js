import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1" style={{ margin: "auto" }}>
            Visual Novel Reccomender
          </span>
        </nav>
      </div>
    );
  }
}

export default Header;
