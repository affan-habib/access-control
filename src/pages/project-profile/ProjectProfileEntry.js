import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Grid, InputLabel, TextField, Button, Container, Divider, Typography, InputAdornment, IconButton, Select, MenuItem } from '@mui/material';
import { Search } from '@mui/icons-material';
import HomePage from 'pages/HomePage';

const validationSchema = Yup.object().shape({
    ProjectCode: Yup.string().required('Project Code is required'),
    ProjectName: Yup.string().required('Project Name is required'),
    ProjectAddress: Yup.string().required('Project Address is required'),
    ProjectLocationId: Yup.number().required('Project Location ID is required'),
    ProjectStartDt: Yup.date().required('Project Start Date is required'),
    ProjectFinishDt: Yup.date().required('Project Finish Date is required'),
    ProjectRemarks: Yup.string(),
    ProjectRelationId: Yup.number().required('Project Relation Id is required'),
    ProjectPreviousname: Yup.string().max(50, 'Project Previousname must be a maximum of 50 characters long'),
    ProjectHoDateSales: Yup.date().nullable().test('date', 'Invalid date format', (value) => {
        if (!value) return true; // Allow empty dates
        return /^\d{1,2}\/\d{1,2}\/\d{4} \d{1,2}:\d{2}([APap][Mm])?$/.test(value);
    }),
    ProjectHandoverDate: Yup.date().nullable().test('date', 'Invalid date format', (value) => {
        if (!value) return true; // Allow empty dates
        return /^\d{1,2}\/\d{1,2}\/\d{4} \d{1,2}:\d{2}([APap][Mm])?$/.test(value);
    }),
    ProjectCarpark: Yup.number(),
    ProjectClosedDate: Yup.date().nullable().test('date', 'Invalid date format', (value) => {
        if (!value) return true; // Allow empty dates
        return /^\d{1,2}\/\d{1,2}\/\d{4} \d{1,2}:\d{2}([APap][Mm])?$/.test(value);
    }),
    ProjectPersueOfficeId: Yup.number(),
    OfficeId: Yup.number(),
    ProjectCancelDate: Yup.date().nullable().test('date', 'Invalid date format', (value) => {
        if (!value) return true; // Allow empty dates
        return /^\d{1,2}\/\d{1,2}\/\d{4} \d{1,2}:\d{2}([APap][Mm])?$/.test(value);
    }),
});

const initialValues = {
    ProjectCode: 'PROJ001',
    ProjectName: 'Sample Project',
    ProjectAddress: '123 Main Street',
    ProjectLocationId: 2,
    ProjectStartDt: '2023-01-15',
    ProjectFinishDt: '2023-06-30',
    ProjectRemarks: 'This is a sample project',
    ProjectRelationId: 0,
    ProjectPreviousname: '',
    ProjectHoDateSales: null,
    ProjectHandoverDate: null,
    ProjectCarpark: 0,
    ProjectClosedDate: null,
    ProjectPersueOfficeId: 0,
    OfficeId: 0,
    ProjectCancelDate: null,
};

const ProjectForm = () => {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 'calc(100vh - 70px)',
                mt: 6
            }}
        >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Grid container spacing={2}>
                        <Grid item lg={12}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant='h4'>Project Profile Entry</Typography>
                                <Button variant="contained" color="primary" size='large'>Save</Button>
                            </div>
                            <Divider sx={{ my: 4 }} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <InputLabel sx={{ mb: 1 }} htmlFor="ProjectCode">Project Code</InputLabel>
                            <Field
                                component={TextField}
                                type="text"
                                name="ProjectCode"
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton aria-label="search">
                                                <Search />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <InputLabel sx={{ mb: 1 }} htmlFor="ProjectName">Project Name</InputLabel>
                            <Field
                                component={TextField}
                                type="text"
                                name="ProjectName"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <InputLabel sx={{ mb: 1 }} htmlFor="ProjectPreviousname">Project Previous name</InputLabel>
                            <Field
                                component={TextField}
                                type="text"
                                name="ProjectPreviousname"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <InputLabel sx={{ mb: 1 }} htmlFor="ProjectPreviousname">Last Project name</InputLabel>
                            <Field
                                component={TextField}
                                type="text"
                                name="ProjectPreviousname"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <InputLabel sx={{ mb: 1 }} htmlFor="ProjectAddress">Project Address</InputLabel>
                            <Field
                                component={TextField}
                                type="text"
                                name="ProjectAddress"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <InputLabel sx={{ mb: 1 }} htmlFor="ProjectLocationId">Project Size</InputLabel>
                            <Field
                                component={TextField}
                                type="number"
                                name="ProjectSize"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <InputLabel sx={{ mb: 1 }} htmlFor="ProjectLocationId">Number Of Car Parking</InputLabel>
                            <Field
                                component={TextField}
                                type="number"
                                name="noOfCarParking"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <InputLabel sx={{ mb: 1 }} htmlFor="ProjectLocationId">Project Location</InputLabel>
                            <Field
                                component={Select}
                                name="ProjectLocationId"
                                fullWidth
                            >
                                <MenuItem value={1}>Location 1</MenuItem>
                                <MenuItem value={2}>Location 2</MenuItem>
                                <MenuItem value={3}>Location 3</MenuItem>
                                {/* Add more MenuItem components as needed */}
                            </Field>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <InputLabel sx={{ mb: 1 }} htmlFor="ProjectStartDt">Project Start Date</InputLabel>
                            <Field
                                component={TextField}
                                type="date"
                                name="ProjectStartDt"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <InputLabel sx={{ mb: 1 }} htmlFor="ProjectFinishDt">Project Finish Date</InputLabel>
                            <Field
                                component={TextField}
                                type="date"
                                name="ProjectFinishDt"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputLabel sx={{ mb: 1 }} htmlFor="ProjectRemarks">Project Remarks</InputLabel>
                            <Field
                                component={TextField}
                                as="textarea"
                                name="ProjectRemarks"
                                fullWidth
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <InputLabel sx={{ mb: 1 }} htmlFor="ProjectRelationId">Project Relation</InputLabel>
                            <Field
                                component={Select}
                                name="ProjectRelationId"
                                fullWidth
                            >
                                <MenuItem value={1}>Relation 1</MenuItem>
                                <MenuItem value={2}>Relation 2</MenuItem>
                                <MenuItem value={3}>Relation 3</MenuItem>
                                {/* Add more MenuItem components as needed */}
                            </Field>
                        </Grid>

                        {/* Add more fields here based on your model */}
                        <Grid item xs={12}>
                            <HomePage />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </Container>
    );
};

export default ProjectForm;
