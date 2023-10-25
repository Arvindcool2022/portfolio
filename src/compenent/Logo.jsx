import TypeIt from 'typeit-react';

const Logo = () => {
  return (
    <p className="p-2 text-xl font-semibold uppercase tracking-wider">
      <TypeIt
        getBeforeInit={instance => {
          instance
            .type('Aspiring')
            .pause(750)
            .delete(8)
            .pause(300)
            .type('Front-End ')
            .pause(750)
            .delete(10)
            .pause(500)
            .type("Arvind's Portfolio")
            .pause(750)
            .delete(19)
            .pause(500)
            .type('cooking Logo')
            .go();

          return instance;
        }}
      />
    </p>
  );
};

export default Logo;
