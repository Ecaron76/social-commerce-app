'use client'
import '../categories/categories.css'
import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import PageContainer from "../../../components/pagecontainer/PageContainer"


export default function CategoriesPage() {
    const categories=[
        {nom:'Électronique',nombreProduits: 120},
        {nom:'Mode',nombreProduits: 54},
        {nom:'Maison et Jardin',nombreProduits: 337},
        {nom:'Santé et Beauté',nombreProduits: 200},
        {nom:'Sport et Loisirs',nombreProduits: 87},
        {nom:'Livres et Médias',nombreProduits: 70},
        {nom:'Automobile',nombreProduits: 120},
        {nom:'Jouets et Jeux',nombreProduits: 353},
        {nom:'Art',nombreProduits: 40},
    ]
    return (
        <main>
            <Header />
            <PageContainer>
                <section className="categoriesSection">
                    {categories.map((category, index) => (
                        <div key={index} className="categoryCard">
                            <h3>{category.nom}</h3>
                            <p>{category.nombreProduits} produits en vente</p>
                        </div>
                    ))}
                </section>
            </PageContainer>
            <Footer />
        </main>
    )
}