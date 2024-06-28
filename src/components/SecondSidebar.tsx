import { useContext, useEffect, useState } from 'react';
import { Link, ListItemButton, ListItemDecorator, ListItemContent, ListItem, List, Sheet, Box, SvgIcon, ListDivider } from '@mui/joy';
import { IMenu, menu } from '../app/menu';
import { MenuContext } from '@/shared/contexts/MenuContext';
import Usuario from './Usuario';
import { ListSubheader } from '@mui/material';
import * as usuarioServices from '@/shared/services/usuario.services';
import { IUsuario } from '@/shared/services/usuario.services';

const RenderMenu = (menu: IMenu, pagina?: string) => {
  const [permissao, setPermissao] = useState('USR');
  useEffect(() => {
    usuarioServices.validaUsuario()
      .then((response: IUsuario) => {
        setPermissao(response.permissao);
      });
  }, [])
  return (
      <List
        size="sm"
        variant={['DEV', 'ADM'].includes(permissao) ? "outlined" : undefined}
        sx={{
          '--ListItem-radius': '6px',
          gap: 0.5,
          padding: 1,
          borderRadius: 'sm',
        }}
      >        
        <ListSubheader sx={{ lineHeight: 2, borderRadius: 2, backgroundColor: 'transparent' }}>Menu</ListSubheader>
        {menu.userOptions.map((page) => (
          <ListItem sx={{width: '100%'}} key={page.name}>
            <ListItemButton component={Link} underline="none" selected={pagina===page.name} href={page.href}>
              <ListItemDecorator>
                <SvgIcon component={page.icon} />
              </ListItemDecorator>
              <ListItemContent>{page.title}</ListItemContent>
            </ListItemButton>
          </ListItem>
        ))}
        {['DEV', 'SUP', 'ADM'].includes(permissao) ? <ListDivider inset={'gutter'} /> : null}
        {['DEV', 'SUP', 'ADM'].includes(permissao) ? <ListSubheader sx={{ lineHeight: 2, borderRadius: 2, backgroundColor: 'transparent' }}>Administração</ListSubheader> : null}
        {['DEV', 'SUP', 'ADM'].includes(permissao) ? menu.adminOptions.map((page) => (
          <ListItem sx={{width: '100%'}} key={page.name}>
            <ListItemButton component={Link} underline="none" selected={pagina===page.name} href={page.href}>
              <ListItemDecorator>
                <SvgIcon component={page.icon} />
              </ListItemDecorator>
              <ListItemContent>{page.title}</ListItemContent>
            </ListItemButton>
          </ListItem>
          
        )) : null}
      </List>
  );
}

export default function SecondSidebar({
  pagina,
  menuOverride,
} : {
  pagina?: string;
  menuOverride?: IMenu;
}) {
  const { closeSidebar } = useContext(MenuContext);
  return (
    <>
      <Box
        className="SecondSidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 99,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Sheet
        className="SecondSidebar"
        color="neutral"
        sx={{
          position: {
            xs: 'fixed',
            lg: 'sticky',
          },
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'none',
          },
          transition: 'transform 0.4s',
          zIndex: 99,
          height: '100dvh',
          top: 0,
          p: 2,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRight: '1px solid',
          borderColor: 'divider',
          maxWidth: 250,
        }}
      > 
        <Box
          sx={{
            flex: 1,
          }}
        >
          {menuOverride ? RenderMenu(menuOverride, pagina) : RenderMenu(menu, pagina)}
        </Box>
        <Usuario />
      </Sheet>
    </>
  );
}

