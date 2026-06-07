"use client";

import React, { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import styles from "./Contact.module.css";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className={`${styles.contact} bg-white`}>
      <div className="container">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="section-header">
            <span className="section-subtitle">Fale Conosco</span>
            <h2 className="section-title">Solicite um Orçamento</h2>
            <p className="section-description">
              Estamos prontos para atender o seu projeto de engenharia com qualidade e agilidade. Entre em contato preenchendo o formulário ou através de nossos canais diretos.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {/* Info Panel */}
          <ScrollReveal animation="fade-left">
            <div className={styles.infoColumn}>
              <h3 className={styles.infoTitle}>Informações de Contato</h3>
              <p className={styles.infoText}>
                Estamos empolgados em ter a oportunidade de colaborar com sua empresa. Preencha o formulário e nossa equipe técnica entrará em contato em menos de 24 horas úteis.
              </p>

              <div className={styles.contactList}>
                <div className={styles.contactCard}>
                  <div className={styles.iconWrapper}>
                    <Phone size={20} />
                  </div>
                  <div className={styles.cardDetails}>
                    <span className={styles.cardLabel}>Atendimento Telefônico</span>
                    <span className={styles.cardValue}>(38) 9 9188-7211</span>
                    <span className={styles.cardValue}>(38) 9 8421-7668</span>
                  </div>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.iconWrapper}>
                    <Mail size={20} />
                  </div>
                  <div className={styles.cardDetails}>
                    <span className={styles.cardLabel}>E-mail Oficial</span>
                    <span className={styles.cardValue}>lybraservicos@gmail.com</span>
                  </div>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.iconWrapper}>
                    <Instagram size={20} />
                  </div>
                  <div className={styles.cardDetails}>
                    <span className={styles.cardLabel}>Instagram</span>
                    <a
                      href="https://www.instagram.com/lybraempreendimentos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardValue}
                      style={{ textDecoration: "underline" }}
                    >
                      @lybraempreendimentos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal animation="fade-right">
            <div className={styles.formCard}>
              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <p>Mensagem enviada com sucesso! Obrigado pelo contato, nossa equipe retornará em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">Nome Completo *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ex: João Silva"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Ex: joao@empresa.com.br"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="phone">Telefone / WhatsApp *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Ex: (38) 99999-9999"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="company">Empresa (Opcional)</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Ex: Construtora Lybra"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="message">Mensagem / Escopo da Obra *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Descreva brevemente o escopo dos serviços ou o projeto que deseja realizar."
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Enviar Solicitação
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
