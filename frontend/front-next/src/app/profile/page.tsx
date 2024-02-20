"use client"
import '../categories/categories.css'
import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import PageContainer from "../../../components/pagecontainer/PageContainer"
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Profile } from '@/models/profile'



export default function ProfilePage() {
    const { data: session } = useSession()
    const [profile, setProfile] = useState<Profile>();
    console.log(session?.user)
    console.log(session?.backendTokens)
    if (!session) {
        redirect("/login")
    }else{
        useEffect(() => {
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
                        setProfile(data)
                    }
                } catch (error) {
                    console.error('Erreur lors de la récupération du profil', error);
                }
            };
            fetchProfile()
        }, []) 
    }
    
    return (
        <main>
            <Header />
            <PageContainer>
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