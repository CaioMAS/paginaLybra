"use client";

import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleScrollTo = (selector: string) => {
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
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.tagline}>Lybra Empreendimentos</span>
        <h1 className={styles.title}>
          Engenharia de Alto Padrão
          <span className={styles.titleHighlight}>e Soluções Industriais</span>
        </h1>
        <p className={styles.description}>
          Há mais de 11 anos, a <strong>Lybra</strong> transforma grandes projetos industriais, comerciais e residenciais em realidade com máxima qualidade, eficiência e compromisso.
        </p>
        <div className={styles.ctaContainer}>
          <button onClick={() => handleScrollTo("#portfolio")} className={styles.primaryBtn}>
            Conhecer Nossas Obras
          </button>
          <button onClick={() => handleScrollTo("#contact")} className={styles.secondaryBtn}>
            Fale Conosco
          </button>
        </div>
      </div>

      {/* Mouse scroll indicator */}
      <div onClick={() => handleScrollTo("#about")} className={styles.scrollIndicator}>
        <span>Rolar para baixo</span>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
}
