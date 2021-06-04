import { useEffect, useState } from "react"
import ourplaylist from "../services/ourplaylist"

export default function useWatch({ id }) {
  const [state, setState] = useState({
    playlist: null,
    songs: null,
    songSelected: null,
    loading: false,
    error: false,
    messageError: "",
  })

  useEffect(() => {
    setState({ ...state, loading: true })
    const getPlaylist = async () => {
      try {
        const data = await ourplaylist.getPlaylist(id)
        console.log(data)
        setState({
          ...state,
          playlist: data,
          songs: data.songs,
          songSelected: data.songs[0],
        })
      } catch (error) {
        setState({ ...state, error: true, messageError: error })
        throw new Error("Algo se jodio")
      }
    }

    getPlaylist()
  }, [])

  const setSongSelected = (song_id) => {
    const newSongSelected = state.songs.find((song) => song.song_id === song_id)
    setState({ ...state, songSelected: newSongSelected })
  }

  const nextSong = () => {
    const index = state.songs.findIndex(
      (song) => song.song_id === state.songSelected.song_id
    )
    const newSongSelected = state.songs[index + 1]
      ? state.songs[index + 1]
      : state.songs[0]

    setState({ ...state, songSelected: newSongSelected })
  }

  return {
    state,
    nextSong,
    setSongSelected,
  }
}
