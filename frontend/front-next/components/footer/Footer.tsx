import React from 'react'
import '../footer/footer.css'
export default function Footer() {
  return (
    
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>A propos de SellSprint</h3>
          <p>Découvrez notre plateforme pour acheter et vendre en toute simplicité.</p>
        </div>
        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/categories">Catégories</a></li>
            <li><a href="/vendre">Vendre des produits</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Réseaux sociaux</h3>
          <ul>
            <li><a href="#" target="_blank">Facebook</a></li>
            <li><a href="#" target="_blank">Twitter</a></li>
            <li><a href="#" target="_blank">Instagram</a></li>
            <li><a href="#" target="_blank">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contactez-nous</h3>
          <p>Email: info@sellsprint.com</p>
          <p>Téléphone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SellSprint. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
