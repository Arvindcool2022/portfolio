import NavBar from './components/NavBar';
import './index.css';

const App = () => {
  return (
    <main>
      {/* <h1 className="text-3xl font-bold text-red-700 text-center bg-black font-DMsans capitalize py-1">
        peek-a-boo 😆
      </h1> */}
      <section id="home">
        <NavBar />
      </section>
      <section id="about">parallex 1</section>
      <section id="skill">service</section>
      <section>parallex 2</section>
      <section id="projects">project 1</section>
      <section>project 2</section>
      <section>project 3</section>
      <section id="contact-us">contact us</section>
    </main>
  );
};

export default App;
