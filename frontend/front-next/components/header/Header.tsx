import React from 'react'
import '../header/header.css'
export default function Header() {
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
                <div className="signuplogin">Signup/Login</div>
            </div>
        </div>
        <div className='categories-header'>
            <div>Électronique</div>
            <div>Mode</div>
            <div>Maison et Jardin</div>
            <div>Santé et Beauté</div>
            <div>Sport et Loisirs</div>
            <div>Livres et Médias</div>
            <div>Automobile</div>
            <div>Jouets et Jeux</div>
            <div>Art</div>
        </div>
    </header>

  )
}
