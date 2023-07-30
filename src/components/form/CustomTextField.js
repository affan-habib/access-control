import { InputLabel, TextField } from "@mui/material";

const CustomTextField = (props) => {
  const { inputLabel, ...otherProps } = props;

  return (
    <div>
      <InputLabel sx={{ textTransform: "uppercase", fontWeight: 600, mb: 1 }}>
        {inputLabel || "Pass inputLabel props"}
      </InputLabel>
      <TextField variant="outlined" {...otherProps} fullWidth/>
    </div>
  );
};
export default CustomTextField;
