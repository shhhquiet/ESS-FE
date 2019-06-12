import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';

const messages = ['o haiii', 'another message', 'heckin messages guys']
const MessageBoard = () => {
  return (
    <List>
    {messages.map(msg => (
      <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={msg} secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      </div>
    ))}

    </List>
  )
}

export default MessageBoard;