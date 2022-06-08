import { Box } from "@mui/material";
import Friends from "./Friends";
import Photos from "./Photos";
import Converasations from "./Converasations";
import Title from "./Title";

const Rightbar = () => {
  return (
    <Box flex={2} p={3} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="static" sx={{ marginRight: 2 }}>
        <Title title="Online Friends" />
        <Friends />
        <Title title="Latest Photos" />
        <Photos />
        <Title title="Latest Converasations" />
        <Converasations />
      </Box>
    </Box>
  );
};

export default Rightbar;
