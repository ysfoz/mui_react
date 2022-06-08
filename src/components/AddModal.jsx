import {
  Image,
  VideoCameraBack,
  PersonAdd,
  EmojiEmotions,
  CalendarMonth,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  ButtonGroup,
  Modal,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AddModal = (props) => {
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
  });
  return (
    <Modal
      open={props.open}
      onClose={(e) => props.onClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box width={400} height={270} bgcolor="white" borderRadius={7} p={3}>
        <Typography variant="h6" textAlign={"center"} color="gray">
          Create a Post
        </Typography>
        <UserBox>
          <Avatar src="https://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100280/33645487-profilsymbol-m%C3%A4nnlichen-avatar-portr%C3%A4t-casual-person.jpg" />
          <Typography variant="h6" ml={2}>
            Ysf Oz
          </Typography>
        </UserBox>
        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="What's your mind ?"
          variant="standard"
        />
        <Stack direction={"row"} mt={2} mb={2}gap={1}>
          <EmojiEmotions sx={{ color: "#ffd600" }} />
          <Image color="success" />
          <VideoCameraBack color="error" />
          <PersonAdd color="primary" />
        </Stack>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          fullWidth

        >
          <Button>Post</Button>
          <Button sx={{width:100}}><CalendarMonth/></Button>
        </ButtonGroup>
      </Box>
    </Modal>
  );
};

export default AddModal;
