import { Box } from "@mui/material";

const Sidebar = () => {
  return (
    <Box bgcolor={"crimson"} flex={1} p={3} sx={{display:{xs:"none",sm:"block"}}}>
      Sidebar
    </Box>
  );
};

export default Sidebar;
