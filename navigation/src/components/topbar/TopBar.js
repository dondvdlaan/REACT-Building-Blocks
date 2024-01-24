import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BasicMenu from "../shared/BasicMenu"

/**
 * Component for top bar in any page
 * @returns 
 */
function TopBar() {

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: "center" }}>

                    <Typography variant="h6" component="div" sx={{ justifyContent: "center" }}>
                        <BasicMenu />
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default TopBar;