import { NavBar, Hero, Parallex, SkillsBar } from './components';
import './index.css';

const App = () => {
  return (
    <main>
      <section id="home">
        <NavBar />
        <Hero />
      </section>
      <section id="about">
        <Parallex type={'skills'} />
      </section>
      <section id="skill">
        <SkillsBar />
      </section>
      <section>
        <Parallex type={'projects'} />
      </section>
      <section id="projects">project 1</section>
      <section>project 2</section>
      <section>project 3</section>
      <section id="contact-us">contact us</section>
    </main>
  );
};

export default App;
