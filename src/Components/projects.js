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
import CryptoLanding from "../Image/CryptoLanding.png";

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
                {/* Krypto Tracker */}
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background: `url(https://www.uktech.news/wp-content/uploads/2021/05/Crypto-Terms-898x505.jpg) center/cover`,
                    }}
                  >
                    Crypto Tracker
                  </CardTitle>
                  <CardText>A Crypto Tracker building using Next.js</CardText>
                  <CardActions border>
                    <Button
                      href="https://github.com/Cloudykirby/CryptoTracker"
                      colored
                      target="_blank"
                    >
                      Github
                    </Button>

                    <Button
                      colored
                      target="_blank"
                      href="https://crypto-tracker-jet.vercel.app/"
                    >
                      App
                    </Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}></CardMenu>
                </Card>
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
                  <CardText>
                    Spooky 2D Multiplayer Capture-the-Flag game, built in Phaser
                    You and your friends are having a spooky party...but noone
                    brought pumpkins! Other ghosts are having the same problem,
                    but pumpkins are limited! Be the first team to bring 10
                    pumpkins back to win.
                  </CardText>
                  <CardActions border>
                    <Button
                      href="https://github.com/2008-a-bst-grows-in-brooklyn/shrub-wars"
                      colored
                      target="_blank"
                    >
                      Github
                    </Button>
                    <Button
                      href="https://www.youtube.com/watch?v=aWSimwLwwXk"
                      colored
                      target="_blank"
                    >
                      Youtube
                    </Button>
                    <Button
                      colored
                      target="_blank"
                      href="http://boo-bash.herokuapp.com/"
                    >
                      App
                    </Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}></CardMenu>
                </Card>
                {/* MazeGame */}
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background: `url(https://khn.org/wp-content/uploads/sites/2/2019/12/Getty-465412159_maze_1350.jpg) center/cover`,
                    }}
                  >
                    Maze App
                  </CardTitle>
                  <CardText>
                    A project done in 4 days to learn Pathfinding Algorithms and
                    React Native
                  </CardText>
                  <CardActions border>
                    <Button
                      colored
                      href="https://github.com/Cloudykirby/Maze-app"
                      target="_blank"
                    >
                      Github
                    </Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}></CardMenu>
                </Card>
                {/* Cheese  */}
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background: `url(https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg) center/cover`,
                    }}
                  >
                    Cheese E-Commerce
                  </CardTitle>
                  <CardText>
                    E-Commerce site that sells cheeses. This application was
                    created using React and Redux
                  </CardText>
                  <CardActions border>
                    <Button
                      href="https://github.com/2008-FSA-Grace-Shopper-Cheese/GraceShopper"
                      colored
                      target="_blank"
                    >
                      Github
                    </Button>
                    <Button
                      colored
                      target="_blank"
                      href="https://grace-cheese-prime.herokuapp.com/"
                    >
                      App
                    </Button>
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}></CardMenu>
                </Card>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
