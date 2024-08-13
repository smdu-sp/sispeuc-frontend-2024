import { experimental_extendTheme as materialExtendTheme } from '@mui/material/styles';

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

export default materialTheme;
