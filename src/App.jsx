import NavBar from './compenent/NavBar';
import './index.css';

const App = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold text-red-700 text-center bg-black font-DMsans capitalize py-1">
        peek-a-boo 😆
      </h1>
      <section>
        <NavBar />
      </section>
      <section>parallex 1</section>
      <section>service</section>
      <section>parallex 2</section>
      <section>project 1</section>
      <section>project 2</section>
      <section>project 3</section>
      <section>contact us</section>
    </main>
  );
};

export default App;
