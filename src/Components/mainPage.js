import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import portimg from "../Image/portimg.jpg";

export default class MainPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="main-Grid">
          <Cell col={12}>
            <img src={portimg} alt="avtar" className="avatar-img" />
            <div className="banner">
              <h1>Full Stack Developer</h1>
              <hr />
              <p>JavaScript | React | HTML | PostgreSQL | NodeJs</p>
              <div className="social">
                {/*LinkedIn icon*/}
                <a
                  href="https://www.linkedin.com/in/kirbyc6/"
                  target="_blank"
                  rel="noopener no referrer"
                >
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a>
                {/*Github icon*/}
                <a
                  href="https://github.com/Cloudykirby"
                  target="_blank"
                  rel="noopener no referrer"
                >
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
