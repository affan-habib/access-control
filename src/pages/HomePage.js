import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import SolutionSection from "./Solution";

function HomePage() {
    return (
        <Container maxWidth="xl">
            <Button variant="contained" color="primary">Home Page is coming</Button>
            <Button variant="contained" color="secondary">Home Page is coming</Button>
            <Button variant="contained" color="info">Home Page is coming</Button>
            <Button variant="contained" color="warning">Home Page is coming</Button>
            <Button variant="contained" color="error">Home Page is coming</Button>
            <SolutionSection />
        </Container>
    )
}


export default HomePage;    