import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import PagesIcon from '@mui/icons-material/Pages';
import FormsIcon from '@mui/icons-material/Description';
import TablesIcon from '@mui/icons-material/TableChart';
import { IconAlarmFilled, IconAlertTriangle, IconHome } from '@tabler/icons-react';
import { MailLock, MailLockOutlined } from '@mui/icons-material';

const MenuButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    margin: theme.spacing(0, 1),
    fontWeight: 400,
    '&.selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    '& .MuiButton-startIcon': {
      marginRight: theme.spacing(0.5),
      '& .MuiSvgIcon-root': {
        fontSize: '1rem',
      },
    },
}));

const MainNavigation: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' , borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton> */}
        {/* <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography> */}
        <MenuButton startIcon={<HomeIcon />} variant="contained">Geral</MenuButton>
        <MenuButton startIcon={<MailLock />}>Denunciados</MenuButton>
        <MenuButton startIcon={<PagesIcon />}>Processo Administrativo</MenuButton>
        <MenuButton startIcon={<FormsIcon />}>Em vistoria</MenuButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Submenu Item 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Submenu Item 2</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;
