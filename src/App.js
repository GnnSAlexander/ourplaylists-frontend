import "./App.css"
import { SearchVideo } from "./components/searchVideo"
import { Grid } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Home } from "./page/home"
import { Video } from "./page/video"
import LoginPage from "./page/login"
import { UserContextProvider } from "./context/UserContext"
import PublicRoute from "./routes/PublicRoute"
import ROUTES from "./routes/ROUTES"
import PrivateRoute from "./routes/PrivateRoute"
import { Dashboard } from "./page/dashboard"

function App() {
  return (
    <UserContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <PublicRoute exact path={ROUTES.HOME} component={Home} />
            <PublicRoute exact path={ROUTES.LOGIN} component={LoginPage} />
            <PrivateRoute
              exact
              restricted
              path={ROUTES.DASHBOARD}
              component={Dashboard}
            />
            <Route path="/video/:id" children={<Video />} />
          </Switch>
        </div>
      </Router>
    </UserContextProvider>
  )
}

export default App
