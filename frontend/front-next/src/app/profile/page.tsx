'use client'
import '../categories/categories.css'
import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import PageContainer from "../../../components/pagecontainer/PageContainer"
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'



export default function ProfilePage() {
    const { data: session } = useSession()
    console.log(session?.user)
    if (!session) {
        redirect("/login")
    }
    return (
        <main>
            <Header />
            <PageContainer>
                <section className="profileSection">
                    
                </section>
            </PageContainer>
            <Footer />
        </main>
    )
}