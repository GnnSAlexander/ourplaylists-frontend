import React from "react"
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core"
import { useHistory } from "react-router"

export const VideoList = ({ list, loading }) => {
  const history = useHistory()

  const handleClick = (data) => {
    const pathName = "/video/" + data.id.videoId
    history.push(pathName, { data })
  }
  return (
    <>
      <List>
        {loading && (
          <ListItem>
            <ListItemText>Loading...</ListItemText>
          </ListItem>
        )}

        {!loading &&
          list.map((item) => {
            const { videoId } = item.id
            const { thumbnails, title } = item.snippet
            return (
              <ListItem
                style={{ cursor: "pointer" }}
                key={videoId}
                onClick={() => handleClick(item)}
              >
                <ListItemAvatar>
                  <Avatar>
                    <img src={thumbnails.default.url} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>{title}</ListItemText>
              </ListItem>
            )
          })}
      </List>
    </>
  )
}
