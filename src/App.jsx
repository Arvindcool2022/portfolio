import { NavBar, Hero, Parallex } from './components';
import './index.css';

const App = () => {
  return (
    <main>
      {/* <h1 className="text-3xl font-bold text-red-700 text-center bg-black font-DMsans capitalize py-1">
        peek-a-boo 😆
      </h1> */}
      <section id="home">
        <NavBar />
        <Hero />
      </section>
      <section id="about">
        <Parallex type={'skills'} />
      </section>
      <section id="skill">Skills</section>
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
