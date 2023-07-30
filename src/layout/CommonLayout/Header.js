import * as React from "react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

// material-ui
import AppBar from "@mui/material/AppBar";
import { useTheme } from "@mui/material/styles";
import {
  useMediaQuery,
  Box,
  Button,
  Container,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

// project import
import config from "config";
import IconButton from "components/@extended/IconButton";

import Logo from "components/logo";

// assets
import { MenuOutlined, LineOutlined } from "@ant-design/icons";
import Customization from "layout/MainLayout/Header/HeaderContent/Customization";

// ==============================|| COMPONENTS - APP BAR ||============================== //

// elevation scroll

const Header = ({ handleDrawerOpen, layout = "landing", ...others }) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerToggle, setDrawerToggle] = useState(false);

  /** Method called on multiple components with different event types */
  const drawerToggler = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerToggle(open);
  };

  return (
    <AppBar
      sx={{
        bgcolor: "transparent",
        color: theme.palette.text.primary,
        boxShadow: "none",
      }}
    >
      <Container disableGutters={matchDownMd} maxWidth="xl">
        <Toolbar sx={{ px: { xs: 1.5, md: 0, lg: 0 }, py: 2 }}>
          <Stack
            direction="row"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
            alignItems="center"
          >
            <Typography
              component="div"
              sx={{ textAlign: "left", display: "inline-block" }}
            >
              <Logo reverse to="/" />
            </Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{
              "& .header-link": {
                px: 1,
                "&:hover": { color: theme.palette.primary.main },
              },
              display: { xs: "none", md: "block" },
            }}
            spacing={2}
          >
            <Link
              className="header-link"
              // color="white"
              component={RouterLink}
              to="/login"
              underline="none"
            >
              Dashboard
            </Link>
            <Customization />
          </Stack>
          <Box
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              display: { xs: "flex", md: "none" },
            }}
          >
            <Typography
              component="div"
              sx={{ textAlign: "left", display: "inline-block" }}
            >
              <Logo to="/" />
            </Typography>
            <Stack direction="row" spacing={2}>
              {layout === "component" && (
                <Button
                  variant="outlined"
                  size="small"
                  color="warning"
                  component={RouterLink}
                  to={config.defaultPath}
                  sx={{ mt: 0.5, height: 28 }}
                >
                  Dashboard
                </Button>
              )}
              <IconButton
                color="secondary"
                {...(layout === "component"
                  ? { onClick: handleDrawerOpen }
                  : { onClick: drawerToggler(true) })}
                sx={{
                  "&:hover": {
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? "secondary.lighter"
                        : "secondary.dark",
                  },
                }}
              >
                <MenuOutlined
                  style={{
                    color:
                      theme.palette.mode === "dark"
                        ? "inherit"
                        : theme.palette.grey[100],
                  }}
                />
              </IconButton>
            </Stack>
            <Drawer
              anchor="top"
              open={drawerToggle}
              onClose={drawerToggler(false)}
              sx={{ "& .MuiDrawer-paper": { backgroundImage: "none" } }}
            >
              <Box
                sx={{
                  width: "auto",
                  "& .MuiListItemIcon-root": {
                    fontSize: "1rem",
                    minWidth: 28,
                  },
                }}
                role="presentation"
                onClick={drawerToggler(false)}
                onKeyDown={drawerToggler(false)}
              >
                <List>
                  <Link style={{ textDecoration: "none" }} href="/login">
                    <ListItemButton component="span">
                      <ListItemIcon>
                        <LineOutlined />
                      </ListItemIcon>
                      <ListItemText
                        primary="Dashboard"
                        primaryTypographyProps={{
                          variant: "h6",
                          color: "text.primary",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </List>
                <Customization />
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
