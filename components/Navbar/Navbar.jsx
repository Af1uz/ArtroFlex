import React, { useEffect, useState } from 'react';
import img1 from './artflex.png'; 
import img2 from './imgs.png';
import img3 from './rsms.png';
import img4 from './skrn1.png';
import img5 from './skrn2.png';
import '../Navbar/Navbar.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [activeModal, setActiveModal] = useState(null); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  };

  const openModal = (type) => {
    setActiveModal(type);
    setIsOpen(false); 
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 50) {
          header.style.padding = "5px 0";
          header.style.background = "rgba(255, 255, 255, 0.95)";
        } else {
          header.style.padding = "15px 0";
          header.style.background = "#ffffff";
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      disableMutationObserver: false,
      debounceDelay: 50, 
      throttleDelay: 99,
      offset: 120,
    });
  }, []);

  const iconStyle = {
    marginRight: '8px',
    filter: 'drop-shadow(0 2px 2px rgba(0,129,255,0.3))',
    verticalAlign: 'middle'
  };

  return (
    <div className="artroflex-page">
      <header className="header">
        <div className="container">
          <div className="top-bar">
            <div className="logo">
              <span className="logo-blue">Artro</span><span className="logo-dark">Flex</span>
            </div>
            
            <div className="top-right-group">
              <button className="btn-buy-nav" onClick={() => openModal('buy')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeJoin="round" style={{marginRight: '6px', verticalAlign: 'middle'}}>
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                SOTIB OLISH
              </button>
              
              <div className={`burger-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>

          <nav className={`nav-container ${isOpen ? 'active' : ''}`}>
            <ul className="nav-menu">
              <li>
                <a href="#advantages" onClick={() => {setIsOpen(false); document.body.style.overflow = 'auto';}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0081ff" strokeWidth="2.5" strokeLinecap="round" strokeJoin="round" style={iconStyle}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"></path>
                  </svg>
                  Afzalliklari
                </a>
              </li>
              <li>
                <a href="#composition" onClick={() => {setIsOpen(false); document.body.style.overflow = 'auto';}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0081ff" strokeWidth="2.5" strokeLinecap="round" strokeJoin="round" style={iconStyle}>
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                    <line x1="16" y1="8" x2="2" y2="22"></line>
                  </svg>
                  Tarkibi
                </a>
              </li>
              <li>
                <a href="#how-to" onClick={() => {setIsOpen(false); document.body.style.overflow = 'auto';}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0081ff" strokeWidth="2.5" strokeLinecap="round" strokeJoin="round" style={iconStyle}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  Qabul qilish
                </a>
              </li>
              <li>
                <a href="#gym" onClick={() => {setIsOpen(false); document.body.style.overflow = 'auto';}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0081ff" strokeWidth="2.5" strokeLinecap="round" strokeJoin="round" style={iconStyle}>
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v8H2z"></path>
                    <line x1="6" y1="12" x2="14" y2="12"></line>
                  </svg>
                  Gimnastika
                </a>
              </li>
              <li>
                <a href="#articles" onClick={() => {setIsOpen(false); document.body.style.overflow = 'auto';}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0081ff" strokeWidth="2.5" strokeLinecap="round" strokeJoin="round" style={iconStyle}>
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  Maqolalar
                </a>
              </li>
              <li>
                <a href="#test" onClick={() => {setIsOpen(false); document.body.style.overflow = 'auto';}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0081ff" strokeWidth="2.5" strokeLinecap="round" strokeJoin="round" style={iconStyle}>
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  Test
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {activeModal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content stylish-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>&times;</button>
              
              {activeModal === 'buy' && (
                <div className="buy-form-container">
                  <h2 className="modal-title">Buyurtma berish</h2>
                  <p className="modal-desc">Ma'lumotlaringizni qoldiring, biz siz bilan bog'lanamiz</p>
                  <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                      <label>F.I.SH.</label>
                      <input type="text" placeholder="Ism sharifingiz" required />
                    </div>
                    <div className="input-group">
                      <label>Telefon raqami</label>
                      <input type="tel" placeholder="+998 (__) ___-__-__" required />
                    </div>
                    <div className="input-group">
                      <label>Yashash manzili</label>
                      <textarea placeholder="Viloyat, shahar, ko'cha..." rows="3" required></textarea>
                    </div>
                    <button type="submit" className="btn-submit-premium">BUYURTMANI TASDIQLASH</button>
                  </form>
                </div>
              )}

              {activeModal === 'instruction' && (
                <div className="modal-info-view">
                  <h2 className="modal-title">Yo'riqnoma</h2>
                  <div className="info-content">
                    <p><strong>Tarkibi:</strong> Har bir kapsula 500 mg glukozamin va 400 mg xondroitinni o'z ichiga oladi.</p>
                    <p><strong>Qo'llash:</strong> Kuniga 1 kapsuladan, ko'p miqdordagi suv bilan ichish tavsiya etiladi.</p>
                    <p><strong>Saqlash:</strong> Quruq va yorug'likdan himoyalangan joyda saqlang.</p>
                  </div>
                </div>
              )}

              {activeModal === 'pharmacy' && (
                <div className="modal-info-view">
                  <h2 className="modal-title">Dorixonalardan so'rang</h2>
                  <div className="pharmacy-grid">
                    <div className="ph-item">Grand Pharm</div>
                    <div className="ph-item">OxyMed</div>
                    <div className="ph-item">Davo Pharm</div>
                    <div className="ph-item">Best Pharm</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <section className="hero" data-aos="fade-up"> 
        <div className="container hero-wrapper">
          <div className="text-side">
            <h1 className="brand-title">Artro<span className="brand-dark">Flex</span></h1>
            <h2 className="main-subtitle">bo'g'inlar va umurtqa pog'onasi salomatligini qo'llab-quvvatlash uchun</h2>
            <p className="description-text">Oson so'riluvchi sulfat shaklidagi ikkita xondroprotektor <sup>1-3</sup></p>
            <div id="advantages" className="button-row">
              <button className="btn-filled" onClick={() => openModal('buy')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeJoin="round" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                SOTIB OLISH
              </button>
              <button className="btn-outline" onClick={() => openModal('instruction')}>YO'RIQNOMA</button>
            </div>
          </div>
          <div className="image-side">
            <div className="orange-circle">
              <span className="num">1</span>
              <span className="txt">KUNIGA <br/> 1 KAPSULA</span>
            </div>
            <img src={img1} alt="Artroflex Box" className="box-image" />
          </div>
        </div>
      </section>

      <section className="features-section" data-aos="fade-up" data-aos-delay="200">
        <div className="container">
          <div className="features-white-card">
            <div className="feature-item">
              <div className="feature-icon-circle"></div>
              <p className="feature-text">BO'G'INLARDA QULAYLIK HISINI <br/> <strong>SAQLASHGA YORDAM BERADI</strong> <sup>3,7</sup></p>
            </div>
            <div className="divider"></div>
            <div className="feature-item">
              <div className="feature-icon-circle"></div>
              <p className="feature-text">BO'G'INLARNING HARAKATCHANLIGINI <br/> <strong>SAQLASHGA YORDAM BERADI</strong> <sup>3,7</sup></p>
            </div>
            <div className="divider"></div>
            <div className="feature-item">
              <div className="feature-icon-circle"></div>
              <p className="feature-text">QADOQNING <br/> <strong>HAMYONBOP NARXI</strong> <sup>4</sup></p>
            </div>
          </div>
        </div>
      </section>

      <section id="composition" className="composition-section" data-aos="fade-up">
        <div className="container">
          <h2 className="composition-title">Ikki sulfatning majmuaviy ta'siri</h2>
          <div className="composition-wrapper">
            <div className="comp-card" data-aos="fade-right">
              <div className="comp-header">
                <h3>Glukozamin sulfat:</h3>
                <span className="dosage">500 mg</span>
              </div>
              <ul className="comp-list">
                <li>Bo'g'inlarda qulaylik hisini saqlashga</li>
                <li>Bo'g'inlar harakatchanligini oshirishga</li>
                <li>Tog'ay to'qimasida almashinuvni yaxshilashga</li>
              </ul>
            </div>
            <div className="composition-image">
              <img className='img2' src={img2} alt="Composition" />
            </div>
            <div className="comp-card" data-aos="fade-left">
              <div className="comp-header">
                <h3>Xondroitin sulfat:</h3>
                <span className="dosage">400 mg</span>
              </div>
              <ul className="comp-list">
                <li>Tog'ay to'qimasi salomatligini saqlashga</li>
                <li>Kollagen hosil bo'lishini rag'batlantirishga</li>
                <li>Elastiklikni oshirishga</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="how-to" className="usage-section" data-aos="fade-up">
        <div className="container usage-wrapper">
          <div className="usage-text">
            <h2 className="usage-title">ARTROFLEX <br /> <span>qabul qilish qulay</span><sup>3</sup></h2>
            <div className="usage-steps">
              <div className="step-item">
                <img className='mx' src={img4} alt="1 capsule" />
                <div className="step-info"><h3>1 KAPSULA</h3><p>kuniga</p></div>
              </div>
              <div className="step-item">
                <img className='mx' src={img5} alt="easy swallow" />
                <div className="step-info"><h3>OSON YUTILADI</h3><p>silliq yuzasi tufayli</p></div>
              </div>
            </div>
            <div className="recommendation-box">
              <p>TAVSIYA ETILADIGAN KURS</p>
              <span className="course-count">yiliga 2-3 marta<sup>5,6</sup></span>
            </div>
          </div>
          <div className="usage-image"><img src={img3} alt="Artroflex Box" /></div>
        </div>
      </section>

      <section id="gym" className="info-section">
        <div className="container">
          <div className="cards-wrapper">
            <div className="info-card" data-aos="fade-up">
              <div className="icon-wrapper">
                <svg width="60" height="60" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="gBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d2ff" />
                      <stop offset="100%" stopColor="#0081ff" />
                    </linearGradient>
                    <filter id="shadow3d" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3" />
                    </filter>
                  </defs>
                  <circle cx="50" cy="50" r="45" fill="url(#gBlue)" fillOpacity="0.05" />
                  <path d="M30 50 Q50 10 70 50 T30 50" fill="url(#gBlue)" filter="url(#shadow3d)" />
                  <circle cx="50" cy="50" r="10" fill="#fff" />
                  <path d="M25 50 A25 25 0 0 1 75 50" stroke="url(#gBlue)" strokeWidth="5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <h3>KOMPLEKS TA'SIR</h3>
              <p>Glukozamin va xondroitin sulfat bo'g'inlarni qo'llab-quvvatlaydi.</p>
            </div>

            <div className="info-card" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-wrapper">
                <svg width="60" height="60" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="url(#gBlue)" fillOpacity="0.05" />
                  <path d="M50 15 C30 45 30 70 50 85 C70 70 70 45 50 15" fill="url(#gBlue)" filter="url(#shadow3d)" />
                  <circle cx="46" cy="35" r="4" fill="#fff" fillOpacity="0.7" />
                  <path d="M40 70 L50 80 L65 65" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeJoin="round" fill="none" />
                </svg>
              </div>
              <h3>OSON SO'RILUVCHI</h3>
              <p>Organizmdan yaxshiroq so'riluvchi maxsus formula.</p>
            </div>

            <div className="info-card" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-wrapper">
                <svg width="60" height="60" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="url(#gBlue)" fillOpacity="0.05" />
                  <path d="M50 20 C75 20 85 50 50 85 C15 50 25 20 50 20Z" fill="url(#gBlue)" filter="url(#shadow3d)" />
                  <path d="M50 35 V75" stroke="#fff" strokeWidth="3" strokeOpacity="0.5" />
                  <circle cx="50" cy="35" r="6" fill="#fff" />
                </svg>
              </div>
              <h3>TABIIY FORMULA</h3>
              <p>Tabiiy komponentlar asosida tayyorlangan biologik faol qo'shimcha.</p>
            </div>
          </div>

          <div id="articles" className="buy-section" data-aos="fade-up">
            <div className="buy-content">
              <h2 className="buy-title">Qayerdan sotib olish mumkin?</h2>
              <p className="buy-subtitle">Onlayn maydonchalarda va shahringizdagi dorixonalardan xarid qiling.</p>
              <button className="btn-orange" onClick={() => openModal('pharmacy')}>DORIXONA TOPISH</button>
            </div>
            <div className="buy-logos-grid">
              <div className="logo-box">Apteka.uz</div>
              <div className="logo-box">Zdravsiti</div>
              <div className="logo-box">Eapteka</div>
              <div className="logo-box">Polza.uz</div>
            </div>
          </div>
        </div>
      </section>
      
      <div id="test"></div> {/* Test bo'limi uchun langar */}
    </div>
  );
}

export default Navbar;