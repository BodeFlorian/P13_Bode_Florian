import React from 'react'

import './Home.css'

import Feature from './../../components/Feature'
import IconChat from './../../assets/img/icon-chat.webp'
import IconMoney from './../../assets/img/icon-money.webp'
import IconSecurity from './../../assets/img/icon-security.webp'

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="heroContent">
          <p className="subtitle">Pas de frais.</p>
          <p className="subtitle">Aucun dépôt minimum.</p>
          <p className="subtitle">Taux d'intérêt élevés.</p>
          <p className="text">
            Ouvrez un compte d'épargne avec Argent Bank dès aujourd'hui !
          </p>
        </div>
      </section>
      <section className="feature">
        <Feature
          iconSrc={IconChat}
          title="Vous êtes notre priorité n°1"
          description="Vous avez besoin de parler à un représentant ? Vous pouvez nous contacter via notre chat 24h/24 et 7j/7 ou par téléphone en moins de 5 minutes."
        />
        <Feature
          iconSrc={IconMoney}
          title="Plus d'économies signifie des taux plus élevés"
          description="Plus vous épargnez avec nous, plus votre taux d'intérêt sera élevé !"
        />
        <Feature
          iconSrc={IconSecurity}
          title="Sécurité à laquelle vous pouvez faire confiance"
          description="Nous utilisons un cryptage de pointe pour garantir que vos données et votre argent sont toujours en sécurité."
        />
      </section>
    </main>
  )
}

export default Home
