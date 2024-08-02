import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { AvatarImage } from 'components';

import { getFlights } from '../redux/ducks/flights';

const ResponsiveAppBar = () => {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

  const handleFlights = () => {
    dispatch(getFlights());
  };

  const handleHotels = () => {
    return {};
  };

  const pages = [
    { name: 'Flights', link: '/flights', loadData: handleFlights },
    { name: 'Hotels', link: '/hotels', loadData: handleHotels },
  ];

  const handleOpenNavMenu = (event: SyntheticEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="info">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <AvatarImage
              component="div"
              imageName="plane.png"
              alt="Lets fly logo"
            />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'end',
            }}
          >
            {pages.map(({ name, link, loadData }) => (
              <Link
                key={name}
                to={link}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Button
                  key={name}
                  onClick={handleCloseNavMenu && loadData}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'end',
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({ name, link, loadData }) => (
                <MenuItem key={name} onClick={handleCloseNavMenu && loadData}>
                  <Link
                    to={link}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
