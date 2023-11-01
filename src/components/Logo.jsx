import TypeIt from 'typeit-react';

const Logo = () => {
  return (
    <span className="p-2 text-xl font-semibold uppercase tracking-wider 2xl:ms-20 ms-0">
      <TypeIt
        getBeforeInit={instance => {
          instance
            .type('Portfolio')
            .pause(750)
            .delete(9)
            .pause(300)
            .type('UI/UX Developer')
            .pause(750)
            .delete(15)
            .pause(500)
            .type("Arvind's Portfolio")
            .pause(750)
            .delete(19)
            .type('???')
            .pause(500)
            .delete(3)
            .pause(500)
            .type('Cooking Logo')
            .go();

          setTimeout(() => {
            instance.destroy();
          }, 15000);

          return instance;
        }}
      />
    </span>
  );
};

export default Logo;
