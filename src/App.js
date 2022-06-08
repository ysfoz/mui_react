import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import AddButton from "./components/AddButton";
import AddModal from "./components/AddModal";
import { useState } from "react";


function App() {
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color="text.primary">
        <Navbar />
        <Stack direction={"row"} spacing={3}>
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <AddButton onClick={setOpen} />
        <AddModal open={open} onClose={setOpen} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
