import React, {useState} from "react";
import {AppBar, Typography} from '@material-ui/core'

const Layout = ({children}) => {
  return (
    <div>
      <AppBar position='fixed'>
        <Typography variant="h6">Eastside Swim School</Typography>
      </AppBar>
      <div>
      {children}
      </div>
    </div>
  )
}

export default Layout;