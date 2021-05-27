import React from "react"
import { Route, Redirect } from "react-router-dom"
import useUser from "../hooks/useUser"
import ROUTES from "./ROUTES"
const PrivateRoute = ({ component: Component, restricted, ...rest }) => {
  // restricted = false meaning public route
  // restricted = true meaning restricted route
  const { isLogged } = useUser()
  console.log(isLogged)
  return <Route {...rest} render={(props) => <Component {...props} />} />
}

export default PrivateRoute
