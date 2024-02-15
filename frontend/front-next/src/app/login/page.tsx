'use client'
import '../categories/categories.css'
import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import PageContainer from "../../../components/pagecontainer/PageContainer"
import React, { useState } from 'react'
import './login.css'

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Gérer la logique de connexion ici
        console.log('Login', { email, password });
    };

    return (
        <main>
            <Header />  
            <PageContainer>
                <div className='registration'> 
                    <div className='connexion'>
                        <h1 className='title-registration'>Se connecter</h1>
                        <form onSubmit={handleLogin} className='loginForm'>
                                <label htmlFor="email">Adresse e-mail:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="password">Mot de passe:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            
                            <button type="submit" className='loginBtn'>Connexion</button>
                        </form>
                    </div>
                    <div className='inscription'>
                        <h1 className='title-registration'>S'inscrire</h1>
                        <div className='container-inscription'>
                            <div className='cta-inscription'>
                                <p>Pas encore de compte ?</p>
                                <button className='inscriptionBtn'>Inscription</button>
                            </div>
                        </div>
                    </div>
                </div>  
            </PageContainer>
            <Footer />
        </main>
    );
}