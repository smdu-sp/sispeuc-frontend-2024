'use client';
import { Box, Typography } from '@mui/joy';
import Header from '@/components/Header';
import FirstSidebar from '@/components/FirstSidebar';
import SecondSidebar from '@/components/SecondSidebar';
import SecondHeader from '@/components/SecondHeader';
import React, { useEffect } from 'react';
import { IMenu } from '@/app/menu';

export default function Content({
    children,
    titulo = 'Dashboard',
    tags = [],
    button = null,
    pagina,
    breadcrumbs,
    menuOverride,
} : {
    children?: React.ReactNode;
    titulo?: string;
    tags?: React.ReactNode;
    button?: React.ReactNode;
    pagina?: string;
    breadcrumbs?: {
      label: string;
      href: string;
    }[];
    menuOverride?: IMenu;
}) {
  useEffect(() => {
    document.title = titulo + ' | ' + (process.env.NEXT_PUBLIC_PROJECT_NAME || 'SISAR');
  }, []);
  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        <FirstSidebar />
        <SecondSidebar
            pagina={pagina}
            menuOverride={menuOverride}
        />
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: {
              xs: 2,
              md: 6,
            },
            pt: {
              xs: 'calc(12px + var(--Header-height))',
              sm: 'calc(12px + var(--Header-height))',
              md: 3,
            },
            pb: {
              xs: 10,
              sm: 10,
              md: 12,
            },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100%',
            gap: 1,
          }}
        >
          <SecondHeader
            breadcrumbs={breadcrumbs && breadcrumbs}
          />
          <Box
              sx={{
                  display: 'flex',
                  my: 1,
                  gap: 1,
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'start', sm: 'center' },
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'start', sm: 'space-between' },
              }}
          >
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Typography level="h2">{titulo}</Typography>
              {tags ? tags : null}
            </Box>
            {button ? button : null}    
          </Box>
          {children}
        </Box>
      </Box>
  );
}
