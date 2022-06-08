import { Add } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";

const AddButton = (props) => {
  return (
    <Tooltip
      title="Add"
      arrow
      sx={{
        position: "fixed",
        bottom: 20,
        left: { xs: "calc(50% - 25px)", md: 30 },
      }}
    >
      <Fab color="primary" aria-label="add">
        <Add onClick={(e) => props.onClick(true)} />
      </Fab>
    </Tooltip>
  );
};

export default AddButton;
