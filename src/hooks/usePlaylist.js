import { useEffect, useState } from "react"
import ourplaylist from "../services/ourplaylist"

export default function usePlaylist({ ownOfuser, listUpdated }) {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: false,
  })

  useEffect(() => {
    console.log("entro")
    setState({ ...state, loading: true })
    const getPlaylist = async () => {
      try {
        const data = await ourplaylist.getPlaylist()
        setState({ ...state, data })
      } catch (error) {
        setState({ ...state, error: true })
        throw new Error("Algo se jodio")
      }
    }

    getPlaylist()
  }, [listUpdated])

  return {
    state,
  }
}
