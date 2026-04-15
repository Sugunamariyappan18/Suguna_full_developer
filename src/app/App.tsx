import { PageLoader } from './components/PageLoader';
import { ScrollProgress } from './components/ScrollProgress';
import { ParticlesBackground } from './components/ParticlesBackground';
import { CursorAnimation } from './components/CursorAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { FreelancerAvailability } from './components/FreelancerAvailability';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 text-white">
      {/* Loading Screen */}
      <PageLoader />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Animated Particles Background */}
      <ParticlesBackground />
      
      {/* Custom Cursor Animation */}
      <CursorAnimation />

      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <FreelancerAvailability />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
