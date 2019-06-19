import React from 'react';
import Button from '@material-ui/core/Button'

const Spotify = () => {
  const openLoginWindow = () => {
    const url = 'http://localhost:4000/spotifyauth'
    const target = '_blank'
    const specs = 'width=500,height=500'
    window.open(url, target, specs)
  }

  return (
    <Button onClick={openLoginWindow}>Log into Spotify</Button>
  )
}

export default Spotify;