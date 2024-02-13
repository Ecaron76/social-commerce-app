'use client'
import Image from "next/image";
import Header from "../../components/header/Header";
import PageContainer from "../../components/pagecontainer/PageContainer";
import Footer from "../../components/footer/Footer";
import { useRouter } from "next/navigation";


export default function Home() {
  const router= useRouter()
  const vendeurs = [
    {
      id: 1,
      nom: "Vendeur 1",
      description: "Spécialisé dans les gadgets électroniques.",
      image: "lien_image_vendeur1.jpg",
      lien: "/vendeur1",
      avis: 120,
      rating: 4.5,
    },
    {
      id: 2,
      nom: "Vendeur 2",
      description: "Mode haut de gamme pour hommes et femmes.",
      image: "lien_image_vendeur2.jpg",
      lien: "/vendeur2",
      avis: 85,
      rating: 4.2,
    },
    {
      id: 3,
      nom: "Vendeur 3",
      description: "Produits de beauté et de soins personnels.",
      image: "lien_image_vendeur3.jpg",
      lien: "/vendeur3",
      avis: 200,
      rating: 4.8,
    },
    {
      id: 4,
      nom: "Vendeur 4",
      description: "Matériel de jardinage et accessoires.",
      image: "lien_image_vendeur4.jpg",
      lien: "/vendeur4",
      avis: 45,
      rating: 3.9,
    },

  ];

  return (
    <main>
      <Header />
      <PageContainer>
        <section className="best-sellers">
          <h1>Les Meilleurs Vendeurs</h1>
          <div className="seller-list">
            {vendeurs.map((vendeur) => (
              <div key={vendeur.id} className="seller-card">
                <img src={vendeur.image} alt={`Meilleur Vendeur ${vendeur.id}`} />
                <div className="seller-card-content">
                  <h3>{vendeur.nom}</h3>
                  <p>{vendeur.description}</p>

                </div>
                <div className="seller-card-buttons">
                  <p>Rating: {vendeur.rating}/5 ({vendeur.avis} avis)</p>
                  <a href={vendeur.lien} className="seller-card-button">Voir plus</a>
                </div>
              </div>
            ))}
          </div>
          <div className="cta-vendeur">
            <p>Et vous ? Et si vous deveniez l'un de nos meilleurs vendeurs ?</p>
            <button>Je me lance dans la vente !</button>
          </div>
        </section>
        <section className="popular-categories">
          <h2>Catégories Populaires</h2>
          <div className="category-list">
            <div className="category-card">
              <img src="lien_image_categorie1.jpg" alt="Catégorie 1" />
              <h3>Électronique</h3>
            </div>
            <div className="category-card">
              <img src="lien_image_categorie2.jpg" alt="Catégorie 2" />
              <h3>Jouets et jeux</h3>
            </div>
            <div className="category-card">
              <img src="lien_image_categorie2.jpg" alt="Catégorie 3" />
              <h3>Automobile</h3>
            </div>
          </div>
        </section>
        <section className="interactive-map">
          <h2>Rechercher des Vendeurs</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327330.7875809786!2d0.37134301752600535!3d46.777435358968575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sfr!2sfr!4v1707474595292!5m2!1sfr!2sfr" width="600" height="450"  loading="lazy" ></iframe>
        </section>
      </PageContainer>
      <Footer />
    </main>
  );
}
