import { NextAuthOptions } from "next-auth";
import CrendentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"
export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/login',
    },
    providers: [
        CrendentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "example@mail.com"
                },
                password: {
                    label:"Password", 
                    type:"password"
                }
            },
            async authorize(credentials, req){
                if (!credentials?.email || !credentials?.password) return null;
                const { email, password } = credentials;
                const res = await fetch('http://localhost:8000/auth/login', {
                    method: "POST",
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                if (res.status == 401) {
                    console.log(res.statusText)
                    return null
                }
                const user = await res.json();
                return user
            }
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            console.log({token, user})
            if (user) return {...token, ...user}
            return token
        },
        async session({token, session}){
            session.user = token.user
            session.backendTokens = token.backendTokens
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }