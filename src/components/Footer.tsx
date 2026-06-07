"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const Instagram = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const handleLinkClick = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerGrid} container`}>
        {/* Column 1: Brand Info */}
        <div className={styles.column}>
          <div className={styles.logoContainer}>
            <img
              src="/LOGO_ICON.png"
              alt="Lybra Icon"
              className={styles.logoImage}
            />
            <span className={styles.logoTitle}>Lybra</span>
          </div>
          <p className={styles.infoText}>
            Uma empresa de engenharia e construção civil comprometida com a qualidade, eficiência e sustentabilidade de cada projeto. Fundada em 2013, com mais de 11 anos de sólida experiência no mercado.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className={styles.column}>
          <h4>Navegação</h4>
          <ul className={styles.linkList}>
            <li onClick={() => handleLinkClick("#hero")} className={styles.linkItem}>Início</li>
            <li onClick={() => handleLinkClick("#about")} className={styles.linkItem}>Quem Somos</li>
            <li onClick={() => handleLinkClick("#services")} className={styles.linkItem}>Serviços</li>
            <li onClick={() => handleLinkClick("#portfolio")} className={styles.linkItem}>Obras</li>
            <li onClick={() => handleLinkClick("#contact")} className={styles.linkItem}>Contato</li>
          </ul>
        </div>

        {/* Column 3: Services Summary */}
        <div className={styles.column}>
          <h4>Serviços Principais</h4>
          <ul className={styles.linkList}>
            <li onClick={() => handleLinkClick("#services")} className={styles.linkItem}>Obras Industriais</li>
            <li onClick={() => handleLinkClick("#services")} className={styles.linkItem}>Instalações Elétricas</li>
            <li onClick={() => handleLinkClick("#services")} className={styles.linkItem}>Cabeamento de Rede</li>
            <li onClick={() => handleLinkClick("#services")} className={styles.linkItem}>Locação de Máquinas</li>
            <li onClick={() => handleLinkClick("#services")} className={styles.linkItem}>Pinturas Anticorrosivas</li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className={styles.column}>
          <h4>Contato</h4>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <Phone size={18} className={styles.contactIcon} />
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>Telefones</span>
                <span className={styles.contactValue}>(38) 9 9188-7211</span>
                <span className={styles.contactValue}>(38) 9 8421-7668</span>
              </div>
            </div>
            <div className={styles.contactItem}>
              <Mail size={18} className={styles.contactIcon} />
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>E-mail</span>
                <span className={styles.contactValue}>lybraservicos@gmail.com</span>
              </div>
            </div>
            <div className={styles.contactItem}>
              <Instagram size={18} className={styles.contactIcon} />
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>Siga-nos</span>
                <a
                  href="https://www.instagram.com/lybraempreendimentos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactValue}
                  style={{ textDecoration: "underline" }}
                >
                  @lybraempreendimentos
                </a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={18} className={styles.contactIcon} />
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>Atuação</span>
                <span className={styles.contactValue}>Montes Claros, Januária e Região</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className={`${styles.bottomBar} container`}>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Lybra Empreendimentos. Todos os direitos reservados.
        </div>
        <div>
          Desenvolvido de forma profissional para a <span className={styles.designerLink}>Lybra</span>.
        </div>
      </div>
    </footer>
  );
}
