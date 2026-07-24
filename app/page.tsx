"use client";

import { useEffect, useRef } from "react";
import { HexagonBackground } from "@/components/animate-ui/components/backgrounds/hexagon";
import { SpotlightNavbar } from "@/components/ui/spotlight-navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Reveal } from "@/components/ui/reveal";
import { MorphText } from "@/components/ui/morph-text";
import TiltedCard from "@/components/TiltedCard";
import { AvatarGroup, AvatarGroupTooltip } from "@/components/animate-ui/components/animate/avatar-group";
import { AnimatedFooter } from "@/components/ui/animated-footer";
import { FlipCard } from "@/components/animate-ui/components/community/flip-card";
import { HardSkillsList } from "@/components/animate-ui/components/community/notification-list";
import { ScrollTimeline } from "@/components/lightswind/scroll-timeline";
import HoverRevealCard from "@/components/HoverRevealCard";
import { Trophy, Star } from "lucide-react";
import { FlipButton, FlipButtonFront, FlipButtonBack } from "@/components/animate-ui/components/buttons/flip";
import { SiFigma, SiHtml5, SiCss, SiJavascript, SiTailwindcss, SiMysql, SiPhp, SiLaravel, SiReact, SiNextdotjs, SiTypescript } from "react-icons/si";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  const hardSkills = [
    { id: 1, title: 'Web Development' },
    { id: 2, title: 'UI/UX Design' },
    { id: 3, title: 'RESTful API Development' },
    { id: 4, title: 'Database Management' }
  ];

  return (
    <div className="relative min-h-screen bg-neutral-100 dark:bg-neutral-900 font-sans">
      <ScrollProgress />
      <div className="fixed top-0 left-0 right-0 z-50">
        <SpotlightNavbar />
      </div>

      {/* Hero Section */}
      <div className="h-screen w-full relative" id="home">
        <div className="absolute inset-0 size-full">
          <HexagonBackground
            hexagonSize={60}
            hexagonMargin={4}
            className="flex h-full items-center justify-center pt-24"
          >
            <div className="z-10 flex flex-col items-center justify-center px-4 text-center w-full max-w-[100vw] overflow-hidden">
              <div data-scroll data-scroll-speed="0.2" className="w-full">
                <MorphText
                  words={["WEB DEVELOPER", "UI/UX DESIGNER"]}
                  subtext="Welcome to the future of UI design"
                  className="mb-8 mt-12 w-full"
                  fontSize="clamp(1.5rem, 8vw, 6rem)"
                />
              </div>
            </div>
          </HexagonBackground>
        </div>
      </div>

      {/* Sections Container */}
      <div className="relative z-10 bg-white dark:bg-[#0a0a0a] w-full px-6 md:px-[20%] lg:px-[20%] py-24 flex flex-col gap-40 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.5)]">
        
        {/* About & Skills Section */}
        <section id="about" className="min-h-[70vh] flex flex-col md:flex-row items-center gap-16 scroll-mt-40">
          {/* Left: About Me */}
          <Reveal direction="right" className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <div className="mb-10">
              <TiltedCard
                imageSrc="/foto-profil.jpg"
                altText="Coding workspace"
                captionText="Me"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text bg-black/30 text-white p-2 rounded-md font-semibold">
                    E. Al Aisyal Nurzurvaran
                  </p>
                }
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white tracking-tight">About Me</h2>
            <div className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed text-center md:text-left">
              <p className="mb-6">
                I am a passionate Web Developer and UI/UX Designer dedicated to creating beautiful, 
                functional, and user-centered digital experiences.
              </p>
              <p>
                With a strong eye for design and expertise in modern web technologies, I bridge the gap 
                between aesthetics and performance.
              </p>
            </div>
          </Reveal>

          {/* Right: Skills with AvatarGroup */}
          <Reveal direction="left" delay={120} className="w-full md:w-1/2 flex flex-col items-center justify-center h-full gap-10">
            <h2 className="text-2xl md:text-2xl font-bold dark:text-white tracking-tight text-center m-0">My Technical Skills</h2>
            
            <div className="flex items-center justify-center scale-[1.5] origin-center">
              <AvatarGroup>
                {[
                  { name: "Figma", Icon: SiFigma, bg: "#F24E1E", color: "text-white" },
                  { name: "HTML", Icon: SiHtml5, bg: "#E34F26", color: "text-white" },
                  { name: "CSS", Icon: SiCss, bg: "#1572B6", color: "text-white" },
                  { name: "JavaScript", Icon: SiJavascript, bg: "#F7DF1E", color: "text-black" },
                  { name: "Typescript", Icon: SiTypescript, bg: "#3178C6", color: "text-white" },
                  { name: "Tailwind", Icon: SiTailwindcss, bg: "#06B6D4", color: "text-white" },
                  { name: "MySQL", Icon: SiMysql, bg: "#4479A1", color: "text-white" },
                  { name: "PHP", Icon: SiPhp, bg: "#777BB4", color: "text-white" },
                  { name: "Laravel", Icon: SiLaravel, bg: "#FF2D20", color: "text-white" },
                  { name: "React", Icon: SiReact, bg: "#20232a", color: "text-[#61DAFB]" },
                  { name: "Next.js", Icon: SiNextdotjs, bg: "black", color: "text-white dark:bg-white dark:text-black" }
                ].map((skill, idx) => (
                  <div 
                    key={idx} 
                    className={`h-8 md:h-10 w-8 md:w-10 rounded-full flex items-center justify-center font-bold border-2 border-white dark:border-neutral-900 shadow-md relative ${skill.color}`}
                    style={{ backgroundColor: skill.bg }}
                  >
                    <skill.Icon className="text-lg md:text-xl" />
                    <AvatarGroupTooltip>{skill.name}</AvatarGroupTooltip>
                  </div>
                ))}
              </AvatarGroup>
            </div>

            <div className="flex justify-center w-full">
              <HardSkillsList skills={hardSkills} />
            </div>
          </Reveal>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen relative flex flex-col-reverse md:flex-row items-start gap-12 scroll-mt-24">
          {/* Left Side: Scrolling */}
          <div className="w-full md:w-1/2 flex flex-col gap-32 py-12 items-center">
            <Reveal className="w-fit">
              <FlipCard data={{
                title: "Project Alpha",
                image: "https://images.unsplash.com/photo-1557821552-17105153ce67?auto=format&fit=crop&w=800&q=80",
                link: "alpha.example.com",
                description: "A comprehensive e-commerce platform built with Next.js and Stripe. Features include user authentication, a shopping cart, and seamless checkout.",
                createdDuration: "2023",
                websiteUrl: "https://example.com",
                githubUrl: "https://github.com/example"
              }} />
            </Reveal>

            <Reveal className="w-fit" delay={80}>
              <FlipCard data={{
                title: "Project Beta",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                link: "beta.example.com",
                description: "A mobile-first dashboard for managing cryptocurrency portfolios. Real-time data visualization using WebSockets and Chart.js.",
                createdDuration: "6 months ago",
                websiteUrl: "https://example.com"
              }} />
            </Reveal>

            <Reveal className="w-fit" delay={160}>
              <FlipCard data={{
                title: "Project Gamma",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                link: "gamma.example.com",
                description: "An AI-powered writing assistant using OpenAI's GPT-4. Helps users generate marketing copy, blog posts, and emails instantly.",
                createdDuration: "Just recently",
                githubUrl: "https://github.com/example"
              }} />
            </Reveal>
          </div>
          
          {/* Right Side: Sticky */}
          <div className="w-full md:w-1/2 md:sticky top-32 h-[70vh] rounded-[2rem] flex flex-col items-center justify-center p-8 overflow-hidden">
             
             <h2 className="text-5xl md:text-6xl font-bold mb-6 dark:text-white tracking-tight text-center z-10">Tech<br/>Stack</h2>
             <p className="text-neutral-500 text-center max-w-sm z-10">Scroll through the left column to explore my recent work and open source contributions.</p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="flex flex-col justify-center items-center scroll-mt-24 pt-16">
          <ScrollTimeline
            title="Experience"
            subtitle="My professional journey"
            events={[
              {
                id: "exp1",
                year: "January 2024 - June 2024",
                title: "Internship Accuntant",
                subtitle: "Dinas Pendidikan Riau",
                description: "Perform financial data processing and data entry, and assist with administrative tasks.",
              },
              {
                id: "exp2",
                year: "Mei 2025 - April 2026",
                title: "Web Developer",
                subtitle: "Neofitness",
                description: "Developing and managing websites and databases to enhance performance and user experience.",
              },
              {
                id: "exp3",
                year: "Mei 2025 - Present",
                title: "Web Developer",
                subtitle: "PT. Yogura Tekindo",
                description: "Developed and maintained interactive user interfaces for various client projects using React and Tailwind CSS.",
              }
            ]}
            cardAlignment="alternating"
            animationOrder="staggered"
            revealAnimation="fade"
            cardVariant="elevated"
            cardEffect="shadow"
          />
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="min-h-[50vh] flex flex-col justify-center items-center scroll-mt-24" data-scroll data-scroll-speed="0.1">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 dark:text-white tracking-tight">Achievements</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl w-full">
            <Reveal className="w-fit">
              <HoverRevealCard 
                icon={Trophy}
                title="1st Place UI/UX Competition"
                subtitle="2023"
                description="1st Place UI/UX Competition as a team, organized by Politeknik Caltex Riau"
                link="https://www.figma.com/design/ucvT0kRbu8Jh4muITWXsxp/Wisataku?node-id=662-149&p=f&t=Fg83T0w5Pm68yleb-0"
              />
            </Reveal>
            <Reveal className="w-fit" delay={120}>
              <HoverRevealCard 
                icon={Star}
                title="Finalis UI/UX Competition"
                subtitle="2024"
                description="Finalis UI/UX Competition as a team, organized by Politeknik Caltex Riau"
                link="https://www.figma.com/design/4MDif4Zh8pkWRg6iW8KDR7/SkillSync?node-id=0-1&p=f&t=nBklreEo2wFej8If-0"
              />
            </Reveal>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-[40vh] flex flex-col justify-center items-center pb-20 scroll-mt-24" data-scroll data-scroll-speed="0.1">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 dark:text-white tracking-tight text-center">Get In Touch</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 text-center max-w-xl leading-relaxed text-pretty">
              Currently open for new opportunities and exciting projects. Let&apos;s build something amazing together!
            </p>
          </Reveal>
          
          <div className="flex flex-col items-center gap-8">
            <a href="mailto:hello@example.com">
              <FlipButton variant="default" size="lg" className="rounded-full px-12 py-6 text-lg font-semibold">
                <FlipButtonFront>Say Hello</FlipButtonFront>
                <FlipButtonBack>Send an Email</FlipButtonBack>
              </FlipButton>
            </a>

            <div className="flex items-center gap-4 mt-6 [&>a]:transition-transform [&>a]:duration-300 [&>a:hover]:-translate-y-1">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FlipButton variant="outline" size="icon" className="rounded-full w-12 h-12">
                  <FlipButtonFront>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  </FlipButtonFront>
                  <FlipButtonBack>
                    <span className="text-xs">GH</span>
                  </FlipButtonBack>
                </FlipButton>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FlipButton variant="outline" size="icon" className="rounded-full w-12 h-12">
                  <FlipButtonFront>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </FlipButtonFront>
                  <FlipButtonBack>
                    <span className="text-xs">IG</span>
                  </FlipButtonBack>
                </FlipButton>
              </a>

              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FlipButton variant="outline" size="icon" className="rounded-full w-12 h-12">
                  <FlipButtonFront>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                  </FlipButtonFront>
                  <FlipButtonBack>
                    <span className="text-xs">YT</span>
                  </FlipButtonBack>
                </FlipButton>
              </a>

              <a href="mailto:hello@example.com">
                <FlipButton variant="outline" size="icon" className="rounded-full w-12 h-12">
                  <FlipButtonFront>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </FlipButtonFront>
                  <FlipButtonBack>
                    <span className="text-xs">Mail</span>
                  </FlipButtonBack>
                </FlipButton>
              </a>

              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
                <FlipButton variant="outline" size="icon" className="rounded-full w-12 h-12">
                  <FlipButtonFront>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  </FlipButtonFront>
                  <FlipButtonBack>
                    <span className="text-xs">WA</span>
                  </FlipButtonBack>
                </FlipButton>
              </a>
            </div>
          </div>
        </section>

      </div>
      
      {/* Animated Footer */}
      <div className="h-[100vh] w-full relative bg-black">
        <AnimatedFooter 
        headingLines={["Simple"]} background="#000000"
        textColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
