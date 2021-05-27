import React from "react"
import { Route, Redirect } from "react-router-dom"
import ROUTES from "./ROUTES"
const PublicRoute = ({ component: Component, restricted, ...rest }) => (
  // restricted = false meaning public route
  // restricted = true meaning restricted route
  <Route
    {...rest}
    render={(props) =>
      restricted ? <Redirect to={ROUTES.HOME} /> : <Component {...props} />
    }
  />
)

export default PublicRoute
