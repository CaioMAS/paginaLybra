"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close the popover if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const contacts = [
    {
      name: "Engenharia & Obras",
      role: "Fale com o Engenheiro",
      phone: "5538991887211",
      display: "(38) 9 9188-7211",
    },
    {
      name: "Comercial & Orçamentos",
      role: "Orçamentos de Serviços",
      phone: "5538984217668",
      display: "(38) 9 8421-7668",
    },
  ];

  return (
    <div ref={containerRef} className={styles.whatsappContainer}>
      {/* Popover Card */}
      <div className={`${styles.popover} ${isOpen ? styles.popoverActive : ""}`}>
        <div className={styles.popoverHeader}>
          <h4>Atendimento Lybra</h4>
          <p>Como podemos ajudar você hoje?</p>
        </div>
        <div className={styles.popoverBody}>
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={`https://wa.me/${contact.phone}?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento+com+a+Lybra+Constru%C3%A7%C3%B5es.`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
              onClick={() => setIsOpen(false)}
            >
              <div className={styles.contactIcon}>
                <MessageCircle size={20} fill="#25d366" color="#25d366" />
              </div>
              <div className={styles.contactInfo}>
                <span className={styles.contactName}>{contact.name}</span>
                <span className={styles.contactRole}>{contact.role}</span>
                <span className={styles.contactNumber}>{contact.display}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.triggerButton}
        aria-label="Abrir contatos do WhatsApp"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={26} />
        ) : (
          <>
            <MessageCircle size={30} fill="white" color="#25d366" />
            <span className={styles.badge}>2</span>
          </>
        )}
      </button>
    </div>
  );
}
