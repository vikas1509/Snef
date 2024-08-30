import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/BlackLogo.png";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = (index, path) => {
    setActiveIndex(index);
    navigate(path); // Use navigate to programmatically go to the desired route
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFF', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ color: '#000' }}><img src={logo}/></Typography>
        <Box sx={{ display: 'flex', gap: 2,background:"#F4F4F4", borderRadius:"20px",height:"47px", alignItems:"center", padding:"2px 10px" }}>
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <Button
              key={item}
              sx={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.8rem',
                weight:"400",
                color: activeIndex === index ? '#CFF57F' : '#000', // Text color is black
                backgroundColor: activeIndex === index ? '#000' : '#F4F4F4', // Black background for the active button
                borderRadius: '100px', width:"77px",height:"34px",// Circular background
                '&:hover': {
                  backgroundColor: '#000', // Black background on hover
                  color: '#CFF57F', // Green text color on hover
                },
                
              }}
              onClick={() => handleClick(index, index === 0 ? '/' : `/${item.toLowerCase()}`)} // Pass the path to handleClick
            >
              {item}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" sx={{  fontFamily: 'Jost, sans-serif',
                fontSize: '0.8rem',
                weight:"400", backgroundColor: '#000', color: '#CFF57F', borderRadius: '100px', width:"90px",height:"34px",'&:hover': { backgroundColor: '#FFF', color: '#000' } }}>Sign Up</Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
