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
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import CodeIcon from '@mui/icons-material/Code';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import MediationIcon from '@mui/icons-material/Mediation';
import StorageIcon from '@mui/icons-material/Storage';
import VisibilityIcon from '@mui/icons-material/Visibility';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Container from '@mui/material/Container';


// import 'animate.css/animate.css' 


const drawerWidth = 240;
const navItems = ['About', 'Product', 'Technology', 'Infrastructer', 'Community'];

const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(),
  },});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        MUI test
      </Typography> */}
      <img sx={{  marginRight: '5%' }} src="https://static.wixstatic.com/media/7b17b3_ea39502dd230464aaf2e10bc335d159a~mv2.jpg/v1/fill/w_139,h_43,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Logo%20(2)_edited.jpg"/>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', marginRight: '5%' }}>
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
      <Box sx={{
        background: 'rgb(77,31,107)',
        background: 'linear-gradient(90deg, rgba(77,31,107,1) 15%, rgba(253,29,29,1) 69%, rgba(252,176,69,1) 100%)',
        textAlign: 'center', color: 'white'
      }} >
        <Typography variant="h6caption">
          Query engine is live! Apply for beta testing here
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar component="nav" sx={{ bgcolor: "white", color: 'black', marginTop: '30px' }} elevation={1} title={<img src="https://static.wixstatic.com/media/7b17b3_ea39502dd230464aaf2e10bc335d159a~mv2.jpg/v1/fill/w_139,h_43,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Logo%20(2)_edited.jpg"/>}>
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
              <img sx={{ marginRight: '9%' }} src="https://static.wixstatic.com/media/7b17b3_ea39502dd230464aaf2e10bc335d159a~mv2.jpg/v1/fill/w_139,h_43,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Logo%20(2)_edited.jpg" alt="Kitty Katty!" />

              <Box sx={{ display: { xs: 'none', sm: 'block', marginRight: '9%' } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: 'black' }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>

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
            <Container maxWidth="lg">
              <Typography className='font-header' variant="h1" gutterBottom>
                All-in-one decentralized data infrastructure.
              </Typography>
              <Typography variant="h5">
                Our mission is to address the information asymmetry in crypto. L3 Atom stores billions of crypto and Web3 data points, transactions, and historical records so anyone can access them without censorship.
              </Typography>
              <Button color='success' endIcon={<ArrowForwardIcon />} sx={{ mt: 5 }}>
                Version 3 is Live!
              </Button>
            </Container>

          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Grid container columns={{ xs: 4, md: 12 }} sx={{ bgcolor: '#f8f8f8' }}>
              <Grid item xs={12} md={1.7} sx={{ padding: 5 }}>
                <SettingsEthernetIcon sx={{ fontSize: '45px' }} color='primary' />
                <Typography variant="body1" component="p" gutterBottom>
                  Unified API
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  Live & historical data
                </Typography>
              </Grid>
              <Grid item xs={12} md={1.7} sx={{ padding: 5 }}>
                <DisplaySettingsIcon sx={{ fontSize: '45px' }} color='primary' />

                <Typography variant="body1" component="p" gutterBottom>
                  Power Query


                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Live & historical data
                </Typography>
              </Grid>
              <Grid item xs={12} md={1.7} sx={{ padding: 5 }}>
                <CodeIcon sx={{ fontSize: '45px' }} color='primary' />

                <Typography variant="body1" component="p" gutterBottom>
                  Opensource
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Live & historical data


                </Typography>
              </Grid>
              <Grid item xs={12} md={1.7} sx={{ padding: 5 }}>
                <CloudSyncIcon sx={{ fontSize: '45px' }} color='primary' />

                <Typography variant="body1" component="p" gutterBottom>
                  Decentralization
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Live & historical data


                </Typography>
              </Grid>
              <Grid item xs={12} md={1.7} sx={{ padding: 5 }}>
                <MediationIcon sx={{ fontSize: '45px' }} color='primary' />

                <Typography variant="body1" component="p" gutterBottom>
                  Analytics
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Live & historical data


                </Typography>
              </Grid>
              <Grid item xs={12} md={1.7} sx={{ padding: 5 }}>
                <StorageIcon sx={{ fontSize: '45px' }} color='primary' />

                <Typography variant="body1" component="p" gutterBottom>
                  Transparency
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Live & historical data


                </Typography>
              </Grid>
              <Grid item xs={12} md={1.7} sx={{ padding: 5 }}>
                <VisibilityIcon sx={{ fontSize: '45px' }} color='primary' />

                <Typography variant="body1" component="p" gutterBottom>
                  Free data feeds


                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Live & historical data

                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ padding: '7%', textAlign: 'center', }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
              Our vision is to democratize data, address information asymmetry at a scale.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Data & information is the most valuable commodity in the world.
              Without quality, reliable data all webpages, mobile apps, and the entire internet
              will stop working.
            </Typography>
            <Typography variant="h6">
              We believe, access to reliable unedited information is a fundamental right, an aspect of a free and
              democratic society, and the only way to scale crypto & web3. The Core Principles of L3Atom Protocol,
              by design, has no single authority that can alter its data, how the information is distributed or controlled,
              or who can see what and when. The infrastructure and entire technology stack is open-source and
              governed by an open-source community.
            </Typography>
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
   * 
   */
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default App;