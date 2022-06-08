
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";

const ListItemComponent = (props) => {
  return (
    <List>
      <ListItem disablePadding onChange={e => props.setMode(props.mode === "dark" ? "light" : "dark")}>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>{props.icon}</ListItemIcon>
          {props.switch ? <Switch/> : <ListItemText primary={props.primary} />}
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default ListItemComponent;
