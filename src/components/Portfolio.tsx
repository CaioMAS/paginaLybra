"use client";

import React, { useState } from "react";
import { MapPin, Compass, Ruler, Hammer } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import styles from "./Portfolio.module.css";

interface Project {
  title: string;
  location: string;
  status: "CONCLUÍDO" | "EM ANDAMENTO";
  desc: string;
  services: string[];
}

export default function Portfolio() {
  const [filter, setFilter] = useState<"ALL" | "CONCLUÍDO" | "EM ANDAMENTO">("ALL");

  const projects: Project[] = [
    {
      title: "Reforma e Ampliação - Laser Center",
      location: "Montes Claros - MG",
      status: "CONCLUÍDO",
      desc: "Reforma completa e ampliação de consultórios médicos de clínica oftalmológica, seguindo rigorosamente as normas sanitárias vigentes (RDC 50 da Anvisa).",
      services: ["Instalações hidráulicas", "Instalações elétricas", "Porcelanato", "Piso Vinílico", "Sinalização de emergência", "Cobertura ecológica", "Rede estruturada"]
    },
    {
      title: "Reforma e Ampliação - Clínica Oftalmológica",
      location: "Januária - MG",
      status: "CONCLUÍDO",
      desc: "Adequação civil e estrutural de salas de exames e consultórios médicos, atendendo a todos os requisitos de segurança e assepsia clínica.",
      services: ["Instalações hidráulicas", "Instalações elétricas", "Revestimentos cerâmicos", "Pintura hospitalar"]
    },
    {
      title: "Infraestrutura Elétrica - Mercado Municipal",
      location: "Montes Claros - MG",
      status: "CONCLUÍDO",
      desc: "Manutenção e implantação de infraestrutura elétrica primária em altura, realizada com suporte de plataformas aéreas de trabalho (PTA) conforme a NR 35.",
      services: ["Infraestrutura elétrica em altura", "NR 35", "Manutenção preventiva"]
    },
    {
      title: "Construção de Depósito Subterrâneo - Eurofarma",
      location: "Montes Claros - MG",
      status: "CONCLUÍDO",
      desc: "Construção de depósito subterrâneo de insumos industriais com serviços de escavação, sapatas corridas, e muros de contenção reforçados.",
      services: ["Escavação", "Regularização de valas", "Sapatas corridas", "Muro de concreto armado", "Radier"]
    },
    {
      title: "Abrigo de Gás Industrial - Eurofarma",
      location: "Montes Claros - MG",
      status: "CONCLUÍDO",
      desc: "Execução completa de abrigo de gás com alvenaria de bloco estrutural, reboco impermeável, radier de suporte e laje de concreto armado protendido.",
      services: ["Alvenaria estrutural", "Reboco em argamassa", "Radier", "Laje de concreto armado"]
    },
    {
      title: "Reforma e Ampliação - UBS Minas",
      location: "Minas Gerais",
      status: "CONCLUÍDO",
      desc: "Reforma integral de Unidade Básica de Saúde, utilizando sistemas construtivos modernos de Steel Frame e estruturas metálicas para maior rapidez.",
      services: ["Steel Frame", "Estrutura metálica", "Instalações hidráulicas/elétricas", "Revestimento cerâmico", "SPDA (para-raios)", "Rede estruturada"]
    },
    {
      title: "Instalações Subterrâneas (Underground) - Eurofarma",
      location: "Montes Claros - MG",
      status: "EM ANDAMENTO",
      desc: "Implantação e adequação de linhas de tubulações subterrâneas industriais para esgoto, água potável e efluentes industriais com tecnologia PEAD.",
      services: ["Lançamento de tubulação", "Solda PEAD por termofusão", "Solda por eletrofusão", "Compactação mecanizada", "Reposição de Paver", "Linha de vida"]
    },
    {
      title: "Ponto de Apoio UBS Padrão Rural",
      location: "Zona Rural de Januária - MG",
      status: "CONCLUÍDO",
      desc: "Construção civil de ponto de atendimento médico em área rural, provendo infraestrutura essencial de saúde para a comunidade.",
      services: ["Alvenaria de vedação", "Reboco", "Concretagem", "Formas e Armação"]
    },
    {
      title: "Instalação Luminotécnica - Casa Alto Padrão",
      location: "Montes Claros - MG",
      status: "CONCLUÍDO",
      desc: "Instalação elétrica de alta precisão e montagem de lustres e sistemas decorativos integrados em residência de alto padrão.",
      services: ["Instalação luminotécnica", "Montagem de lustres", "Ajuste de pontos decorativos", "Automação básica"]
    },
    {
      title: "Reparo de Drenagem Pluvial - Laboratório Cristália",
      location: "Montes Claros - MG",
      status: "EM ANDAMENTO",
      desc: "Manutenção do sistema de drenagem e águas pluviais, além do aterramento físico de eletrocalhas metálicas e redes em salas limpas industriais.",
      services: ["Drenagem pluvial", "Aterramento de eletrocalhas", "Pontos de dados P1000", "Sala limpa"]
    },
    {
      title: "Drenagem Pluvial de Grande Porte - Novo Nordisk",
      location: "Montes Claros - MG",
      status: "CONCLUÍDO",
      desc: "Execução de complexo pluvial industrial com assentamento de tubos PEAD de 500mm, bocas de lobo, postos de visita e caixas dissipadoras.",
      services: ["Tubos PEAD 500", "Postos de Visita (PV)", "Bocas de Lobo (BL)", "Caixa dissipadora pluvial", "Canaletas"]
    },
    {
      title: "Infraestrutura Elétrica Subterrânea - Novo Nordisk",
      location: "Montes Claros - MG",
      status: "CONCLUÍDO",
      desc: "Passagem de linhas de alimentação elétrica industrial com escavação manual, tubulação de proteção Canaflex e envelopamento de segurança.",
      services: ["Escavação de valas", "Dutos Canaflex", "Envelopamento de rede", "Bases de concreto", "Reassentamento de paver"]
    },
    {
      title: "Estruturação de Alambrado - Acelen Renewables",
      location: "Acelen Renewables",
      status: "EM ANDAMENTO",
      desc: "Montagem física de alambrado perimetral de segurança com nivelamento de postes, fixação em blocos de concreto e esticamento de tela metálica.",
      services: ["Postes metálicos", "Nivelamento e prumo", "Concretagem de bases", "Tela de proteção", "Pintura"]
    },
    {
      title: "Acabamentos e Revestimentos Especiais - Acelen",
      location: "Acelen Renewables",
      status: "EM ANDAMENTO",
      desc: "Trabalhos de revestimento interior em edificações industriais, incluindo remoção de epóxi anterior, impermeabilização e instalação de forro PVC.",
      services: ["Assentamento de porcelanato", "Rodapé PVC", "Impermeabilização", "Soleiras", "Forro PVC estruturado"]
    }
  ];

  const filteredProjects = projects.filter(
    (p) => filter === "ALL" || p.status === filter
  );

  return (
    <section id="portfolio" className={`${styles.portfolio} bg-light-blue`}>
      <div className="container">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="section-header">
            <span className="section-subtitle">Nosso Portfólio</span>
            <h2 className="section-title">Obras Realizadas e Em Andamento</h2>
            <p className="section-description">
              Demonstração de nosso compromisso técnico por meio de obras industriais, urbanas e comerciais entregues com total conformidade e rigor de engenharia.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Controls */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className={styles.filterBar}>
            <button
              onClick={() => setFilter("ALL")}
              className={`${styles.filterBtn} ${filter === "ALL" ? styles.filterBtnActive : ""}`}
            >
              Todos os Projetos ({projects.length})
            </button>
            <button
              onClick={() => setFilter("CONCLUÍDO")}
              className={`${styles.filterBtn} ${filter === "CONCLUÍDO" ? styles.filterBtnActive : ""}`}
            >
              Concluídos ({projects.filter((p) => p.status === "CONCLUÍDO").length})
            </button>
            <button
              onClick={() => setFilter("EM ANDAMENTO")}
              className={`${styles.filterBtn} ${filter === "EM ANDAMENTO" ? styles.filterBtnActive : ""}`}
            >
              Em Andamento ({projects.filter((p) => p.status === "EM ANDAMENTO").length})
            </button>
          </div>
        </ScrollReveal>

        {/* Grid Loop */}
        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={index}
              animation="fade-up"
              delay={((index % 3) + 1) * 100}
            >
              <div className={styles.card}>
                {/* Blueprint graphic header */}
                <div className={styles.imagePlaceholder}>
                  <span
                    className={`${styles.statusBadge} ${
                      project.status === "CONCLUÍDO"
                        ? styles.statusCompleted
                        : styles.statusInProgress
                    }`}
                  >
                    {project.status.toLowerCase()}
                  </span>
                  
                  {/* Alternating schematic icons to look premium */}
                  {index % 3 === 0 ? (
                    <Compass size={40} className={styles.placeholderIcon} />
                  ) : index % 3 === 1 ? (
                    <Ruler size={40} className={styles.placeholderIcon} />
                  ) : (
                    <Hammer size={40} className={styles.placeholderIcon} />
                  )}
                  <span className={styles.placeholderText}>Esboço de Projeto / Planta</span>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.projectLocation}>
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.desc}</p>

                  <div className={styles.pillsContainer}>
                    {project.services.slice(0, 4).map((service, sIdx) => (
                      <span key={sIdx} className={styles.pill}>
                        {service}
                      </span>
                    ))}
                    {project.services.length > 4 && (
                      <span className={styles.pill}>
                        +{project.services.length - 4} mais
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
