import {
  NavBar,
  Hero,
  Parallex,
  SkillsBar,
  Portfolio,
  Contact
} from './components';
import './assets/index.css';

const App = () => {
  return (
    <main>
      <section id="home">
        <NavBar />
        <Hero />
      </section>
      <section id="skill">
        <Parallex type={'skills'} />
      </section>
      <section>
        <SkillsBar />
      </section>
      <section id="projects">
        <Parallex type={'projects'} />
      </section>
      <Portfolio />

      <section id="contact-us">
        <Contact />
      </section>
    </main>
  );
};

export default App;
