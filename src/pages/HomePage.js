import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const LandDetails = () => {
    const columns = [
        { field: 'landCode', headerName: 'Land Code', width: 150 },
        { field: 'landSize', headerName: 'Land Size (Katha)', width: 180 },
        { field: 'location', headerName: 'Location', flex: 1 },
        { field: 'landShare', headerName: 'Land Share in Project Katha', width: 250 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <div>
                    <IconButton aria-label="edit" onClick={() => handleEdit(params.row.id)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            ),
        },
    ];
    const landDetails = [
        { id: 1, landCode: 'LC001', landSize: '5 Katha', location: 'Location A', landShare: '2 Katha' },
        { id: 2, landCode: 'LC002', landSize: '8 Katha', location: 'Location B', landShare: '3 Katha' },
    ];

    const handleEdit = (id) => {
        // Implement your edit logic here
        console.log(`Edit clicked for id: ${id}`);
    };

    const handleDelete = (id) => {
        // Implement your delete logic here
        console.log(`Delete clicked for id: ${id}`);
    };

    return (
        <div style={{ width: '100%' }}>
            <Typography sx={{ my: 6 }} variant='h5'>Land Details</Typography>
            <DataGrid
                rows={landDetails}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
                checkboxSelection
                hideFooter={true}
            />
        </div>
    );
};

export default LandDetails;
