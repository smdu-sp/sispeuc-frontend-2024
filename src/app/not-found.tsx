"use client"
import { ArrowBack } from '@mui/icons-material';
import { Button, Card, CardContent, Sheet, Typography } from '@mui/joy';
import React from 'react';

export default function NotFound () {
    return (
        <Sheet
            sx={{
                height: "100vh",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}
        >
            <Typography level="h1" color='warning'>404</Typography>
            <Card
                variant="outlined"
                color="warning"
                size='lg'
                invertedColors
                sx={{
                    boxShadow: 'lg',
                    width: 400,
                    maxWidth: '100%',
                }}
            >
                <CardContent sx={{ gap: 2}}>
                    <Typography level="title-lg">Página não encontrada</Typography>
                    <Typography level="body-md">
                    Parece que a página que você está procurando não existe ou foi movida.
                    </Typography>
                </CardContent>
            </Card>
            <a href="/">
                <Button
                    startDecorator={<ArrowBack />}
                    variant="plain"
                    color='warning'
                    sx={{
                        ":hover": {
                            bgcolor: "transparent"
                        }
                    }}
                >Retornar ao início</Button>
            </a>
        </Sheet>
    );
}