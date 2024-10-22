import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Badge, InputBase, Avatar } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DownloadIcon from '@mui/icons-material/Download';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Apply #141414 background color */}
      <AppBar position="static" sx={{ backgroundColor: '#141414' }}>
        <Toolbar>
          {/* Left Arrow for navigation */}
          <IconButton size="large" edge="start" color="inherit" aria-label="back">
            <ArrowBackIcon />
          </IconButton>

          {/* Detailed Analytics Text */}
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
            Detailed Analytics
          </Typography>

          {/* Spacer to push elements to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Center Search */}
          <Search sx={{ margin: '0 auto' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>

          {/* Spacer to push elements to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Get Report with Download Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
            <Typography variant="h6" noWrap component="div" sx={{ marginRight: 1 }}>
              Get Report
            </Typography>
            <DownloadIcon />  {/* Download Icon */}
          </Box>

          {/* Message Icon with badge */}
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          {/* Alert Icon with badge */}
          <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Profile Image */}
          <IconButton size="large" edge="end" aria-label="account of current user" color="inherit">
            <Avatar alt="Profile Image" src="https://i.pinimg.com/736x/30/57/b9/3057b93a8c8b26f0dacfafa3759b1981.jpg" />  {/* Replace with actual image URL */}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
