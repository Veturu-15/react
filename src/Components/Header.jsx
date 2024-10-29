import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Menu, MenuItem, Badge, Avatar, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Header() {
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = useState(null); // State for category menu
  const [cartCount] = useState(0); // Dynamic count for items in cart
  
  const handleProfileMenu = (event) => setProfileAnchorEl(event.currentTarget);
  const handleCategoryMenu = (event) => setCategoryAnchorEl(event.currentTarget); // Open category menu
  const closeMenu = () => {
    setProfileAnchorEl(null);
    setCategoryAnchorEl(null); // Close category menu
  };

  return (
    <>
      {/* AppBar with fixed position */}
      <AppBar position="fixed" sx={{ backgroundColor: '#262626' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo/First Text */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            e-commerce
          </Typography>

          {/* Category Button with Dropdown */}
          <Button color="inherit" onClick={handleCategoryMenu}>
            Category
          </Button>
          <Menu anchorEl={categoryAnchorEl} open={Boolean(categoryAnchorEl)} onClose={closeMenu}>
            {/* Links to category pages */}
            <MenuItem component={Link} to="/mobile" onClick={closeMenu}>Mobile</MenuItem>
            <MenuItem component={Link} to="/laptop" onClick={closeMenu}>Laptop</MenuItem>
            <MenuItem component={Link} to="/earbuds" onClick={closeMenu}>Earbuds</MenuItem>
            <MenuItem component={Link} to="/tv" onClick={closeMenu}>TV</MenuItem>
            <MenuItem component={Link} to="/ref" onClick={closeMenu}>Refrigerator</MenuItem>
            
            
          </Menu>

          {/* Centered Search Bar */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', backgroundColor: '#ccc', borderRadius: 4, width: 'auto', maxWidth: '400px' }}>
              <SearchIcon style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)' }} />
              <InputBase placeholder="Search…" style={{ paddingLeft: 32, width: '100%' }} />
            </div>
          </Box>

          {/* Cart Button */}
          <Link to='/Add' className='new'>
            <IconButton color="inherit">
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>

          {/* Profile Avatar */}
          <IconButton color="inherit" onClick={handleProfileMenu}>
            <Avatar src="https://i.pinimg.com/736x/30/57/b9/3057b93a8c8b26f0dacfafa3759b1981.jpg" />
          </IconButton>
          <Menu anchorEl={profileAnchorEl} open={Boolean(profileAnchorEl)} onClose={closeMenu}>
            <Link to='/profile'>
              <MenuItem onClick={closeMenu}>Profile</MenuItem>
            </Link>
            <Link to='/'>
              <MenuItem onClick={closeMenu}>Logout</MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Box for main content with padding to avoid overlap */}
      <Box sx={{ paddingTop: '64px' }}>
      </Box>
    </>
  );
}

export default Header;
