import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

const CustomCheckbox = ({ label, ...props }) => {
  return (
    <FormControlLabel
      sx={{ width: "400px" }}
      control={<Checkbox {...props} />}
      label={label}
      labelPlacement="end"
    />




    
  );
};

export default CustomCheckbox;
