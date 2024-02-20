'use client'

import React, { useEffect, useState } from 'react';
import PageContainer from '../../../../components/pagecontainer/PageContainer'
import { Category } from '@/models/category'
import Header from '../../../../components/header/Header';
import Footer from '../../../../components/footer/Footer';
import Image from 'next/image';
import './category.css'

type Props = {
    params:{
        slug: string
    }
}
export default function CategoryPage({ params }: Props ) {
    const { slug } = params;

    const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`http://localhost:8000/category/${slug}`);
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
        const data: Category = await response.json();
        setCategory(data);
      } catch (error) {
        console.error(`Erreur lors de la récupération de la catégorie ${slug}:`, error);
      }
    };

    fetchCategory();
  }, [slug]);
    return (
        <main>
            <Header />
            <PageContainer>
            {category && (
            <div className='bannerContainer'key={category.id}>
                <Image
                    className='bannerImage'
                    sizes='100vw'
                    width={0}
                    height={0}
                    src={`/assets/images/category/${category.image}`}
                    alt={`Bannière de la catégorie ${category.name}`}
                />
                <div className='bannerContent'>
                    <div className='infoCategory'>
                      <h1>{category.name}</h1>
                      <p>25 produits en vente</p>
                    </div>
                    <p>{category.description}</p>
                </div>
            </div>
            )}


                

                
            </PageContainer>
            <Footer />
        </main>
    )
}