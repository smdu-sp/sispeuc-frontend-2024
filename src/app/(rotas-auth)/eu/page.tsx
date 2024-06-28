'use client'

import { useEffect, useState } from "react";
import { Box, Card, Chip, ChipPropsColorOverrides, ColorPaletteProp, Divider, FormControl, FormLabel, Input, Option, Select, Stack } from "@mui/joy";
import { EmailRounded } from "@mui/icons-material";
import { useRouter } from 'next/navigation';
import { OverridableStringUnion } from '@mui/types';

import Content from "@/components/Content";
import { IUsuario } from "@/shared/services/usuario.services";
import * as usuarioServices from "@/shared/services/usuario.services";

export default function UsuarioDetalhes() {
    const [usuario, setUsuario] = useState<IUsuario>();
    const [permissao, setPermissao] = useState('');

    const permissoes: Record<string, { label: string, value: string, color: OverridableStringUnion<ColorPaletteProp, ChipPropsColorOverrides> | undefined }> = {
      'DEV': { label: 'Desenvolvedor', value: 'DEV', color: 'primary' },
      'TEC': { label: 'Técnico', value: 'TEC', color: 'neutral' },
      'ADM': { label: 'Administrador', value: 'ADM', color: 'success' },
      'USR': { label: 'Usuário', value: 'USR', color: 'warning' },
    }

    useEffect(() => {
        usuarioServices.validaUsuario()
            .then((response: IUsuario) => {
                setUsuario(response);
                setPermissao(response.permissao);
            });
    }, []);
    

    return (
        <Content
            breadcrumbs={[
                { label: 'Meu Perfil', href: '/eu' },
            ]}
            titulo={usuario ? usuario.nome : 'Meu Perfil'}
            tags={
                usuario ? <div style={{ display: 'flex', gap: '0.2rem' }}>     
                  <Chip color={permissoes[usuario?.permissao].color} size='lg'>{permissoes[usuario?.permissao].label}</Chip>
                </div> : null
            }
            pagina=""
        >
            <Box
                sx={{
                    display: 'flex',
                    mx: 'auto',
                    width: '90%',
                    maxWidth: 800,
                    px: { xs: 2, md: 6 },
                    py: { xs: 2, md: 3 },
                }}
            >
                <Card sx={{ width: '100%' }}>
                    <Stack spacing={2} >
                        <Stack>
                            <FormControl>
                                <FormLabel>Permissao</FormLabel>
                                <Select value={permissao ? permissao : 'USR'} disabled>
                                    <Option value="DEV">Desenvolvedor</Option>
                                    <Option value="SUP">Superadmin</Option>
                                    <Option value="ADM">Administrador</Option>
                                    <Option value="USR">Usuário</Option>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Divider />
                        <Stack direction="row" spacing={2}>
                            <FormControl sx={{ flexGrow: 1 }}>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    value={usuario ? usuario?.email : 'USR'}
                                    size="sm"
                                    type="email"
                                    startDecorator={<EmailRounded />}
                                    placeholder="Email"
                                    sx={{ flexGrow: 1 }}
                                    disabled
                                />
                            </FormControl>
                        </Stack>
                    </Stack>
                    {/* <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                        <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                        <Button size="sm" variant="outlined" color="neutral" onClick={() => router.back()}>
                            Cancelar
                        </Button>
                        <Button size="sm" variant="solid">
                            Salvar
                        </Button>
                        </CardActions>
                    </CardOverflow> */}
                </Card>
            </Box>            
        </Content>
    );
}
