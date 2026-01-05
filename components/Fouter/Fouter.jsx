import React from 'react'
import './Fouter.css'

const Fouter = () => {
  return (
    <div id="test" >
      <footer className="bottom-footer-legal">
  <div className="container footer-legal-wrapper">
    
    {/* Sun Pharma Logotipi (SVG orqali) */}
    <div className="sun-pharma-logo">
      <svg viewBox="0 0 200 100" className="sun-logo-svg">
        <circle cx="50" cy="50" r="20" fill="none" stroke="#f37021" strokeWidth="8" />
        <path d="M50 20 A30 30 0 0 1 80 50" stroke="#f37021" strokeWidth="4" fill="none" />
        <text x="10" y="85" fill="white" fontSize="22" fontWeight="bold" fontFamily="Arial">SUN</text>
        <text x="10" y="105" fill="white" fontSize="16" fontFamily="Arial">PHARMA</text>
      </svg>
    </div>

    {/* Ma'lumotlar matni */}
    <div className="legal-info-text">
      <p>
        Ishlab chiqaruvchi: Softgel Healthcare Private Limited, Survey No 20/1, Vandalur – Kelambakkam Road, 
        Pudupakkam Village Kancheepuram District, Tamilnadu – 603103, Hindiston.
      </p>
      <p>
        Savollar yoki e'tirozlar tug'ilganda "RANBAXY" AJ (SUN PHARMA kompaniyalar guruhi)ga murojaat qiling: 
        107023, Rossiya, Moskva, Elektrozavodskaya ko'chasi, 27-uy, 8-bino. 
        Tel: +7 (495) 234-51-70, E-mail: PV.EAEU@sunpharma.com
      </p>
      <p className="sogr-number">SOG'R № RU.77.99.11.003.E.000873.02.16, 24.02.2016 yildan</p>
    </div>

    {/* Huquqiy linklar */}
    <div className="legal-links">
      <a href="#">Foydalanuvchi shartnomasi</a>
      <a href="#">Maxfiylik siyosati</a>
    </div>

  </div>
</footer>
    </div>
  )
}

export default Fouter
