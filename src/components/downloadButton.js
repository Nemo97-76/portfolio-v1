import React from "react";
import Button from "@mui/joy/Button";
const DownloadButton = ({ fileurl, filename }) => {
  const handelDownload = () => {
    const link = document.createElement('a');
    link.href = fileurl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <Button
        onClick={handelDownload}
        id="download-pdf-button"
        className="btn"
      >
        download Resume
      </Button>
    </>
  )
}
export default DownloadButton