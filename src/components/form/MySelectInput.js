import { useField } from 'formik';
import { InputLabel, TextField, MenuItem } from '@mui/material';

const MySelectInput = ({ inputLabel, options, ...props }) => {
    const [field, meta] = useField(props.name);

    return (
        <div>
            <InputLabel
                sx={{ textTransform: 'uppercase', fontWeight: 600, mb: 1 }}
                htmlFor={props.name}
            >
                {inputLabel || 'Pass inputLabel props'}
            </InputLabel>
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
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    );
};

export default MySelectInput;
