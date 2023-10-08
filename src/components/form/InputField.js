import React from 'react';
import { useField } from 'formik';
import TextField from '@mui/material/TextField';

const InputField = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    // Determine whether to show an error message
    const errorText = meta.touched && meta.error ? meta.error : '';

    return (
        <TextField
            {...field}
            {...props}
            label={label}
            error={!!errorText}
            helperText={errorText}
            variant="outlined"
            fullWidth
        />
    );
};

export default InputField;
