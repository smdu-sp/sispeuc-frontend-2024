'use client'

import UsuarioDetalhes from './[id]/page';

export const dynamicParams = true

export default function UsuarioNovo(props: any) {
    return UsuarioDetalhes(props);
}
