import React from 'react'
import './Intro.css'
import rasm1 from './1rasm.png'
import rasm2 from './2rasm.png'
import rasm3 from './3rasm.png'
const Intro = () => {
  return (
    <div id="articles" >
      <section  className="health-section">
  <div className="container">
    
    {/* 1. Gimnastika bloki */}
    <div className="gym-block" data-aos="fade-up">
      <h2 className="section-main-title">Bo'g'inlar uchun gimnastika</h2>
      <p className="section-subtitle">Tayanch-harakat tizimi kasalliklari rivojlanish xavfini kamaytirishga yordam beradi</p>
      
      <div className="gym-cards">
        {/* Tirsak */}
        <div className="gym-card">
          <div className="gym-content"><h3>TIRSAK <br/> BO'G'INI</h3></div>
          <div className="gym-icon-svg">
             <svg viewBox="0 0 24 24" fill="none" stroke="#00bdf2" strokeWidth="1.5">
               <path d="M6.5 6.5L10.5 10.5L6.5 14.5" strokeLinecap="round" strokeLinejoin="round"/>
               <circle cx="12" cy="12" r="10" strokeOpacity="0.2" fill="#00bdf2" fillOpacity="0.1"/>
             </svg>
          </div>
        </div>

        {/* Chanoq-son */}
        <div className="gym-card">
          <div className="gym-content"><h3>CHANOQ-SON <br/> BO'G'INI</h3></div>
          <div className="gym-icon-svg">
             <svg viewBox="0 0 24 24" fill="none" stroke="#00bdf2" strokeWidth="1.5">
               <ellipse cx="12" cy="12" rx="9" ry="5" strokeOpacity="0.2" fill="#00bdf2" fillOpacity="0.1"/>
               <path d="M12 7V17M7 12H17" strokeLinecap="round"/>
             </svg>
          </div>
        </div>

        {/* Tizza */}
        <div className="gym-card">
          <div className="gym-content"><h3>TIZZA <br/> BO'G'INI</h3></div>
          <div className="gym-icon-svg">
             <svg viewBox="0 0 24 24" fill="none" stroke="#00bdf2" strokeWidth="1.5">
               <rect x="5" y="5" width="14" height="14" rx="3" strokeOpacity="0.2" fill="#00bdf2" fillOpacity="0.1"/>
               <path d="M9 12L11 14L15 10" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
        </div>
      </div>
    </div>

    {/* 2. Maqolalar bloki */}
    <div className="articles-block" data-aos="fade-up">
      <h2 className="section-main-title">Bo'g'inlar salomatligi haqida ko'proq biling</h2>
      
      <div className="article-cards">
        {/* Maqola 1 */}
        <div className="article-card">
          <div className="article-img-wrapper">
            <img src={rasm1} alt="Parhez" className="zoom-img" />
          </div>
          <div className="article-footer">
            <p>Bo'g'inlar bilan bog'liq muammolarda parhez</p>
            <button className="rotating-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Maqola 2 */}
        <div className="article-card">
          <div className="article-img-wrapper">
            <img src={rasm2} alt="Xondro" className="zoom-img" />
          </div>
          <div className="article-footer">
            <p>Xondroprotektorlar nima o'zi?</p>
            <button className="rotating-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Maqola 3 */}
        <div className="article-card">
          <div className="article-img-wrapper">
            <img src={rasm3} alt="Tizza" className="zoom-img" />
          </div>
          <div className="article-footer">
            <p>Nega tizzalar bezovta qiladi?</p>
            <button className="rotating-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="btn-footer-center">
        <button className="btn-custom-blue">BARCHA MAQOLALAR</button>
      </div>
    </div>

  </div>
</section>

<footer className="footer-section" data-aos="fade-up">
  <div className="container">
    
    {/* Yuqori qism: Ogohlantirish matni */}
    <div className="warning-banner">
      <h2>B.A.D. DORI VOSITASI HISOBLANMAYDI.</h2>
    </div>

    {/* O'rta qism: Manbalar */}
    <div className="sources-block" data-aos="fade-up">
      <h3 className="sources-title">Ma'lumot manbalari</h3>
      <ol className="sources-list">
        <li>Aghazaden-Habashi A., Jamali F. The glucosamine controversy...</li>
        <li>Setnikar I, Rovati LC. Absorption, distribution, metabolism and excretion...</li>
        <li>Artroflex biologik faol qo'shimchasini qo'llash bo'yicha yo'riqnoma...</li>
        <li>Apteka.ru saytidagi narxlar tahlili asosida (21.01.2025 holatiga)...</li>
        <li>USHKALOVA E.A., ZRYANOV S.K. Simptomatik dori vositalari...</li>
        <li>Rodichkin P.V., Shalamov N.S. Xondroprotektorlarning klinik farmakologiyasi...</li>
        <li>Karateeva A.E., Barisheva Yu.V. Bo'g'inlar xastaligida kombinatsiyalangan davo...</li>
        <li>Yaremenko O.B., Anoxina G.A. BO'G'IN. TOG'AY. KOLLAGEN...</li>
      </ol>
    </div>

    {/* Pastki qism: Logo va Navigatsiya */}
    <div className="footer-bottom">
      <div className="footer-left">
        <div className="footer-brand">
          <span className="brand-artro">Artro</span><span className="brand-flex">Flex</span>
        </div>
        <div className="footer-actions">
          <button className="btn-buy-now">QAYERDAN SOTIB OLISH</button>
          <button className="btn-leaflet">YO'RIQNOMA</button>
        </div>
      </div>

      <div className="footer-right">
        <nav className="footer-nav">
          <div className="nav-column">
            <a href="#">Afzalliklari</a>
            <a href="#">Gimnastika</a>
          </div>
          <div className="nav-column">
            <a href="#">Tarkibi</a>
            <a href="#">Foydali maqolalar</a>
          </div>
          <div className="nav-column">
            <a href="#">Qabul qilish</a>
            <a href="#">Test</a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Intro
