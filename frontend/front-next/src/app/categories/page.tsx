'use client'
import '../categories/categories.css'
import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import PageContainer from "../../../components/pagecontainer/PageContainer"
import React, { useEffect, useState } from 'react';
import { Category } from '@/models/category'
import Image from 'next/image'
import Link from 'next/link'


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
                            <Link href={`categories/${category.slug}`}>
                            <Image
                                className='categoryImage'
                                sizes='100vw'
                                width={0}
                                height={0}
                                src={`/assets/images/category/${category.image}`}
                                alt={`Bannière de la catégorie ${category.name}`}
                            />
                            <div className='categoryContent'>
                                <h3>{category.name}</h3>
                                <p className='nbprod'>10 produits en ventes</p>
                            </div>
                            </Link>
                        </div>
                    ))}
                </section>
            </PageContainer>
            <Footer />
        </main>
    )
}