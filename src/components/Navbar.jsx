import { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { AcUnit, Mail, Notifications } from "@mui/icons-material";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    width: "30%",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
  }));

  const Icon = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: { display: "flex" },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: { display: "none" },
  }));
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          NAVBAR
        </Typography>
        <AcUnit sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search . . ." />
        </Search>
        <Icon>
          <Badge badgeContent={4} color="secondary">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ height: 30, width: 30 }}
            src="https://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100280/33645487-profilsymbol-m%C3%A4nnlichen-avatar-portr%C3%A4t-casual-person.jpg"
            onClick={e=>setOpen(true)}
          />
        </Icon>
        <UserBox>
          <Avatar
            sx={{ height: 30, width: 30 }}
            src="https://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100280/33645487-profilsymbol-m%C3%A4nnlichen-avatar-portr%C3%A4t-casual-person.jpg"
            onClick={e=>setOpen(true)}
          />
          <Typography>Ysf</Typography>
        </UserBox>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={null}
          open={open}
          onClose={e=>setOpen(false)}
          anchorOrigin={{
            vertical: "right",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
