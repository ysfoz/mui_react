import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar"
import { Box,  Stack } from "@mui/material";
import AddButton from "./components/AddButton";
import AddModal from "./components/AddModal";
import { useState } from "react";

function App() {
  const [open,setOpen] =useState(false)
  return (
 <Box>
   <Navbar/>
   <Stack direction={"row"} spacing={3}>
     <Sidebar/>
     <Feed/>
     <Rightbar/>
   </Stack>
   <AddButton onClick={setOpen}/>
   <AddModal open={open} onClose={setOpen}/>
 </Box>
  );
}

export default App;
