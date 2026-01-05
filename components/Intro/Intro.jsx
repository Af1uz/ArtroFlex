import React, { useState } from 'react' 
import './Intro.css'
import rasm1 from './1rasm.png'
import rasm2 from './2rasm.png'
import rasm3 from './3rasm.png'

const Intro = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (type) => {
    setActiveModal(type);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  const modalContent = {
    gym_tirsak: { title: "TIRSAK BO'G'INI MASHQLARI", desc: "Tirsak bo'g'ini harakatchanligini tiklash uchun kuniga 10-15 marta qo'llarni bukib-yozish va aylana harakatlar qilish tavsiya etiladi." },
    gym_chanoq: { title: "CHANOQ-SON BO'G'INI MASHQLARI", desc: "Yotgan holda oyoqlarni 'velosiped' uslubida aylantirish chanoq-son bo'g'inidagi qon aylanishini yaxshilaydi." },
    gym_tizza: { title: "TIZZA BO'G'INI MASHQLARI", desc: "Tizza og'riqlarida og'ir yuklamasiz, sekinlik bilan oyoqni ko'tarib tushirish va tizza qopqog'ini yumshoq massaj qilish foydali." },
    article_diet: { title: "BO'G'INLAR UCHUN PARHEZ", desc: "Baliq moyi, kalsiyga boy mahsulotlar va ko'proq suv ichish bo'g'inlararo suyuqlikning normada bo'lishiga yordam beradi." },
    article_chondro: { title: "XONDROPROTEKTORLAR HAQIDA", desc: "Xondroitin va Glyukozamin - bu bo'g'in tog'aylarini qayta tiklovchi asosiy qurilish materiallaridir." },
    article_knee: { title: "NEGA TIZZALAR OG'RIYDI?", desc: "Tizza og'rig'iga ortiqcha vazn, noto'g'ri poyabzal yoki jismoniy zo'riqish sabab bo'lishi mumkin." },
    instruction: { title: "FOYDALANISH YO'RIQNOMASI", desc: "ArtroFlex: Kuniga 1 kapsuladan ovqat vaqtida ichiladi. Kurs davomiyligi 2-3 oyni tashkil etadi." },
    pharmacy: { title: "SOTIB OLISH MANZILLARI", desc: "Mahsulotni barcha Grand Pharm, OxyMed va boshqa yirik dorixonalar tarmoqlaridan topishingiz mumkin." }
  };

  return (
    <div id="articles">
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-inner" onClick={e => e.stopPropagation()}>
            <button className="close-x" onClick={closeModal}>&times;</button>
            <h2 className="modal-h2">{modalContent[activeModal]?.title}</h2>
            <p className="modal-p">{modalContent[activeModal]?.desc}</p>
            <button className="modal-btn-close" onClick={closeModal}>Yopish</button>
          </div>
        </div>
      )}

      <section className="health-section">
        <div className="container">
          <div className="gym-block" data-aos="fade-up">
            <h2 className="section-main-title">Bo'g'inlar uchun gimnastika</h2>
            <p className="section-subtitle">Tayanch-harakat tizimi kasalliklari rivojlanish xavfini kamaytirishga yordam beradi</p>
            <div className="gym-cards">
              <div className="gym-card" onClick={() => openModal('gym_tirsak')}>
                <div className="gym-content"><h3>TIRSAK <br/> BO'G'INI</h3></div>
                <div className="gym-icon-svg">
                   <svg viewBox="0 0 24 24" fill="none" stroke="#00bdf2" strokeWidth="1.5">
                     <path d="M6.5 6.5L10.5 10.5L6.5 14.5" strokeLinecap="round" strokeLinejoin="round"/>
                     <circle cx="12" cy="12" r="10" strokeOpacity="0.2" fill="#00bdf2" fillOpacity="0.1"/>
                   </svg>
                </div>
              </div>
              <div className="gym-card" onClick={() => openModal('gym_chanoq')}>
                <div className="gym-content"><h3>CHANOQ-SON <br/> BO'G'INI</h3></div>
                <div className="gym-icon-svg">
                   <svg viewBox="0 0 24 24" fill="none" stroke="#00bdf2" strokeWidth="1.5">
                     <ellipse cx="12" cy="12" rx="9" ry="5" strokeOpacity="0.2" fill="#00bdf2" fillOpacity="0.1"/>
                     <path d="M12 7V17M7 12H17" strokeLinecap="round"/>
                   </svg>
                </div>
              </div>
              <div className="gym-card" onClick={() => openModal('gym_tizza')}>
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

          <div className="articles-block" data-aos="fade-up">
            <h2 className="section-main-title">Bo'g'inlar salomatligi haqida ko'proq biling</h2>
            <div className="article-cards">
              {/* Har bir card ichiga desc matni qo'shildi */}
              <div className="article-card">
                <div className="article-img-wrapper">
                  <img src={rasm1} alt="Parhez" className="zoom-img" />
                </div>
                <div className="article-footer">
                  <p className="art-title">Bo'g'inlar bilan bog'liq muammolarda parhez</p>
                  <p className="art-desc">{modalContent.article_diet.desc}</p>
                  <button className="rotating-arrow" onClick={() => openModal('article_diet')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="article-card">
                <div className="article-img-wrapper">
                  <img src={rasm2} alt="Xondro" className="zoom-img" />
                </div>
                <div className="article-footer">
                  <p className="art-title">Xondroprotektorlar nima o'zi?</p>
                  <p className="art-desc">{modalContent.article_chondro.desc}</p>
                  <button className="rotating-arrow" onClick={() => openModal('article_chondro')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="article-card">
                <div className="article-img-wrapper">
                  <img src={rasm3} alt="Tizza" className="zoom-img" />
                </div>
                <div className="article-footer">
                  <p className="art-title">Nega tizzalar bezovta qiladi?</p>
                  <p className="art-desc">{modalContent.article_knee.desc}</p>
                  <button className="rotating-arrow" onClick={() => openModal('article_knee')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="btn-footer-center">
              <button className="btn-custom-blue" onClick={() => openModal('article_diet')}>BARCHA MAQOLALAR</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section" data-aos="fade-up">
        <div className="container">
          <div className="warning-banner"><h2>B.A.D. DORI VOSITASI HISOBLANMAYDI.</h2></div>
          <div className="sources-block">
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
          <div className="footer-bottom">
            <div className="footer-left">
              <div className="footer-brand"><span className="brand-artro">Artro</span><span className="brand-flex">Flex</span></div>
              <div className="footer-actions">
                <button className="btn-buy-now" onClick={() => openModal('pharmacy')}>QAYERDAN SOTIB OLISH</button>
                <button className="btn-leaflet" onClick={() => openModal('instruction')}>YO'RIQNOMA</button>
              </div>
            </div>
            <div className="footer-right">
              <nav className="footer-nav">
                <div className="nav-column"><a href="#advantages">Afzalliklari</a><a href="#gym">Gimnastika</a></div>
                <div className="nav-column"><a href="#composition">Tarkibi</a><a href="#articles">Foydali maqolalar</a></div>
                <div className="nav-column"><a href="#how-to">Qabul qilish</a><a href="#test">Test</a></div>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Intro