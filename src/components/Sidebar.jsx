import { Box } from "@mui/material";
import ListItemComponent from "./ListItemComponent";
import { AccountCircle, Article, Groups, Home, NightlightRound, Person, Settings, Shop } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box flex={1} p={3} sx={{display:{xs:"none",sm:"block"}}}>
      <ListItemComponent primary="Home" icon={<Home/>}/>
      <ListItemComponent primary="Pages" icon={<Article/>}/>
      <ListItemComponent primary="Groups" icon={<Groups/>}/>
      <ListItemComponent primary="Marketplace" icon={<Shop/>}/>
      <ListItemComponent primary="Friends" icon={<Person/>}/>
      <ListItemComponent primary="Settings" icon={<Settings/>}/>
      <ListItemComponent primary="Profile" icon={<AccountCircle/>}/>
      <ListItemComponent primary="Home" icon={<NightlightRound/>} switch/>
    </Box>
  );
};

export default Sidebar;
