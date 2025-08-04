import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowRight, Badge } from "lucide-react";
import BlurFade from "./magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const works = [
  {
    company: "Sebrae ",
    href: "https://sebrae.com.br/sites/PortalSebrae",
    badges: [],
    location: "Remote",
    title: "Desenvolvedor Front End",
    logoUrl: "",
    start: "Outubro 2021",
    end: "Julho 2025",
    description:
      "Atuação no desenvolvimento de sistemas para o Sebrae Nacional, instituição referência no apoio a micro e pequenas empresas no Brasil. Atuando principalmente no projeto Empretec, um programa de formação de empreendedores, criado pela ONU e implementado no Brasil pelo Sebrae. ",
  },
  {
    company: "Visyon Digital ",
    badges: [],
    href: "",
    location: "Presencial",
    title: "Design/Social Media",
    logoUrl: "",
    start: "Fevereiro 2018",
    end: "Maio 2020",
    description:
      "A Visyon Digital é uma agência de Marketing Digital que contribui com empresas de diversas partes do Brasil a se comunicar com os seus clientes de uma forma atrativa através das redes sociais.",
  },
  {
    company: "AGCOM Tecnologia e Automação ",
    badges: [],
    href: "",
    location: "Presencial",
    title: "Programador Web Front-End",
    logoUrl: "",
    start: "Fevereiro 2019",
    end: "Maio 2019",
    description:
      "Empresa cujo o objetivo é desenvolver sistemas sob encomenda, licenciamento de softwares customizáveis, suporte técnico e etc.",
  },
];

const ResumeCardStepper: React.FC = () => {
  const [filter, setFilter] = React.useState<string>("All");
  const [search, setSearch] = React.useState<string>("");

  const filterOptions = ["All", "Remote", "Presencial"];

  const filtered = React.useMemo(() => {
    return works
      .filter((w) => {
        if (
          filter !== "All" &&
          w.location.toLowerCase() !== filter.toLowerCase()
        )
          return false;
        if (search) {
          const low = search.toLowerCase();
          return (
            w.company.toLowerCase().includes(low) ||
            w.title.toLowerCase().includes(low) ||
            w.description.toLowerCase().includes(low)
          );
        }
        return true;
      })
      .sort((a, b) => {
        // Ordena pela data de início mais recente (simples: baseado em string, melhorar se quiser parse)
        return a.start < b.start ? 1 : -1;
      });
  }, [filter, search]);

  return (
    <div className="flex min-h-0 flex-col gap-y-3">
      {/* Cabeçalho com filtros */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Experiências de Trabalho</h2>
        </BlurFade>

        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            {filterOptions.map((f) => (
              <Button
                key={f}
                size="sm"
                variant={filter === f ? "default" : "outline"}
                onClick={() => setFilter(f)}
                className="rounded-full"
              >
                {f}
              </Button>
            ))}
          </div>
          <Input
            placeholder="Buscar por palavra..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-64"
          />
        </div>
      </div>

      {/* Linha do tempo vertical */}
      <div className="relative before:content-[''] before:absolute before:top-4 before:bottom-0 before:left-4 before:w-1 before:bg-gradient-to-b before:from-gray-900 before:to-gray-400">
        {filtered.map((work, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative pl-12 mb-8"
          >
            <div className="absolute left-0 top-2">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-900 flex items-center justify-center shadow">
                <div className="w-3 h-3 rounded-full bg-gray-900" />
              </div>
            </div>
            <Card className="shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-transform">
              <CardHeader className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {work.logoUrl ? (
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                        <img
                          src={work.logoUrl}
                          alt={`${work.company} logo`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-gray-900 to-gray-900 flex items-center justify-center text-white font-semibold">
                        {work.company[0]}
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">{work.title}</h3>
                      <span className="text-sm text-muted-foreground">
                        {work.location}
                      </span>
                    </div>
                    <a
                      href={work.href || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 hover:underline text-sm font-medium"
                    >
                      {work.company} <ArrowRight size={14} />
                    </a>
                    <div className="flex flex-wrap gap-1">
                      {work.badges.map((b, i) => (
                        <Badge key={i} className="text-xs">
                          {b}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-xs uppercase tracking-wide text-zinc-500">
                      {work.start} - {work.end}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{work.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div className="pl-12">
            <Card>
              <CardContent>
                <p className="text-center text-sm text-muted-foreground">
                  Nenhuma experiência corresponde aos filtros ou busca.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeCardStepper;
