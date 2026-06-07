"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll when menu is open
    } else {
      document.body.style.overflow = ""; // Enable scroll
    }
  };

  const handleLinkClick = (selector: string) => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
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
    <>
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
        {/* Logo Container */}
        <div className={styles.logoContainer} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img
            src="/LOGO_ICON.png"
            alt="Lybra Icon"
            className={styles.logoImage}
          />
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>Lybra</span>
            <span className={styles.logoSubtitle}>Empreendimentos</span>
          </div>
        </div>

        {/* Navigation Menu (Desktop) */}
        <nav className={styles.navMenu}>
          <span onClick={() => handleLinkClick("#hero")} className={styles.navLink}>Início</span>
          <span onClick={() => handleLinkClick("#about")} className={styles.navLink}>Quem Somos</span>
          <span onClick={() => handleLinkClick("#services")} className={styles.navLink}>Serviços</span>
          <span onClick={() => handleLinkClick("#portfolio")} className={styles.navLink}>Obras</span>
          <span onClick={() => handleLinkClick("#contact")} className={styles.navLink}>Contato</span>
        </nav>

        {/* Call to Action Button */}
        <button onClick={() => handleLinkClick("#contact")} className={styles.ctaButton}>
          Solicitar Orçamento
        </button>

        {/* Mobile Toggle Button */}
        <button
          className={styles.mobileMenuToggle}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={28} style={{ color: "#2e3092" }} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileNavOpen}>
          <span onClick={() => handleLinkClick("#hero")} className={styles.navLink}>Início</span>
          <span onClick={() => handleLinkClick("#about")} className={styles.navLink}>Quem Somos</span>
          <span onClick={() => handleLinkClick("#services")} className={styles.navLink}>Serviços</span>
          <span onClick={() => handleLinkClick("#portfolio")} className={styles.navLink}>Obras</span>
          <span onClick={() => handleLinkClick("#contact")} className={styles.navLink}>Contato</span>
          <button onClick={() => handleLinkClick("#contact")} className={styles.mobileCta}>
            Solicitar Orçamento
          </button>
        </div>
      )}
    </>
  );
}
