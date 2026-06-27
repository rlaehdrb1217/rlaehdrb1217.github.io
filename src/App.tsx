import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Improvements from './components/Improvements';
import PersonalProjects from './components/PersonalProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkExperience />
        <Improvements />
        <PersonalProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
