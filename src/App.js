//import "./App.css"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { UserContextProvider } from "./context/UserContext"

import ROUTES from "./routes/ROUTES"
import PrivateRoute from "./routes/PrivateRoute"
import PublicRoute from "./routes/PublicRoute"
import { Header } from "./components/header"

import { Home } from "./page/home"
import LoginPage from "./page/login"
import { Dashboard } from "./page/dashboard"
import { PlaylistPage } from "./page/playlist"
import { WatchPage } from "./page/watch"
import SignUpPage from "./page/signUp"

function App() {
  return (
    <UserContextProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <PublicRoute exact path={ROUTES.SIGNUP} component={SignUpPage} />
            <PublicRoute exact path={ROUTES.LOGIN} component={LoginPage} />
            <PublicRoute
              exact
              path={ROUTES.WATCH + ":id"}
              component={WatchPage}
            />
            <PrivateRoute
              exact
              restricted
              path={ROUTES.DASHBOARD}
              component={Dashboard}
            />
            <PrivateRoute
              exact
              restricted
              path={ROUTES.PLAYLIST + ":id"}
              component={PlaylistPage}
            />
            <PublicRoute exact path={ROUTES.HOME} component={Home} />
          </Switch>
        </div>
      </Router>
    </UserContextProvider>
  )
}

export default App
