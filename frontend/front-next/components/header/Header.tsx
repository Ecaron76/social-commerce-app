import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../header/header.css'
import { Category } from '@/models/category';
export default function Header() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:8000/category');
                if (!response.ok) {
                    throw new Error(`Erreur HTTP! Statut: ${response.status}`);
                }
                const data: Category[] = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des catégories:', error);
            }
        };

        fetchCategories();
    }, []);
    return (
        <header className="header">
            <div className='main-header'>
                <div className='left-header'>
                    <div className="logo">
                        SellSprint
                    </div>
                    <div className="nav-item sell-button">Vendre des produits</div>
                </div>
                <nav className="search">
                    <input type="text" placeholder="Rechercher des produits..." />
                    <button type="button">Rechercher</button>
                </nav>
                <div className="user-actions">
                    <div className='favmes'>
                        <div className='favorites'>Favoris</div>
                        <div className='messages'>Messages</div>
                    </div>
                    <Link href={"/login"}>
                        <div className="signuplogin">Se connecter</div>
                    </Link>
                </div>
            </div>
            <div className='categories-header'>
                {categories.map((category) => (
                    <Link key={category.id} href={`/categories/${category.slug}`}>
                        <div>{category.name}</div>
                    </Link>
                ))}
            </div>
        </header>

    )
}
