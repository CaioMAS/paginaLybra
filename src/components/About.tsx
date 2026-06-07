"use client";

import React from "react";
import { Target, Eye, ShieldCheck, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`${styles.about} bg-light-blue`}>
      <div className="container">
        {/* Intro Grid */}
        <div className={styles.introContent}>
          {/* Left: Text Info */}
          <ScrollReveal animation="fade-left">
            <div className={styles.textSection}>
              <span className="section-subtitle">Quem Somos</span>
              <h2 className={styles.aboutTitle}>Mais de uma década construindo o futuro</h2>
              <p className={styles.aboutText}>
                Somos uma empresa de engenharia e construção com mais de <strong>11 anos de sólida experiência</strong> no mercado de infraestrutura civil.
              </p>
              <div className={styles.highlightBox}>
                "Nossa missão é realizar projetos com qualidade, eficiência e sustentabilidade, sempre com foco na plena satisfação do cliente."
              </div>
              <p className={styles.aboutText}>
                Fundada em 2013, a Lybra vem consolidando sua marca através do profissionalismo e do respeito a prazos e normas técnicas. Atuamos em projetos de variada complexidade, desde a infraestrutura subterrânea pesada até reformas corporativas de alto padrão.
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Stats Counters */}
          <ScrollReveal animation="fade-right">
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <Award size={32} color="var(--color-accent)" />
                <span className={styles.statNumber}>11+</span>
                <span className={styles.statLabel}>Anos de História</span>
                <span className={styles.statDesc}>Fundada em 2013</span>
              </div>
              
              <div className={styles.statCard}>
                <ShieldCheck size={32} color="var(--color-accent)" />
                <span className={styles.statNumber}>14+</span>
                <span className={styles.statLabel}>Grandes Obras</span>
                <span className={styles.statDesc}>Portfólio comprovado</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className={styles.purposeGrid}>
          <ScrollReveal animation="fade-up" delay={100}>
            <div className={styles.purposeCard}>
              <div className={styles.iconWrapper}>
                <Target size={28} />
              </div>
              <h3>Missão</h3>
              <p>
                Executar projetos com qualidade e eficiência, visando a satisfação plena de nossos clientes e contribuindo para o crescimento sustentável da construção civil.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className={styles.purposeCard}>
              <div className={styles.iconWrapper}>
                <Eye size={28} />
              </div>
              <h3>Visão</h3>
              <p>
                Ser reconhecida como referência no setor da construção civil, promovendo soluções inovadoras e sustentáveis que contribuem para o desenvolvimento das comunidades onde atuamos.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <div className={styles.purposeCard}>
              <div className={styles.iconWrapper}>
                <ShieldCheck size={28} />
              </div>
              <h3>Valores</h3>
              <p>
                Guiados por integridade, excelência, compromisso com o cliente, qualidade e trabalho em equipe. Buscamos aprimorar nossas operações, respeitar as pessoas e fomentar a sustentabilidade.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
