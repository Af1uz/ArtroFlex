import React, { useEffect, useState } from 'react'; // Faqat useEffect qo'shildi
import img1 from './artflex.png'; 
import img2 from './imgs.png'
import img3 from './rsms.png'
import img4 from './skrn1.png'
import img5 from './skrn2.png'
import '../Navbar/Navbar.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Navbar = () => {

  // Menyu holatini saqlash (false - yopiq, true - ochiq)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Menyu ochiqligida body skrollini to'xtatish
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.padding = "5px 0"; // Header bir oz torayadi
    header.style.background = "rgba(255, 255, 255, 0.95)"; // Shaffofroq bo'ladi
  } else {
    header.style.padding = "15px 0";
    header.style.background = "#ffffff";
  }
});

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true, // Animatsiya tugagach element o'z joyida qotib qolishi uchun true qiling
      disableMutationObserver: false,
      debounceDelay: 50, 
      throttleDelay: 99,
      offset: 120, // Animatsiya biroz oldinroq boshlanishi uchun
    });
  }, []);

  return (
    <div className="artroflex-page">
      {/* Header qismi */}
      <header className="header">
      <div className="container">
        <div className="top-bar">
          {/* 1. Logo */}
          <div className="logo">
            <span className="logo-blue">Artro</span>
            <span className="logo-dark">Flex</span>
          </div>
          
          {/* 2. O'ng tomon: Tugma va Burger */}
          <div className="top-right-group">
            <button className="btn-buy-nav">SOTIB OLISH</button>
            
            <div 
              className={`burger-menu ${isOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Mobil menyu oynasi */}
        <nav className={`nav-container ${isOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li><a href="#advantages" onClick={toggleMenu}>Afzalliklari</a></li>
            <li><a href="#composition" onClick={toggleMenu}>Tarkibi</a></li>
            <li><a href="#how-to" onClick={toggleMenu}>Qabul qilish</a></li>
            <li><a href="#gym" onClick={toggleMenu}>Bo'g'inlar uchun gimnastika</a></li>
            <li><a href="#articles" onClick={toggleMenu}>Foydali maqolalar</a></li>
            <li><a href="#test" onClick={toggleMenu}>Test</a></li>
          </ul>
        </nav>
      </div>
      
      {/* Menyu ochiqligida orqa fonni xiralashtirish (Overlay) */}
      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </header>

      {/* Hero Section - data-aos="fade-up" qo'shildi */}
      <section  className="hero" data-aos="fade-up"> 
        <div className="container hero-wrapper">
          <div className="text-side">
            <h1 className="brand-title">Artro<span className="brand-dark">Flex</span></h1>
            <h2 className="main-subtitle">
              bo'g'inlar va umurtqa pog'onasi salomatligini qo'llab-quvvatlash uchun
            </h2>
            <p className="description-text">
              Oson so'riluvchi sulfat shaklidagi ikkita xondroprotektor <sup>1-3</sup>
            </p>
            
            <div id="advantages" className="button-row">
              <button className="btn-filled">SOTIB OLISH</button>
              <button className="btn-outline">YO'RIQNOMA</button>
            </div>
          </div>

          <div className="image-side">
            <div className="orange-circle">
              <span className="num">1</span>
              <span className="txt">KUNIGA <br/> 1 KAPSULA</span>
            </div>
            <img  
              src={img1} 
              alt="Artroflex Box" 
              className="box-image" 
            />
          </div>
        </div>
      </section>

      <section   className="features-section" data-aos="fade-up" data-aos-delay="200">
  <div className="container">
    <div className="features-white-card">
      
      {/* 1-ustun */}
      <div className="feature-item">
        <div className="feature-icon-circle"></div>
        <p className="feature-text">
          BO'G'INLARDA QULAYLIK HISINI <br/> 
          <strong>SAQLASHGA YORDAM BERADI</strong> <sup>3,7</sup>
        </p>
      </div>

      <div className="divider"></div>

      {/* 2-ustun */}
      <div className="feature-item">
        <div className="feature-icon-circle"></div>
        <p className="feature-text">
          BO'G'INLARNING HARAKATCHANLIGINI <br/> 
          <strong>SAQLASHGA YORDAM BERADI</strong> <sup>3,7</sup>
        </p>
      </div>

      <div className="divider"></div>

      {/* 3-ustun */}
      <div className="feature-item">
        <div className="feature-icon-circle"></div>
        <p className="feature-text">
          QADOQNING <br/> 
          <strong>HAMYONBOP NARXI</strong> <sup>4</sup>
        </p>
      </div>

    </div>
  </div>
</section>

    <section id="composition" className="composition-section" data-aos="fade-up">
  <div className="container">
    <h2 className="composition-title">Ikki sulfatning majmuaviy ta'siri</h2>
    
    <div className="composition-wrapper">
      {/* Chap blok */}
      <div className="comp-card" data-aos="fade-right" data-aos-delay="200">
        <div className="comp-header">
          <h3>Glukozamin sulfat quyidagilarga yordam beradi<sup>3</sup>:</h3>
          <span className="dosage">500 mg</span>
        </div>
        <ul className="comp-list">
          <li>Bo'g'inlarda qulaylik hisini saqlashga</li> <br /> <br />
          <li>Bo'g'inlar harakatchanligini oshirishga</li> <br /> <br />
          <li>Tog'ay to'qimasida almashinuv jarayonlarini yaxshilashga</li> <br /> <br />
        </ul>
      </div>

      {/* Markazdagi pazzl rasm uchun joy */}
      <div className="composition-image">
        <div className="puzzle-box">
          <img className='img2' src={img2} alt="" />
          <div className="puzzle-piece"></div>
        </div>
      </div>

      {/* O'ng blok */}
      <div className="comp-card" data-aos="fade-left" data-aos-delay="400">
        <div className="comp-header">
          <h3>Xondroitin sulfat quyidagilarga yordam beradi<sup>3</sup>:</h3>
          <span className="dosage">400 mg</span>
        </div>
        <ul className="comp-list">
          <li>Tog'ay to'qimasi salomatligini qo'llab-quvvatlashga</li> <br /> <br />
          <li>Kollagen hosil bo'lishini rag'batlantirishga</li> <br /> <br />
          <li>Bog'lamlarning qayishqoqligi va elastikligiga</li> <br /> <br />
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="how-to" className="usage-section" data-aos="fade-up">
  <div className="container usage-wrapper">
    {/* Chap tomon: Matnlar */}
    <div className="usage-text">
      <h2 className="usage-title">
        ARTROFLEX <br /> <span>qabul qilish qulay</span><sup>3</sup>
      </h2>

      <div className="usage-steps">
        <div className="step-item">
          <div className="step-icon">
            <img className='mx' src={img4} alt="icon" />
          </div>
          <div className="step-info">
            <h3>1 KAPSULA</h3>
            <p>kuniga</p> <br /> <br /> <br />
          </div>
        </div>

        <div className="step-item">
          <div className="step-icon">
            <img className='mx' src={img5} alt="icon" />
          </div>
          <div className="step-info">
            <h3>OSON YUTILADI</h3>
            <p>silliq yuzasi va qulay shakli tufayli</p>
          </div>
        </div>
      </div>

      <div className="recommendation-box">
        <p>TAVSIYA ETILADIGAN KURS <br /> XONDROPROTEKTORLAR</p>
        <span className="course-count">yiliga 2-3 marta<sup>5,6</sup></span>
      </div>
    </div>

    {/* O'ng tomon: Rasm */}
    <div className="usage-image">
      <img src={img3} />
    </div>
  </div>
</section>


<section id="gym" className="info-section">
  <div className="container">
    {/* Uchta asosiy afzallik kartochkalari */}
    <div className="cards-wrapper">
      
      {/* 1-Karta: Kompleks ta'sir */}
      <div className="info-card" data-aos="fade-up">
        <div className="icon-wrapper">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" strokeWidth="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <h3>KOMPLEKS <br/> TA'SIR</h3>
        <p>Glukozamin sulfat va xondroitin sulfat optimal dozalarda bo'g'inlar va umurtqa pog'onasi tog'ay to'qimasini qo'llab-quvvatlashga yordam beradi<sup>3</sup></p>
      </div>

      {/* 2-Karta: Oson so'riluvchi tarkib */}
      <div className="info-card" data-aos="fade-up" data-aos-delay="100">
        <div className="icon-wrapper">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" strokeWidth="1.5">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
        </div>
        <h3>OSON SO'RILUVCHI <br/> TARKIB</h3>
        <p>Glukozamin sulfat shaklida organizm tomonidan glukozamin gidroxloridga qaraganda yaxshiroq so'riladi<sup>1-3</sup></p>
      </div>

      {/* 3-Karta: Tabiiy formula */}
      <div className="info-card" data-aos="fade-up" data-aos-delay="200">
        <div className="icon-wrapper">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" strokeWidth="1.5">
            <path d="M12 3l8.5 5v10L12 21l-8.5-5V8L12 3z" />
            <path d="M12 3v18M12 12l8.5-5M12 12l-8.5-5" />
          </svg>
        </div>
        <h3>TABIIY <br/> FORMULA</h3>
        <p>Tog'ay to'qimasining tabiiy komponentlarini o'z ichiga oladi<sup>3,8</sup></p>
      </div>
    </div>

    {/* Pastki qism: Qayerdan sotib olish mumkin */}
    <div className="buy-section" data-aos="fade-up">
      <div className="buy-content">
        <h2 className="buy-title">Qayerdan sotib olish mumkin?</h2>
        <p className="buy-subtitle">Siz ArtroFlex-ni onlayn maydonchalarda va shahringizdagi dorixonalardan xarid qilishingiz mumkin</p>
        <button className="btn-orange">DORIXONA TOPISH</button>
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

    </div>
  );
}

export default Navbar;