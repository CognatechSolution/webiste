import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';

// import 'animate.css/animate.css' 


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(),
  },
});

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ bgcolor: "white", color: 'black' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: 'black' }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main">
          <Toolbar />
          <Box sx={{ padding: '7%', textAlign: 'center', }}>
            <Typography className='font-header' variant="h1" gutterBottom>
              All-in-one decentralized data infrastructure.
            </Typography>
            <Typography variant="h5">
              Our mission is to address the information asymmetry in crypto. L3 Atom stores billions of crypto and Web3 data points, transactions, and historical records so anyone can access them without censorship.
            </Typography>
            <Button color='success' endIcon={<ArrowForwardIcon />} sx={{ mt: 5 }}>
              Version 3 is Live!
            </Button>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Grid container columns={{ xs: 4, md: 12 }} sx={{ bgcolor: '#ddd' }}>
              <Grid item xs={12} md={1.7} sx={{ padding: 5 }}>
                <SettingsEthernetIcon color='primary'/>
                <Typography variant="body1" component="p" gutterBottom>
                  Unified API
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  Live & historical data
                </Typography>
              </Grid>
              <Grid item xs={12} md={1.7} sx={{ padding: 5 }}>
              <SettingsEthernetIcon color='primary'/>

                <Typography variant="body1" component="p" gutterBottom>
                  Power Query


                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Live & historical data
                </Typography>
              </Grid>
              <Grid item xs={12} md={1.7} sx={{ padding: 5 }}>
              <SettingsEthernetIcon color='primary'/>

                <Typography variant="body1" component="p" gutterBottom>
                  Opensource
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Live & historical data


                </Typography>
              </Grid>
              <Grid item xs={12} md={1.7} sx={{ padding: 5 }}>
              <SettingsEthernetIcon color='primary'/>

                <Typography variant="body1" component="p" gutterBottom>
                  Decentralization
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Live & historical data


                </Typography>
              </Grid>
              <Grid item xs={12} md={1.7} sx={{ padding: 5 }}>
              <SettingsEthernetIcon color='primary'/>

                <Typography variant="body1" component="p" gutterBottom>
                  Analytics
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Live & historical data


                </Typography>
              </Grid>
              <Grid item xs={12} md={1.7} sx={{ padding: 5 }}>
              <SettingsEthernetIcon color='primary'/>

                <Typography variant="body1" component="p" gutterBottom>
                  Transparency
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Live & historical data


                </Typography>
              </Grid>
              <Grid item xs={12} md={1.7} sx={{ padding: 5 }}>
              <SettingsEthernetIcon color='primary'/>

                <Typography variant="body1" component="p" gutterBottom>
                  Free data feeds


                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Live & historical data

                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>

  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default App;