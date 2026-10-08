import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Backdrop from './components/Background/Backdrop';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Achievements from './components/Achievements/Achievements';
import Profiles from './components/Profiles/Profiles';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const LOADER_DURATION = 2600; // ms for 0 → 100
const LOADER_HOLD = 500; // hold at 100% so user SEES 100% before exit

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Preload hero photo so loader emblem never flashes / pops in late.
    const img = new Image();
    img.src = 'images/me.png';

    // Single source of truth: time-based ease-out progress.
    // Guarantees bar ALWAYS hits exactly 100, then holds, THEN dismisses.
    // Old bug: dismiss timers were independent of the visual % (exited at ~39%).
    const start = Date.now();
    const tick = window.setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / LOADER_DURATION);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic: fast start, soft landing
      const value = Math.floor(eased * 100);
      setProgress(value);
      if (t >= 1) {
        window.clearInterval(tick);
        window.setTimeout(() => setLoading(false), LOADER_HOLD);
      }
    }, 50);

    // Fail-safe only — never fires in normal flow.
    const failSafe = window.setTimeout(() => {
      setProgress(100);
      setLoading(false);
    }, 8000);

    return () => {
      window.clearInterval(tick);
      window.clearTimeout(failSafe);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <AnimatePresence>{loading && <Loader key="loader" progress={progress} />}</AnimatePresence>
      <Backdrop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Services />
        <Projects />
        <Certifications />
        <Achievements />
        <Profiles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
