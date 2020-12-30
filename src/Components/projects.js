import React, { Component } from "react";
import {
  Cell,
  Grid,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";
import booBash from "../Image/Boobash.png";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  render() {
    return (
      <div className="category-tabs">
        <Grid className="projects">
          <Cell col={12}>
            <div className="content">
              <div className="projectSquare">
                {/* Boo Bash */}
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background: `url(https://cdn.pixabay.com/photo/2017/10/10/16/55/halloween-2837936__340.png) center/cover`,
                    }}
                  >
                    Boo Bash
                  </CardTitle>
                  <CardText>PlaceholderText</CardText>
                  <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>Youtube</Button>
                    <Button colored>Application</Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
                {/* MazeGame */}
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background: `url(https://cdn.pixabay.com/photo/2017/10/10/16/55/halloween-2837936__340.png) center/cover`,
                    }}
                  >
                    Boo Bash
                  </CardTitle>
                  <CardText>PlaceholderText</CardText>
                  <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>Youtube</Button>
                    <Button colored>Application</Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
                {/* Cheese  */}
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background: `url(https://cdn.pixabay.com/photo/2017/10/10/16/55/halloween-2837936__340.png) center/cover`,
                    }}
                  >
                    Boo Bash
                  </CardTitle>
                  <CardText>PlaceholderText</CardText>
                  <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>Youtube</Button>
                    <Button colored>Application</Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
