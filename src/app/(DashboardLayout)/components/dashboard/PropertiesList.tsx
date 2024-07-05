import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    Grid,
    IconButton,
    Button,
    ButtonBase
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { ArrowDropDown, KeyboardArrowDown } from '@mui/icons-material';

const properties = [
    {
        id: "1",
        address: "Rua das Flores, 123",
        sqld: "12345-678",
        processNumber: "Não há",
        status: "Denunciado"
    },
    {
        id: "2",
        address: "Avenida Paulista, 1000",
        sqld: "23456-789",
        processNumber: "Não há",
        status: "Em análise"
    },
    {
        id: "3",
        address: "Praça da Sé, 50",
        sqld: "34567-890",
        processNumber: "2024/00003",
        status: "Processo"
    },
    {
        id: "4",
        address: "Rua Augusta, 1500",
        sqld: "45678-901",
        processNumber: "2024/00004",
        status: "Vistoria"
    },
];

const PropertiesList = () => {
    return (
        <DashboardCard title="Lista de imóveis ociosos" subtitle="Veja a listagem completa dos processos de imóveis ociosos e prospectados." action={
            <Button variant="contained">Exportar</Button>
        }>
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="listagem de imóveis ociosos"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    ID
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Endereço
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    SQLD
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Número do Processo
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Status
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Ações
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {properties.map((property) => (
                            <TableRow key={property.id}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {property.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        {property.address}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {property.sqld}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        {property.processNumber}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip label={property.status} size="small" />
                                </TableCell>
                                <TableCell>
                                    <Grid container spacing={3}>
                                        <Grid item>
                                            <Button variant="contained" disableElevation size="small">Ver ficha</Button>
                                        </Grid>
                                        <Grid item justifyContent={'center'} alignItems={'center'}>
                                        <IconButton aria-label="delete" disabled color="primary">
                                            <KeyboardArrowDown />
                                        </IconButton>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default PropertiesList;
