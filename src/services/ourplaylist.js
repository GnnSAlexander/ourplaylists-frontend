const BASE_URL = "http://localhost:3123"

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
}

export default ourplaylist
