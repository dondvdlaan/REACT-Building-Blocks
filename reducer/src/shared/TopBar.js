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
function TopBar({ children }) {

    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <AppBar position="static">
                    <Toolbar sx={{ justifyContent: "end" }}>
                        <Typography variant="h6" component="div" sx={{ justifyContent: "end" }}>
                            <BasicMenu />
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            {children}
        </>
    );
}

export default TopBar;