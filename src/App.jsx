import {
  NavBar,
  Hero,
  Parallex,
  SkillsBar,
  Portfolio,
  Contact,
  Cursor,
  About
} from './components';
import './assets/index.css';

const App = () => {
  return (
    <main>
      <Cursor />
      <section id="home" className="bg-secondary">
        <NavBar />
        <Hero />
      </section>
      <section className="bg-secondary">
        <About />
      </section>
      <section>
        <Parallex type={'skills'} />
      </section>
      <section id="skill">
        <SkillsBar />
      </section>
      <section>
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
