import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/main";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="KC" scroll>
            <Navigation>
              <a
                href=" https://cloudykirby.github.io/Kirby%20Chen%20Resume.pdf"
                target="_blank"
              >
                Resume
              </a>
              <Link to="/projects">Projects</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a
                href=" https://cloudykirby.github.io/Kirby%20Chen%20Resume.pdf"
                target="_blank"
              >
                Resume
              </a>
              <Link to="/projects">Projects</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
