import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import portimg from "../Image/portimg.jpg";

export default class Contacts extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-banner">
          <h1>Contacts</h1>
          <div className="contacts-centering">
            <div className="data_container">
              <a
                href="https://www.linkedin.com/in/kirbyc6/"
                target="_blank"
                rel="noopener no referrer"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
            <div className="data_container">
              <div className="phone">
                <i class="fas fa-phone-square-alt"></i>
                <p>(917)756-6610</p>
              </div>
            </div>
            <div className="data_container">
              <div className="email">
                <i class="fas fa-envelope-square"></i>
                <p>Kirbyc6@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
