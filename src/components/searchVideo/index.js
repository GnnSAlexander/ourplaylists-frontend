import React from "react"
import { useState, useEffect } from "react"
import { Button, Grid, TextField } from "@material-ui/core"
import { VideoList } from "../VideoList"

export const SearchVideo = ({ addSong }) => {
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
        maxResults: 15,
      })
      console.log(response.result)
      setList(response.result.items)
      setLoading(false)
      setSearch("")
    }
  }
  return (
    <Grid container item md={12} justify="center">
      <form onSubmit={(e) => handleSubmit(e)} style={{ width: "100%" }}>
        <Grid container justify="center" alignItems="center" item md={12}>
          <Grid item xs={10} md={5}>
            <TextField
              name={search}
              placeholder="Search video"
              onChange={(event) => setSearch(event.currentTarget.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={2} md={1}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid item md={6}>
        <VideoList list={list} loading={loading} addSong={addSong} />
      </Grid>
    </Grid>
  )
}
