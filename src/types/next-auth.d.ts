import NextAuth from 'next-auth'

declare module 'next-auth' {
	interface Session {
		usuario: {
			id: string
			nome: string
			login: string
			email: string
			permissao: string
			status: number,
			iat: number,
			exp: number
		},
        access_token: string,
		refresh_token: string
	}
}