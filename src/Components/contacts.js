import React, { Component } from "react";

export default class Contacts extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <div className="phone">
          <i class="fas fa-phone-square-alt"></i>
          <p>(917)756-6610</p>
        </div>
        <div>
          <i class="fas fa-envelope-square"></i>
          <p>Kirbyc6@gmail.com</p>
        </div>
      </div>
    );
  }
}
