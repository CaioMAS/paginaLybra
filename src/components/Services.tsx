"use client";

import React from "react";
import {
  HardHat,
  Zap,
  Network,
  Truck,
  Paintbrush,
  Layers,
  Wrench,
  Construction,
  ShieldAlert,
  Lightbulb,
  Building
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import styles from "./Services.module.css";

export default function Services() {
  const serviceCategories = [
    {
      title: "Construção Civil & Estruturas",
      icon: <Building size={22} className={styles.categoryTitleIcon} />,
      items: [
        {
          title: "Estruturas de Concreto Armado",
          desc: "Execução de fundações profundas, sapatas corridas, blocos, muros de arrimo, radiers e vigas de concreto armado com alta resistência.",
          icon: <Construction size={24} />
        },
        {
          title: "Alvenaria Estrutural e de Vedação",
          desc: "Erguimento de galpões comerciais/industriais e instalações com vedação profissional e estrutural de alta solidez.",
          icon: <HardHat size={24} />
        },
        {
          title: "Estruturas e Revestimentos em Drywall",
          desc: "Divisórias, tetos e revestimentos acústicos e térmicos em drywall para escritórios, áreas administrativas e operacionais.",
          icon: <Layers size={24} />
        }
      ]
    },
    {
      title: "Instalações & Infraestrutura Técnica",
      icon: <Zap size={22} className={styles.categoryTitleIcon} />,
      items: [
        {
          title: "Instalações Elétricas Industriais",
          desc: "Montagem, manutenção e adequação de redes elétricas de baixa e alta tensão em plantas industriais e comerciais.",
          icon: <Zap size={24} />
        },
        {
          title: "Instalações Hidrossanitárias",
          desc: "Dimensionamento e execução de tubulações subterrâneas (underground) de esgoto, água industrial e sistemas de drenagem pluvial.",
          icon: <Wrench size={24} />
        },
        {
          title: "Cabeamento Estruturado",
          desc: "Instalação de redes de alta velocidade, fibra óptica, rack de dados e cabeamento estruturado para comunicações corporativas.",
          icon: <Network size={24} />
        },
        {
          title: "Estruturas de CFTV",
          desc: "Projetos e instalação de câmeras, sistemas de monitoramento e infraestrutura de segurança para pátios industriais e galpões.",
          icon: <ShieldAlert size={24} />
        },
        {
          title: "Iluminação Geral e Decorativa",
          desc: "Soluções luminotécnicas eficientes e sistemas decorativos para ambientes industriais, comerciais e residenciais de alto padrão.",
          icon: <Lightbulb size={24} />
        }
      ]
    },
    {
      title: "Serviços Mecanizados & Especiais",
      icon: <Truck size={22} className={styles.categoryTitleIcon} />,
      items: [
        {
          title: "Locação de Máquinas",
          desc: "Disponibilização de frotas e equipamentos modernos para terraplenagem, movimentação de solo e obras civis/industriais.",
          icon: <Truck size={24} />
        },
        {
          title: "Serviços Mecanizados de Produtividade",
          desc: "Compactação, escavação e soldagem plástica PEAD por termofusão e eletrofusão de alta produtividade.",
          icon: <Construction size={24} />
        },
        {
          title: "Pinturas Industriais de Proteção",
          desc: "Pintura epóxi de pisos e estruturas, proteção anticorrosiva para metais e demarcação de segurança operacional.",
          icon: <Paintbrush size={24} />
        }
      ]
    }
  ];

  return (
    <section id="services" className={`${styles.services} bg-white`}>
      <div className="container">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="section-header">
            <span className="section-subtitle">Nossos Serviços</span>
            <h2 className="section-title">Especialidades em Engenharia</h2>
            <p className="section-description">
              Oferecemos soluções completas e multidisciplinares de engenharia para atender às demandas mais rigorosas do mercado industrial e corporativo.
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Loop */}
        {serviceCategories.map((cat, catIdx) => (
          <div key={catIdx} className={styles.categoryGroup}>
            <ScrollReveal animation="fade-up">
              <h3 className={styles.categoryTitle}>
                {cat.icon}
                {cat.title}
              </h3>
            </ScrollReveal>
            <div className={styles.grid}>
              {cat.items.map((item, itemIdx) => (
                <ScrollReveal
                  key={itemIdx}
                  animation="fade-up"
                  delay={(itemIdx + 1) * 100}
                >
                  <div className={styles.card}>
                    <div className={styles.iconWrapper}>{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
