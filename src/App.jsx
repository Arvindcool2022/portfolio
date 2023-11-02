import React, { Suspense, lazy } from 'react';
import { NavBar, Hero, Cursor } from './components';
import './assets/index.css';

const About = lazy(() => import('./components/About'));
const SkillsBar = lazy(() => import('./components/SkillBar'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));
const Parallex = lazy(() => import('./components/Parallex'));

function App() {
  return (
    <main>
      <Cursor />
      <section id="home" className="bg-secondary">
        <NavBar />
        <Hero />
      </section>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </main>
  );
}

export default App;

// import {
//   NavBar,
//   Hero,
//   Parallex,
//   SkillsBar,
//   Portfolio,
//   Contact,
//   Cursor,
//   About
// } from './components';
// import './assets/index.css';

// const App = () => {
//   return (
//     <main>
//       <Cursor />
//       <section id="home" className="bg-secondary">
//         <NavBar />
//         <Hero />
//       </section>
//       <section className="bg-secondary">
//         <About />
//       </section>
//       <section>
//         <Parallex type={'skills'} />
//       </section>
//       <section id="skill">
//         <SkillsBar />
//       </section>
//       <section>
//         <Parallex type={'projects'} />
//       </section>
//       <Portfolio />

//       <section id="contact-us">
//         <Contact />
//       </section>
//     </main>
//   );
// };

// export default App;
