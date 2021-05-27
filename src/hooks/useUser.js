import { useCallback, useContext, useState } from "react"
import Context from "../context/UserContext"
import ourplaylist from "../services/ourplaylist"

export default function useUser() {
  const { user, setUser } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(
    ({ username, password }) => {
      setState({ ...state, loading: true })
      const data = ourplaylist
        .login({ username, password })
        .then((user) => {
          setUser(user)
        })
        .catch((err) => {
          console.log(err)
          setState({ ...state, error: true })
        })
    },
    [setUser]
  )

  return {
    error: state.error,
    isLogged: Boolean(user),
    loading: state.loading,
    login,
  }
}
