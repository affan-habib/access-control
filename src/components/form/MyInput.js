import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import {
  Grid,
  TextField,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  MenuItem,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const MyInput = ({ label, type, options, md = 6, sm = 12, lg = 4, keyKey = "id", valueKey = "id", labelKey = "name", ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const handleChange = (value) => {
    helpers.setValue(value);
  };

  let inputComponent = null;

  switch (type) {
    case "text":
      // Text input component
      inputComponent = (
        <TextField
          fullWidth
          {...field}
          {...props}
          error={meta.touched && meta.error}
          helperText={meta.touched && meta.error}
        />
      );
      break;
    case "number":
      // Number input component
      inputComponent = (
        <TextField
          fullWidth
          type="number"
          {...field}
          {...props}
          error={meta.touched && meta.error}
          helperText={meta.touched && meta.error}
        />
      );
      break;
    case "select":

      // Select input component
      inputComponent = (
        <div>
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            variant="outlined"
            select
            {...field}
            {...props}
            error={meta.touched && meta.error}
            helperText={meta.touched && meta.error}
          >
            <MenuItem value=" ">
              <em>None</em>
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option[keyKey]} value={option[valueKey]}>
                {option[labelKey]}
              </MenuItem>
            ))}
          </TextField>
        </div>
      );
      break;
    case "date":
      // Date picker input component
      inputComponent = (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            {...field}
            {...props}
            value={field.value || null}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField
                fullWidth
                {...params}
                variant="outlined"
                error={meta.touched && meta.error}
                helperText={meta.touched && meta.error}
              />
            )}
            inputFormat="dd/MM/yyyy"
          />
        </LocalizationProvider>
      );
      break;
    case "checkbox":
      // Checkbox input component
      inputComponent = (
        <FormControlLabel
          control={
            <Checkbox
              {...field}
              {...props}
              checked={field.value}
              onChange={(e) => field.onChange(e)}
            />
          }
          label={label}
        />
      );
      break;
    case "radio":
      // Radio button input component
      inputComponent = (
        <RadioGroup {...field} {...props} row>
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      );
      break;
    default:
      // Default text input component
      inputComponent = (
        <TextField
          fullWidth
          {...field}
          {...props}
          error={meta.touched && meta.error}
          helperText={meta.touched && meta.error}
        />
      );
      break;
  }

  return (
    <Grid item xs={12} sm={sm} md={md} lg={lg}>
      {type !== "checkbox" && (
        <InputLabel sx={{ textTransform: "uppercase", fontWeight: 600, mb: 1 }}>
          {label}
        </InputLabel>
      )}
      {inputComponent}
    </Grid>
  );
};

MyInput.propTypes = {
  label: PropTypes.string.isRequired, // Label for the input field (required)
  type: PropTypes.oneOf(["text", "number", "select", "date", "checkbox", "radio"]), // Type of input field
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired, // Value of the option (required)
      label: PropTypes.string.isRequired, // Label for the option (required)
    })
  ), // Array of options for select or radio inputs
  md: PropTypes.number, // Number of columns for medium-sized screens (default: 6)
  sm: PropTypes.number, // Number of columns for small-sized screens (default: 12)
  lg: PropTypes.number, // Number of columns for large-sized screens (default: 4)
  // Add other prop types as needed
};

export default MyInput;
