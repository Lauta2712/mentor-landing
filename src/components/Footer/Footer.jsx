import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a
          href="https://www.mapfre.com.ar"
          target="_blank"
          rel="noreferrer"
          className="website"
        >
          www.mapfre.com.ar
        </a>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/mapfre.ar"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/Facebook.png" alt="Facebook" />
            /mapfre.ar
          </a>
          <a
            href="https://www.instagram.com/mapfre_ar"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/Instagram.png" alt="Instagram" />
            @mapfre_ar
          </a>
          <a
            href="https://www.linkedin.com/company/mapfre"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/Linkedin.png" alt="LinkedIn" />
            mapfre
          </a>
          <a
            href="https://www.youtube.com/user/mapfre"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/YouTube.png" alt="YouTube" />
            MapfreArgentina
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <img
          src="/images/MAP-Zocalo_SSN.jpg"
          alt="Superintendencia de Seguros de la Nación"
          className="footer-banner"
        />
      </div>
    </footer>
  );
}
