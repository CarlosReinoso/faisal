import "../styles/hero.css";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactUsSection from "@/components/ContactUsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      {/* <ContactUsSection /> */}
    </main>
  );
}
