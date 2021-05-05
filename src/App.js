import "./App.css"
import { SearchVideo } from "./components/searchVideo"
import { Grid } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Home } from "./page/home"
import { Video } from "./page/video"

function App() {
  console.log(process.env)
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route path="/video/:id" children={<Video />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
