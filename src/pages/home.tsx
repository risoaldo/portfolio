import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import me from "@/assets/me.jpeg";
import React from "react";
import Markdown from "react-markdown";
import ResumeCardStepper from "@/components/resume-card-stepper";
import { ResumeCard } from "@/components/resume-card";

const BLUR_FADE_DELAY = 0.04;
const DESCTIPTION =
  "Criador de experiências web com foco em performance e usabilidade. Entusiasta de novas ideias e desafios.";

const ABOUT =
  "Desenvolvedor front-end com mais de 3 anos e meio de experiência, especializado em React.js e TypeScript. Pós-graduado em UX/UI, com foco na criação de interfaces responsivas e centradas no usuário Domínio de HTML, CSS, JavaScript e integração com APIs. Conhecimentos adicionais em Node.js, Spring Boot e Java.";

const EDUCATION = [
  {
    school: "Faculdade Vale do Salgado",
    href: "https://univs.edu.br/",
    degree: "Análise e Desenvolvimento de Sistemas",
    logoUrl: "https://univs.edu.br/wp-content/themes/portalv1.0/imagens/logo-icon.ico",
    start: "2015",
    end: "2017",
  },

  {
    school: "Faculdade Unyleya",
    href: "https://unyleya.edu.br/",
    degree: "Pós Graduação em UX/UI",
    logoUrl: "https://cdn-static-mkt.unyleya.com.br/unyleyaNew/logo_uny_colorida_min.webp",
    start: "2022",
    end: "2024",
  },
];
export const Home: React.FC = () => {
  return (
    <div className='min-h-screen bg-background font-mono antialiased max-w-2xl mx-auto py-12 sm:py-24 p-6"'>
      <main className="flex flex-col min-h-[100dvh] space-y-10 p-3">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-center">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-2xl font-bold tracking-tighter sm:text-2xl xl:text-4xl/none"
                  yOffset={8}
                  text={`<Risoaldo Nóbrega/>`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DESCTIPTION}
                />
              </div>
              <div className="flex justify-center items-center">
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <Avatar className="size-32 border">
                    <AvatarImage alt={"Imae perfil github"} src={me} />
                    <AvatarFallback>{"RN"}</AvatarFallback>
                  </Avatar>
                </BlurFade>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">Sobre</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown>{ABOUT}</Markdown>
          </BlurFade>
        </section>

        {/* <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Experiências de Trabalho</h2>
            </BlurFade>
            {works.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section> */}

        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <ResumeCardStepper />
          </div>
        </section>

        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Formação</h2>
            </BlurFade>
            {EDUCATION.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
