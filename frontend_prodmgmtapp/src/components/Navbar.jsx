import React from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
            <>
                <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{width:'100%',minHeight:50,backgroundColor:'red',boxShadow:'none',}}> 
                    <Toolbar sx={{justifyContent:'space-between'}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ textAlign:'center',flexGrow: 1 }}>
                        WELCOME TO THE PRODUCT STORE
                    </Typography>
                    <Link to={'/'}><Button color="inherit">Home</Button></Link>
                    <Link to={'/add'}><Button color="inherit">Add</Button></Link>
                    </Toolbar>
                </AppBar>
                </Box>
                </>
  )
}

export default Navbar