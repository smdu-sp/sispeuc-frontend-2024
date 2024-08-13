'use client';

import React from 'react';
import AlertsProvider from '@/providers/alertsProvider';
import AuthSessionProvider from '@/providers/sessionProvider';
import MenuProvider from '@/shared/contexts/MenuContext';
import ThemeProvider from '@/shared/contexts/ThemeContext';
import { CssBaseline } from '@mui/joy';
import {
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';

import materialTheme from '@/themes/materialTheme';
import joyTheme from '@/themes/joyTheme';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }} defaultMode="system">
    <JoyCssVarsProvider theme={joyTheme} defaultMode="system">
      <CssBaseline />
      <MenuProvider>
        <ThemeProvider>
            <AlertsProvider>{children}</AlertsProvider>
        </ThemeProvider>
      </MenuProvider>
    </JoyCssVarsProvider>
  </MaterialCssVarsProvider>
);

export default RootLayout;
