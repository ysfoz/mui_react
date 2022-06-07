import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar"
import { Box,  Stack } from "@mui/material";

function App() {
  return (
 <Box>
   {/* <NavBar/> */}
   <Stack direction={"row"} spacing={3}>
     <Sidebar/>
     <Feed/>
     <Rightbar/>
   </Stack>
 </Box>
  );
}

export default App;
