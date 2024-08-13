import { extendTheme } from '@mui/joy/styles';

const joyTheme = extendTheme({
  fontFamily: {
    display: 'Pangram', // applies to `h1`–`h4`
    body: 'Lato', // applies to `title-*` and `body-*`
  },
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          50: '#fee4e9',
          100: '#fcadbc',
          200: '#fb768f',
          300: '#f93f62',
          400: '#f94668',
          500: '#f70835',
          600: '#c0062a',
          700: '#89041e',
          800: '#520312',
          900: '#1b0106'
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
    light: {
      palette: {
        primary: {
          50: '#e4ebfd',
          100: '#afc4fa',
          200: '#7a9df6',
          300: '#4576f3',
          400: '#0a3299',
          500: '#104eef',
          600: '#0c3dba',
          700: '#092b85',
          800: '#051a50',
          900: '#02091b'
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

export default joyTheme;
