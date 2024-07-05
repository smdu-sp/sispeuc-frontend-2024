'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import PropertiesList from './components/dashboard/PropertiesList';
import PropertiesHistorical from './components/dashboard/PropertiesHistorical';
import ExempleCard from './components/dashboard/ExempleCard';
import BreadcrumbHeader from './components/shared/BreadcrumbHeader';
import MainNavigation from './components/dashboard/MainNavigation';

const breadcrumbs = [
  { label: 'Home', href: '/' },
];

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="Dashboard CEPEUC">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={24} lg={12}>
          <MainNavigation />
          <BreadcrumbHeader
              title="Geral"
              breadcrumbs={breadcrumbs}
              imageSrc="/path-to-your-image.png"
            />
            <Grid container spacing={3}>
              <Grid item xs={12} lg={3}>
                <ExempleCard />
              </Grid>
              <Grid item xs={12} lg={3}>
                <ExempleCard />
              </Grid>
              <Grid item xs={12} lg={6}>
                <PropertiesHistorical />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={24} lg={12}>
            <PropertiesList />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
