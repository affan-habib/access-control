import React, { useEffect, useState } from "react";
import fetcher from "lib/fetcher";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
    Typography,
    Button,
    Box, // Import Box for styling
    Pagination, // Import Pagination component
} from "@mui/material";

function HomePage() {
    const [userData, setUserData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // Fetch user data from Reqres API
        fetcher(`https://reqres.in/api/users?page=${currentPage}`)
            .then((data) => {
                setUserData(data.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, [currentPage]);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                User Data
            </Typography>
            <TableContainer component={Paper} square elevation={1} sx={{bgcolor: '#lightGrey'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            {/* Add more headers as needed */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.first_name} {user.last_name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                {/* Add more cells for additional user properties */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                marginTop="20px"
            >
                <Pagination
                    count={2} // Specify the total number of pages here
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                />
            </Box>
        </Container>
    );
}

export default HomePage;
