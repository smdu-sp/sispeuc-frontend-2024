import { jwtDecode } from "jwt-decode";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {
          login: { label: "Login", type: "text" },
          senha: { label: "Senha", type: "password" }
        },
        async authorize(credentials) {
          if (credentials?.login && credentials?.senha){
            const { login, senha } = credentials;
            const response = await fetch(`${process.env.API_URL}login`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ login, senha })
            });
            const usuario = await response.json();
            if (usuario && response.ok) return usuario;
          }
          return null;
        }
      })
    ],
    pages: {
      signIn: "/login"
    },
    callbacks: {
      async jwt({ token, user }) {
        user && (token.user = user);
        return token;
      },
      async session({ session, token }) {
        session = token.user as any;
        if (session.access_token) session.usuario = jwtDecode(session.access_token);
        const now = new Date();
        if (session.usuario.exp*1000 < now.getTime()) {
          const response = await fetch(`${process.env.API_URL}refresh`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({ refresh_token: session.refresh_token })
          });
          const { access_token, refresh_token } = await response.json();
          session.access_token = access_token;
          session.refresh_token = refresh_token;
          if (access_token) session.usuario = jwtDecode(access_token);
        }
        return session;
      }
    }
  };
  