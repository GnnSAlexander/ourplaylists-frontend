import React from "react"
import { useState, useEffect } from "react"
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@material-ui/core"
import { VideoList } from "../VideoList"

export const SearchVideo = () => {
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

  const loadYoutubeApi = () => {
    const script = document.createElement("script")
    script.src = "https://apis.google.com/js/client.js"

    script.onload = () => {
      window.gapi.load("client", () => {
        window.gapi.client.setApiKey(GOOGLE_API_KEY)
        window.gapi.client.load("youtube", "v3", () => {
          console.log("this is ready")
        })
      })
    }

    document.body.appendChild(script)
  }

  useEffect(() => {
    loadYoutubeApi()
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const q = search

    if (q.length > 3) {
      console.log("search")
      setLoading(true)
      const response = await window.gapi.client.youtube.search.list({
        q,
        part: "snippet",
      })
      console.log(response.result)
      setList(response.result.items)
      setLoading(false)
      setSearch("")
    }
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          name={search}
          placeholder="Search video"
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      </form>
      <VideoList list={list} loading={loading} />
    </>
  )
}
