import React, { useState } from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button, Typography, Grid, Container, Menu, MenuItem, ListItemText, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import Link from 'next/link';
// components
import Profile from './Profile';
import { IconBellRinging, IconMenu } from '@tabler/icons-react';

interface ItemType {
  toggleMobileSidebar:  (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({toggleMobileSidebar}: ItemType) => {

  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const [anchorEl5, setAnchorEl5] = useState(null);
  const handleClick5 = (event: any) => {
    setAnchorEl5(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl5(null);
  };


  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 9px 17.5px',
    background: '#fff',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
       <Container
          sx={{
            maxWidth: "1200px",
          }}
        >
          <ToolbarStyled>
            <Typography variant="h6" noWrap component="div">
              CEPEUC System
            </Typography>
            <Box flexGrow={0.5} />
            <Button variant="outlined" aria-haspopup="true" aria-controls="import-property" onClick={handleClick5}>Importar imóvel</Button>
            <Menu
              id="import-property"
              anchorEl={anchorEl5}
              keepMounted
              open={Boolean(anchorEl5)}
              onClose={handleClose2}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              sx={{
                "& .MuiMenu-paper": {
                  width: "200px",
                },
              }}
            >
              <MenuItem>
                <ListItemText>Criar uma ficha em branco</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText>Importar .xsl</ListItemText>
              </MenuItem>
            </Menu>
            <Box flexGrow={6} />
            <IconButton
              size="large"
              aria-label="show 11 new notifications"
              color="inherit"
              aria-controls="msgs-menu"
              aria-haspopup="true"
            >
              <Badge variant="dot" color="primary">
                <IconBellRinging size="21" stroke="1.5" />
              </Badge>
            </IconButton>
            <Stack spacing={1} direction="row" alignItems="center">
              <Profile />
            </Stack>
          </ToolbarStyled>
        </Container>
      </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
