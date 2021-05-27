import "./App.css"
import { SearchVideo } from "./components/searchVideo"
import { Grid } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Home } from "./page/home"
import { Video } from "./page/video"
import LoginPage from "./page/login"
import { UserContextProvider } from "./context/UserContext"

function App() {
  console.log(process.env)
  return (
    <UserContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" children={<LoginPage />} />
            <Route exact path="/home" children={<Home />} />
            <Route path="/video/:id" children={<Video />} />
          </Switch>
        </div>
      </Router>
    </UserContextProvider>
  )
}

export default App
