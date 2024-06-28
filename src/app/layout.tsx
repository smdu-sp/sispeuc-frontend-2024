'use client'

import AlertsProvider from '@/providers/alertsProvider';
import AuthSessionProvider from '@/providers/sessionProvider';
import MenuProvider from '@/shared/contexts/MenuContext';
import { CssBaseline } from '@mui/joy';
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider, extendTheme } from '@mui/joy/styles';
import ThemeProvider from '@/shared/contexts/ThemeContext';

const materialTheme = materialExtendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          50: '#FFEBD6',
          100: '#FFD39C',
          200: '#F7B970',
          300: '#F7A752',
          400: '#EB874D',
          500: '#DA7D48',
          600: '#AD6439',
          700: '#8A4F2D',
          800: '#4F2E1A',
          900: '#1A0F08'
        }
      }
    },
    light: {
      palette: {
        primary: {
          50: '#E4F3F5',
          100: '#C4E9F5',
          200: '#A6E1ED',
          300: '#8ED7E7',
          400: '#6CC7D8',
          500: '#4ABACF',
          600: '#2E9BB7',
          700: '#2E9BB7',
          800: '#2E9BB7',
          900: '#2E9BB7'
        }
      }
    },
  }
});

const theme = extendTheme({
  fontFamily: {
    display: 'Pangram', // applies to `h1`–`h4`
    body: 'Lato', // applies to `title-*` and `body-*`
  },
  "colorSchemes": {
    "dark": {
      "palette": {
        "primary": {
          "50": "#fee4e9",
          "100": "#fcadbc",
          "200": "#fb768f",
          "300": "#f93f62",
          "400": "#f94668",
          "500": "#f70835",
          "600": "#c0062a",
          "700": "#89041e",
          "800": "#520312",
          "900": "#1b0106"
        },
        warning: {
          solidColor: '#000',
          solidBg: '#ffc107',
          solidBorder: '#ffc107',
          solidHoverBg: '#ffca2c',
          solidHoverBorder: '#ffc720',
          solidActiveBg: '#ffcd39',
          solidActiveBorder: '#ffc720',
          solidDisabledBg: '#ffc107',
          solidDisabledBorder: '#ffc107',
        }
      }
    },
    "light": {
      "palette": {
        "primary": {
          "50": "#e4ebfd",
          "100": "#afc4fa",
          "200": "#7a9df6",
          "300": "#4576f3",
          "400": "#0a3299",
          "500": "#104eef",
          "600": "#0c3dba",
          "700": "#092b85",
          "800": "#051a50",
          "900": "#02091b"
        },
        warning: {
          solidColor: '#000',
          solidBg: '#ffc107',
          solidBorder: '#ffc107',
          solidHoverBg: '#ffca2c',
          solidHoverBorder: '#ffc720',
          solidActiveBg: '#ffcd39',
          solidActiveBorder: '#ffc720',
          solidDisabledBg: '#ffc107',
          solidDisabledBorder: '#ffc107',
        }
      }
    }
  }
});

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }} defaultMode='system'>
      <JoyCssVarsProvider theme={theme} defaultMode='system'>
        <CssBaseline />
        <MenuProvider>
          <ThemeProvider>
            <html lang="pt-BR">
              <head>
                <link type='text/css' rel='stylesheet' href='global.css' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
                {/* <link href="https://db.onlinewebfonts.com/c/56a82ed18dbcec3eaab8c012dea226cf?family=Pangram" rel="stylesheet" /> */}
                <title>{process.env.NEXT_PUBLIC_PROJECT_NAME}</title>
              </head>
              <body>
                <AuthSessionProvider>
                  <AlertsProvider>
                    {children}
                  </AlertsProvider>
                </AuthSessionProvider>
              </body>
            </html>
          </ThemeProvider>
        </MenuProvider>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
}

