import { Typography } from "@mui/material";
import React from "react";

const Header = (props) => {
  return (
    <div>
      <Typography variant="h3">
        {props.heading}
        </Typography>
    </div>
  );
};

export default Header;
