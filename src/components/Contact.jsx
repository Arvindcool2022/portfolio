import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import { btnHover, btnTap } from './buttonAnimation';
import { IconFramer, IconReact, IconTailwindcss } from '../utils/icon';

const variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
      staggerCHildren: 0.1
    }
  }
};

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px' });
  const formRef = useRef();
  const [err, seterr] = useState(false);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOk(false);
      seterr(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [ok, err]);

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_sci2a7w',
        'template_lpn65cn',
        formRef.current,
        '3xTfZAttpYvQoU-ib'
      )
      .then(
        result => {
          setOk(true);
          console.log(result.text);
        },
        error => {
          seterr(true);
          console.log(error.text);
        }
      );
  };
  return (
    <div ref={ref} className="h-full overflow-hidden">
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="h-full"
      >
        <motion.div
          variants={variants}
          className="mx-auto flex h-[95%] max-w-6xl items-center justify-center gap-10 xl:mx-4 md:h-[90%] sm:flex-col sm:gap-0"
        >
          <motion.div className="flex-1 md:mt-8" variants={variants}>
            <motion.h1
              className="text-7xl font-bold sm:text-3xl"
              variants={variants}
            >
              Let's work together
            </motion.h1>
            <motion.ul variants={variants} className="ps-4">
              <li>
                <h2 className="mb-1 mt-4 text-xl font-semibold">E-mail</h2>
              </li>
              <motion.li variants={variants}>
                arvindcool2022@gmail.com
              </motion.li>
              <li>
                <h2 className="mb-1 mt-4 text-xl font-semibold">Linked-in</h2>
              </li>
              <motion.li variants={variants}>
                <a
                  className="relative overflow-hidden rounded p-1 font-medium text-amber-500 transition-all duration-500 ease-in-out before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition-all before:duration-500 before:ease-in-out before:content-[''] hover:text-secondary hover:before:scale-x-100"
                  href="https://www.linkedin.com/in/arvind-a-262260227/"
                  target="_blank"
                >
                  Click here
                </a>
              </motion.li>
              <li>
                <h2 className="mb-1 mt-4 text-xl font-semibold">Address</h2>
              </li>
              <motion.li variants={variants}>chennai.</motion.li>
            </motion.ul>
          </motion.div>
          <div className="relative flex-1 md:w-full">
            <motion.div
              className="absolute -z-10 h-full w-full bg-primary stroke-purple-700"
              initial={{ opacity: 1 }}
              animate={isInView && { opacity: 0 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <svg viewBox="0 0 32.666 32.666">
                <motion.path
                  strokeWidth={0.2}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 2.5 }}
                  d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
                />
              </svg>
            </motion.div>
            <motion.form
              ref={formRef}
              className="flex flex-col gap-6 sm:gap-2"
              onSubmit={sendEmail}
              initial={{ opacity: 0 }}
              animate={isInView && { opacity: 1, zIndex: 2 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <input
                className="rounded border border-white bg-primary p-3 placeholder:font-medium"
                type="text"
                placeholder="Name..."
                name="name"
                required
              />
              <input
                className="rounded border border-white bg-primary p-3 placeholder:font-medium"
                type="Email"
                placeholder="Email"
                name="email"
                required
              />
              <textarea
                className="rounded border border-white bg-primary p-3 placeholder:font-medium"
                rows="8"
                name="message"
                placeholder="Message..."
                required
              />
              <motion.button
                whileHover={btnHover}
                whileTap={btnTap}
                className="relative w-1/3 cursor-pointer self-center overflow-hidden rounded-xl border border-white p-4 text-lg font-medium transition-colors duration-700 ease-in-out before:absolute before:-top-1 before:left-0 before:z-[-1] before:h-0 before:w-full before:rounded-[0_0_50%_50%] before:bg-white before:transition-all before:duration-1000 before:content-[''] hover:text-secondary hover:before:h-[180%] sm:w-1/2 sm:p-2"
              >
                Submit
              </motion.button>
              <p
                className={
                  'text-center text-sm ' +
                  (err ? 'text-red-600' : 'text-green-800')
                }
              >
                {err && 'error'}
                {ok && 'Sent'}
              </p>
            </motion.form>
          </div>
        </motion.div>
        <motion.p
          variants={variants}
          className="flex items-end justify-center gap-1 text-center text-sm capitalize text-slate-500 md:block"
        >
          © 2023 Arvind. made with ❤️. All Rights NOT Reserved. Feel Free To
          Copy😜. Source code in{' '}
          <a
            className="relative overflow-hidden font-medium text-amber-500 underline underline-offset-2 transition-all duration-500 ease-in-out before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition-all before:duration-500 before:ease-in-out before:content-[''] hover:text-secondary hover:before:scale-x-100"
            href="https://github.com/Arvindcool2022/portfolio"
            target="_blank"
          >
            GitHub.
          </a>
          <span className="flex items-center gap-1 md:justify-center">
            created using
            <IconReact />
            <IconTailwindcss />
            <IconFramer />
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Contact;
