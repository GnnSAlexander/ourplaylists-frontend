import { useEffect, useState } from "react"
import ourplaylist from "../services/ourplaylist"

export default function usePlaylist({ id, listUpdated }) {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: false,
  })

  const [refetch, setRefetch] = useState({})

  useEffect(() => {
    setState({ ...state, loading: true })
    const getPlaylist = async () => {
      try {
        const data = await ourplaylist.getPlaylist(id)
        setState({ ...state, data })
      } catch (error) {
        setState({ ...state, error: true })
        throw new Error("Algo se jodio")
      }
    }

    getPlaylist()
  }, [listUpdated, refetch])

  return {
    state,
    setRefetch,
  }
}
