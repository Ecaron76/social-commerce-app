'use client'
import '../categories/categories.css'
import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import PageContainer from "../../../components/pagecontainer/PageContainer"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import './login.css'

import { signIn } from 'next-auth/react';
export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailRegistration, setEmailRegistration] = useState('');
    const [passwordRegistration, setPasswordRegistration] = useState('');
    const [passwordConfirmRegistration, setPasswordConfirmRegistration] = useState('');
    const [error, setError] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);
    const router = useRouter()

    const handleOpenRegistrationModal = () => {
        setShowRegistrationModal(true);
      };
    
      const handleCloseRegistrationModal = () => {
        setShowRegistrationModal(false);
      };
    
      const handleRegister = async () => {
        // ... (votre logique d'inscription)
        // Après l'inscription réussie, vous pouvez fermer la modal si nécessaire
        handleCloseRegistrationModal();
      };
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await signIn('credentials', {
          email,
          password,
          redirect: false, // Pour éviter la redirection automatique
        });
    
        if (result && !result.error) {
            // La connexion a réussi, redirigez l'utilisateur vers la page souhaitée
            router.push('/profile');
          } else {
            // La connexion a échoué ou 'result' est undefined, gérer l'erreur
            console.error(result?.error ?? 'Erreur de connexion');
          }
    };
    const handleSignup = async (e:  React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        
        if (!emailRegistration || !passwordRegistration || !passwordConfirmRegistration) {
            setError('Veuillez remplir tous les champs.');
            return;
          }
        if (passwordRegistration !== passwordConfirmRegistration) {
            setError('Les mots de passe ne correspondent pas.');
            return;
        }
        setError('');
        const email = emailRegistration
        const password = passwordRegistration
        const response = await fetch('http://localhost:8000/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        if (response.status==201) {
            setIsRegistered(true)
        }
    }
    

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
                                <button className='inscriptionBtn' onClick={handleOpenRegistrationModal}>Inscription</button>
                            </div>
                        </div>
                    </div>
                </div>  
                {showRegistrationModal && (
                    <div className='inscription-modal'>
                        <button className='close-modal-btn' onClick={handleCloseRegistrationModal}>
                            &times;
                        </button>
                        <h1 className='title-registration'>Inscription</h1>
                        {isRegistered ? (
                            <div className='registration-success'>
                            <h2 >Inscription réussie !</h2>
                            <p>Merci de vous être inscrit. Vous pouvez maintenant vous connecter.</p>
                            </div>
                        ) : (
                        <form onSubmit={handleSignup} className='registrationForm'>
                            <label htmlFor="emailRegistration">Adresse e-mail:</label>
                            <input
                                type="email"
                                id="emailRegistration"
                                value={emailRegistration}
                                onChange={(e) => setEmailRegistration(e.target.value)}
                            />
                            <label htmlFor="passwordRegistration">Mot de passe:</label>
                            <input
                                type="password"
                                id="passwordRegistration"
                                value={passwordRegistration}
                                onChange={(e) => setPasswordRegistration(e.target.value)}
                            />
                            <label htmlFor="passwordConfirm">Confirmer votre mot de passe:</label>
                            <input
                                type="password"
                                id="passwordConfirmRegistration"
                                value={passwordConfirmRegistration}
                                onChange={(e) => setPasswordConfirmRegistration(e.target.value)}
                            />
                            {error && <p className="error-message">{error}</p>}
                            <button type="submit" className='loginBtn' >Confirmer l'inscription</button>
                        </form>
                        )}
                    </div>
                )}
            </PageContainer>
            <Footer />
        </main>
    );
}