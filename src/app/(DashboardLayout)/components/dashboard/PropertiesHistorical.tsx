
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from '@mui/lab';

const PropertiesHistorical = () => {
  return (
    <DashboardCard title="Histórico" subtitle='Veja em tempo real as últimas ações feitas no sistema'>
      <>
        <Timeline
          className="theme-timeline"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          sx={{
            p: 0,
            mb: '-40px',
            '& .MuiTimelineConnector-root': {
              width: '1px',
              backgroundColor: '#efefef'
            },
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.5,
              paddingLeft: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent sx={{
                fontSize: "12px",
                fontWeight: "500",
            }}>14/05/2025 às 09:30 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{
                fontSize: "12px",
                fontWeight: "500",
            }}>Imóvel denunciado pelo Mapa Colaborativo ID #402</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{
                fontSize: "12px",
                fontWeight: "500",
            }}>14/05/2025 às 06:30 pm</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{
                fontSize: "12px",
                fontWeight: "500",
            }}>Análise do imóvel #402 concluída por Bruna</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{
                fontSize: "12px",
                fontWeight: "500",
            }}>15/05/2025 às 12:00 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{
                fontSize: "12px",
                fontWeight: "500",
            }}>Imóvel #401 adicionado ao processo #2320</TimelineContent>
          </TimelineItem>
        </Timeline>
      </>
    </DashboardCard>
  );
};

export default PropertiesHistorical;
