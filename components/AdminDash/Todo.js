import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from '@material-ui/core/TextField';

const todos = ["do one thing", "do another thing", "do a third thing"];
const TodoList = () => {
  return (
    <List>
    Todo
      {todos.map(todo => (
        <ListItem key={todo} role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              edge='start'
              checked={false}
              tabIndex={-1}
              disableRipple
              inputProps={{"aria-labelledby": todo}}
            />
          </ListItemIcon>
          <ListItemText id={todo} primary={todo} />
        </ListItem>
      ))}
        <TextField fullWidth placeholder='Create a new todo'/>
    </List>
  );
};

export default TodoList;
