import bite from '../../public/bite.jpeg';
import youtube from '../../public/youtube.jpeg';
import haircare from '../../public/haircare.jpeg';
import misc from '../../public/misc.jpeg';
import portfolio from '../../public/portfolio.jpeg';
import moshify from '../../public/mosify.jpeg';
import athletaro from '../../public/athletaro.jpeg';

import {
  IconApi,
  IconBootstrap,
  IconCreatereactapp,
  IconCss3,
  IconFramer,
  IconHtml5,
  IconJavascript,
  IconParcel,
  IconReact,
  IconReactplayer,
  IconReactrouter,
  IconRedux,
  IconSass,
  IconTailwindcss,
  IconVite
} from './icon/index';

const projects = [
  {
    id: 1,
    name: 'YouTube Clone',
    tagLine: 'Your Go-To Source for Video Content (Powered by the YouTube API)',
    description:
      'Discover the power of the YouTube Clone, a dynamic video streaming platform driven by the YouTube API. Immerse yourself in an interface that boasts a sleek dark mode for an eye-friendly experience. The advanced search feature, enhanced by debouncing and intelligent caching, ensures minimal API calls, leading to faster and smoother performance. Dive into a vast ocean of content, with video suggestions tailored to your preferences, and engage in discussions with fellow users through the comment section. Explore channels and watch videos hassle-free, all in one place. This YouTube Clone is built with React, Redux, React Router, React Player, Tailwind CSS, and leverages the rapid YouTube API. Check out the GitHub repository for the code, or experience it live with our demo.',
    img: youtube,
    technology: [
      <IconReact />,
      <IconRedux />,
      <IconReactrouter />,
      <IconReactplayer />,
      <IconTailwindcss />,
      <IconApi />,
      <IconCreatereactapp />
    ],
    code: 'github',
    demo: 'link'
    // react,redux.react-router,react-player,tailwind css, rapid API,create-react-app
  },
  {
    id: 2,
    name: 'Bite-Dash (from live swiggy API)',
    tagLine: 'Discover and Savor with Bite-Dash',
    description:
      'Introducing Bite-Dash, a web application powered by the live Swiggy API that revolutionizes your food ordering experience. It seamlessly fetches restaurant data based on your location and offers a convenient cart functionality for swift order placement. Explore restaurant pages featuring an accordion-style menu for easy navigation, with every detail sourced directly from the dynamic Swiggy API. There are no hard-coded elements; everything is dynamically generated to ensure you have access to the freshest and most accurate information. Bite-Dash is crafted using React, Redux, React Router, Tailwind CSS, and Parcel bundler for a responsive and efficient application. Dive into the GitHub repository to explore the codebase or try out the live demo now.',
    img: bite,
    technology: [
      <IconReact />,
      <IconRedux />,
      <IconReactrouter />,
      <IconTailwindcss />,
      <IconApi />,
      <IconParcel />
    ],
    code: 'github',
    demo: 'link'
    // react,redux.react-router,tailwind css, Swiggy API,parcel
  },
  {
    id: 3,
    name: 'portfolio - current site',
    tagLine: 'Explore My Digital Canvas',
    description:
      'Discover my digital portfolio, showcasing a collection of web projects. Dive into the world of responsive web design, user interfaces, and captivating interactions. Experience the fusion of React, Tailwind CSS, Framer Motion, and Vite in action, shaping the essence of modern web development. Get a glimpse of my creative journey, where design meets technology to craft engaging digital experiences.',
    img: portfolio,
    technology: [
      <IconReact />,
      <IconTailwindcss />,
      <IconFramer />,
      <IconVite />
    ],
    code: 'github',
    demo: false
    // react,tailwind css, framer-motion,vite
  },
  {
    id: 4,
    tagLine: '',
    name: 'Haircare',
    tagLine: 'Elegance Meets Style',
    description:
      "Step into the world of Haircare, an enchanting landing page concept for a premium salon experience. While this page is a design showcase and not functional, it boasts an exquisite gallery section to flaunt salon offerings. Explore the seamless design, showcasing the perfect blend of HTML5, Sass, and Bootstrap. Immerse yourself in the captivating visuals of a modern salon, featuring a beautiful gallery, an inviting contact form, and a captivating testimonial carousel. Experience the essence of sophistication and style, meticulously crafted to reflect the salon's commitment to elegance.",
    img: haircare,
    technology: [<IconHtml5 />, , <IconBootstrap />, <IconSass />],
    code: 'github',
    demo: 'link'
    //HTML, Sass, bootStrap
  },
  {
    id: 5,
    name: 'athletaro',
    tagLine: 'Where Style Meets Sport (e-commerce site)',
    description:
      "Discover Athletaro, an e-commerce-inspired design that brings together the best of sports and style. While not functional, it showcases an enticing shoe shop section, perfectly suited for the sneaker enthusiast. The design marries HTML5, JavaScript, and Bootstrap to deliver an engaging user experience. Immerse yourself in a parallax hero page that sets the tone for a dynamic shopping journey. Explore the seamless modal sign-in for personalized shopping and browse through a shoe collection that's all about comfort and style. Athletaro is where sports and fashion collide in a visually striking, non-functional design. Keep an eye out for the hidden Easter egg cleverly incorporated into the logo, adding a touch of mystery to your visit.",
    img: athletaro,
    technology: [<IconHtml5 />, <IconBootstrap />, <IconJavascript />],
    code: 'github',
    demo: 'link'
    //HTML,js, bootStrap
  },
  {
    id: 6,
    name: 'misc',
    tagLine: 'collection of fun projects in JS',
    description:
      "Welcome to 'Misc,' a versatile collection of playful JavaScript projects. This compilation showcases the unlimited possibilities of HTML, CSS, and JavaScript. Dive into a myriad of small applications, from a functional calculator and dynamic carousels to a to-do list manager and engaging quiz app. Explore JavaScript's capabilities in data manipulation and processing through JSON data management. You'll find useful tools like a money exchange calculator and captivating text effects that add a touch of fun to the world of web development. 'Misc' serves as an imaginative playground, where innovation knows no bounds. It's a testament to the endless creativity that HTML, CSS, and JavaScript bring to the digital realm.",
    img: misc,
    technology: [<IconHtml5 />, <IconCss3 />, <IconJavascript />, <IconApi />],
    code: 'github',
    demo: 'link'
    //HTML,CSS,JS
  },
  {
    id: 7,
    name: 'Moshify',
    tagLine: 'Elevating Your Web Presence with Cloud Hosting Solutions',
    description:
      "Moshify is a visually captivating web project, meticulously crafted with HTML, CSS, and JavaScript. This responsive site, built for my portfolio, showcases professional design and optimal performance. Careful image optimization ensures a seamless experience across various devices. The hero page immediately grabs attention, while elegant pricing cards engage users. Dynamic elements and compelling calls to action enhance interactivity. The testimonial section adds credibility to this professional-looking site. Moshify is a testament to my web design skills, offering stunning, responsive web pages that captivate users whether they're on desktop or mobile devices. It's a showcase of design expertise and an assurance of an engaging, visually pleasing experience.",
    img: moshify,
    technology: [<IconHtml5 />, <IconCss3 />, <IconJavascript />],
    code: 'github',
    demo: 'link'
    //HTML,CSS,JS
  }
];

export { projects };
