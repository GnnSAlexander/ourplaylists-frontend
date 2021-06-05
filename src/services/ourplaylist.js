const BASE_URL = "http://localhost:3123"
const VERSION = "/api"

const ourplaylist = {
  login({ username, password }) {
    const path = BASE_URL + "/login"
    return fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Response is not OK")
        return res.json()
      })
      .then((res) => {
        return res
      })
  },
  signUp({ name, username, password }) {
    const path = BASE_URL + "/user"
    return fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, username, password }),
    })
      .then((res) => {
        if (!res.ok) return res.json()
        return res.json()
      })
      .then((res) => {
        return res
      })
  },
  getToken() {
    const { token } = window.sessionStorage.getItem("OURPLAYLIST_TOKEN")
      ? JSON.parse(window.sessionStorage.getItem("OURPLAYLIST_TOKEN"))
      : {}
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    })
    return myHeaders
  },

  getPlaylist(id) {
    const headers = this.getToken()
    const path = BASE_URL + VERSION + "/playlist/"
    const url = id ? path + id : path
    return fetch(url, {
      headers,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Response is not OK")
        return res.json()
      })
      .then((res) => {
        return res
      })
  },

  createPlaylist(data) {
    const headers = this.getToken()
    return fetch(BASE_URL + VERSION + "/playlist", {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        return res
      })
      .catch((error) => {
        throw new Error(error)
      })
  },

  addSong(data) {
    const headers = this.getToken()
    return fetch(BASE_URL + VERSION + "/song", {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        return res
      })
      .catch((error) => {
        throw new Error(error)
      })
  },

  deleteSong(id) {
    const headers = this.getToken()
    return fetch(BASE_URL + VERSION + "/song/" + id, {
      method: "DELETE",
      headers,
    })
      .then((res) => {
        if (res.status === 204) {
          return { success: "true" }
        }
      })
      .then((res) => {
        return res
      })
      .catch((error) => {
        throw new Error(error)
      })
  },
  upload(data) {
    const headers = this.getToken()
    headers.delete("Content-Type")
    return fetch(BASE_URL + "/upload", {
      method: "POST",
      headers,
      body: data,
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        return res
      })
      .catch((error) => {
        throw new Error(error)
      })
  },
}

export default ourplaylist
