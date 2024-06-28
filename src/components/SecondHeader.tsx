import ThemeToggle from './ThemeToggle';
import { Box, Breadcrumbs, Link } from '@mui/joy';
import { ChevronRightRounded, HomeRounded } from '@mui/icons-material';

export default function SecondHeader({
  breadcrumbs
} : {
  breadcrumbs?: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRounded fontSize='small'/>}
            sx={{ pl: 0 }}
        >
            <Link
              underline="none"
              color={ breadcrumbs && breadcrumbs.length > 0 ? 'neutral' : 'primary' }
              href="/"
              aria-label="Home"
            >
              <HomeRounded fontSize='small' />
            </Link>
            {breadcrumbs && breadcrumbs.map((item, index) => (
              <Link
                underline="none"
                color={ index === breadcrumbs.length - 1 ? 'primary' : 'neutral' }
                href={item.href}
                aria-label={item.label}
                key={index}
                fontSize='small'
              >
                {item.label}
              </Link>
            ))}        
        </Breadcrumbs>
        <ThemeToggle sx={{ ml: 'auto', display: { xs: 'none', md: 'inline-flex' } }} />
    </Box>
  );
}
