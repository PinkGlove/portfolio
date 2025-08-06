import Sidebar from '@/components/layout/Sidebar';
import MainContent from '@/components/layout/MainContent';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <MainContent>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </MainContent>
    </div>
  );
}