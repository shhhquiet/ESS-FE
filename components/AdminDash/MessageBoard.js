import React, {useState, useEffect} from "react";

import {makeStyles} from "@material-ui/core/styles";
import {useQuery} from "react-apollo-hooks";
import {useMutation} from "../../gql/Mutations/useMutation";
import {ALL_MESSAGES} from "../../gql/Queries/admin/allMessages";
import {CREATE_MESSAGE} from "../../gql/Mutations/employee";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/ButtonBase';

const message = ["o haiii", "another message", "heckin messages guys"];
const MessageBoard = () => {
  const [newMessage, setNewMessage] = useState({title: '', text: ''})
  const {data} = useQuery(ALL_MESSAGES);
  const [createMessage] = useMutation(CREATE_MESSAGE, {variables: {...newMessage}, onError: (e) => console.log(e), onCompleted: (e) => console.log(e) });
  console.log(data)
  
  const handleChange = ({target}) => {
    setNewMessage({...newMessage, [target.name]: target.value})
  }
  return (
    <List>
      {data.messages && data.messages.map(msg => (
        <div>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={msg.text} secondary='Jan 9, 2014' />
          </ListItem>
          <Divider variant='inset' component='li' />
        </div>
      ))}
      <form onSubmit={createMessage}>
      <p>New Message</p>
      <Input
        style={{ margin: 8 }}
        placeholder="Title"
        margin="normal"
        variant="outlined"
        name='title'
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}/>
      <Input
        style={{ margin: 8 }}
        placeholder="Text"
        onChange={handleChange}
        fullWidth
        name='text'
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}/>
        <Button  type='submit' >submit</Button>
        </form>
    </List>
  );
};

export default MessageBoard;
