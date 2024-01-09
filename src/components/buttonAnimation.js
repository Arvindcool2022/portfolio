const btnHover = {
  scale: 1.03,
  '&::before': { color: 'black', height: '180%' },
  transition: { type: 'spring', stiffness: 250, damping: 30 }
};

const btnTap = {
  scale: 0.9,
  transition: { type: 'spring', stiffness: 250, damping: 30 }
};

export { btnHover, btnTap };
