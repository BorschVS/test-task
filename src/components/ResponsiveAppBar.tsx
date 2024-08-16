import { FC, SyntheticEvent, useState } from 'react';
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

import { AppDispatch } from 'redux/configureStore';
import { GET_FLIGHTS } from '../redux/ducks/flightsSlice';
import theme from 'theme';

const ResponsiveAppBar: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

  const pages = [
    { name: 'Flights', link: '/flights', testId: 'flights-link' },
    { name: 'Hotels', link: '/hotels', testId: 'hotels-link' },
  ];

  const handleOpenNavMenu = (event: SyntheticEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    pages.forEach((page) => {
      if (page.name === 'Flights') {
        dispatch({ type: GET_FLIGHTS });
      }
    });
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="info" data-testid="responsive-app-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" data-testid="home-link">
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
            {pages.map(({ name, link, testId }) => (
              <Link
                key={name}
                to={link}
                style={{ textDecoration: 'none', color: 'inherit' }}
                data-testid={testId}
              >
                <Button
                  key={name}
                  onClick={handleCloseNavMenu}
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
                display: {
                  xs: 'block',
                  md: 'none',
                },
              }}
            >
              {pages.map(({ name, link, testId }) => (
                <MenuItem
                  key={name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    backgroundColor: theme.palette.primary.contrastText,
                  }}
                >
                  <Link
                    to={link}
                    data-testid={testId}
                    style={{
                      textDecoration: 'none',
                      color: theme.palette.primary.light,
                      backgroundColor: 'inherit',
                    }}
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
