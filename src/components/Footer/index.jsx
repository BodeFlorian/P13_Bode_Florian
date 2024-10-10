import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footerText">Copyright {currentYear} Argent Bank</p>
    </footer>
  )
}

export default Footer
