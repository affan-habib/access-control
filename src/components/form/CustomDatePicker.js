import React from "react";
import { useField } from "formik";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import CustomTextField from "./CustomTextField";

const DatePickerComponent = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleChange = (date) => {
    helpers.setValue(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        {...field}
        {...props}
        value={field.value || null}
        onChange={handleChange}
        renderInput={(params) => (
          <CustomTextField fullWidth {...params} variant="outlined" inputLabel={label} />
        )}
        inputFormat="dd/MM/yyyy"

        error={meta.touched && meta.error ? true : false}
        helperText={meta.touched && meta.error ? meta.error : null}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
