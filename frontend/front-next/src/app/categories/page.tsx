'use client'
import '../categories/categories.css'
import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import PageContainer from "../../../components/pagecontainer/PageContainer"
import React, { useEffect, useState } from 'react';
import { Category } from '@/models/category'


export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([]);

 
    useEffect(() => {
        const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:8000/category');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des catégories:', error);
        }
        };

        fetchCategories();
    }, []);

    
    
    
    return (
        <main>
            <Header />
            <PageContainer>
                <section className="categoriesSection">
                    {categories.map((category) => (
                        <div key={category.id} className="categoryCard">
                            <h3>{category.name}</h3>
                            <p>10 produits en ventes</p>
                        </div>
                    ))}
                </section>
            </PageContainer>
            <Footer />
        </main>
    )
}