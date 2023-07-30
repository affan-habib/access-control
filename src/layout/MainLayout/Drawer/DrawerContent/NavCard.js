// material-ui
import { Button, Link, CardMedia, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/cards/MainCard';

// assets
import avatar from 'assets/images/users/avatar-group.png';


// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
  <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
    <Stack alignItems="center" spacing={2.5}>
      <CardMedia component="img" image={avatar} />
      <Stack alignItems="center">
        <Typography variant="h5">Help?</Typography>
        <Typography variant="h6" color="secondary">
          Get to resolve query
        </Typography>
      </Stack>
      
    </Stack>
  </MainCard>
);

export default NavCard;
