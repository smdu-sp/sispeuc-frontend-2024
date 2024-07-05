import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  imageSrc: string;
}

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgb(236, 242, 255)',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const BreadcrumbHeader: React.FC<BreadcrumbHeaderProps> = ({ title, breadcrumbs, imageSrc }) => {
  return (
    <Container>
      <Box>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          {breadcrumbs.map((breadcrumb, index) => (
            <Link
              key={index}
              color="inherit"
              href={breadcrumb.href}
              underline="hover"
            >
              {breadcrumb.label}
            </Link>
          ))}
          <Typography color="text.primary">{title}</Typography>
        </Breadcrumbs>
      </Box>
      <Box
        component="img"
        src={imageSrc}
        alt={title}
        sx={{
          width: 80,
          height: 80,
        }}
      />
    </Container>
  );
};

export default BreadcrumbHeader;
