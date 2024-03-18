"use client"
import '../categories/categories.css'
import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import PageContainer from "../../../components/pagecontainer/PageContainer"
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Profile } from '@/models/profile'
import { getSession } from 'next-auth/react';
import './profile.css'



export default function ProfilePage() {
    const { data: session, status } = useSession()
    const [profile, setProfile] = useState<Profile>();
    console.log(session)

    useEffect(() => {
        if (status === 'authenticated') {
            const fetchProfile = async () => {
                try {
                    const response = await fetch('http://localhost:8000/profile/user', {
                        method: "GET",
                        headers: {
                            authorization: `Bearer ${session?.backendTokens.accessToken}`
                        }
                    });

                    if (response.ok) {
                        const data: Profile = await response.json();
                        setProfile(data);
                    }
                } catch (error) {
                    console.error('Erreur lors de la récupération du profil', error);
                }
            };
            fetchProfile();
        } else if (status === 'unauthenticated') {
            redirect("/login"); // Rediriger vers la page de connexion
        }
    }, [status, session]);

    return (
        <main>
            <Header />
            
            <PageContainer>
            <nav className='leftBar'>
                <div>Mon Profil</div>
                <div>Mes Ventes</div>
                <div>Mes Messages</div>
                <div>Mes Favoris</div>
            </nav>
                <section className="profileSection">
                    <div className='avatar'>
                        <div>{profile?.image}</div>
                        <div>{profile?.pseudo}</div>
                    </div>
                    <div className='personalInfo'>
                        <div>Prénom: {profile?.firstName}</div>
                        <div>Nom: {profile?.lastName}</div>
                        <div>Genre: {profile?.genre}</div>
                        <div>Date de naissance: {String(profile?.dateNais)}</div>
                        <div>Ville: {profile?.ville}</div>
                        <div>Code Postal: {profile?.codePostal}</div>
                    </div>
                </section>


            </PageContainer>
            <Footer />
        </main>
    )
}