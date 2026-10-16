import { useCallback, useEffect } from 'react';
import startEngine from './engine/engine.js';
import Loader from './components/Loader.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import SceneCanvas from './components/SceneCanvas.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Dialogs from './components/Dialogs.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import WordScene from './components/WordScene.jsx';
import Skills from './components/Skills.jsx';
import Puzzle from './components/Puzzle.jsx';
import Gallery from './components/Gallery.jsx';
import Lab from './components/Lab.jsx';
import Marquees from './components/Marquees.jsx';
import PageFlip from './components/PageFlip.jsx';
import SkillsUniverse from './components/SkillsUniverse.jsx';
import ProjectBelt from './components/ProjectBelt.jsx';
import ProjectReel from './components/ProjectReel.jsx';
import FlipStudies from './components/FlipStudies.jsx';
import VerticalGallery from './components/VerticalGallery.jsx';
import Journey from './components/Journey.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

// One engine per page load (also guards against React Strict Mode double-invocation).
const getEngine = () => (window.__engine ||= startEngine());

export default function App() {
  useEffect(() => { getEngine(); }, []);
  const onExit = useCallback(() => getEngine().done(), []);
  return (
    <>
      <Loader onExit={onExit} />
      <ScrollProgress />
      <SceneCanvas />
      <Navbar />
      <main>
          <Hero />
          <About />
          <WordScene />
          <Skills />
          <Puzzle />
          <Gallery />
          <Lab />
          <Marquees />
          <PageFlip />
          <SkillsUniverse />
          <ProjectBelt />
          <ProjectReel />
          <FlipStudies />
          <VerticalGallery />
          <Journey />
          <Projects />
          <Contact />
      </main>
      <Footer />
      <Dialogs />
    </>
  );
}
