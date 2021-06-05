import React, { useState } from "react"
import { DropzoneArea } from "material-ui-dropzone"
import { Button } from "@material-ui/core"
import ourplaylist from "../../services/ourplaylist"

export const UploadImage = () => {
  const [file, setFile] = useState(null)
  const handleChange = ([file]) => setFile(file)

  const handleSave = () => {
    const formData = new FormData()
    console.log(file)
    formData.append("file", file)
    formData.append("username", "gary")
    ourplaylist
      .upload(formData)
      .then((res) => console.log("comp", res))
      .catch((error) => error)
  }
  return (
    <>
      <DropzoneArea
        acceptedFiles={["image/jpeg", "image/png"]}
        showPreviews={false}
        maxFileSize={5000000}
        onChange={handleChange}
      />

      <Button onClick={handleSave}>Save</Button>
    </>
  )
}
