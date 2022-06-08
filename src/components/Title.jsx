import { Typography } from "@mui/material";

const Title = (props) => {
  return (
    <Typography fontWeight={100} mb={2} mt={2} variant="h6">
      {props.title}
    </Typography>
  );
};

export default Title;
