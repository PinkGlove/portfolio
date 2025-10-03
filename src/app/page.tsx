import Sidebar from '@/components/layout/Sidebar';
import MainContent from '@/components/layout/MainContent';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <MainContent>
        <About />
        <Experience />
        <Projects />
      </MainContent>
    </div>
  );
}