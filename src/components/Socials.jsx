import {
  IconGithub,
  IconInstagram,
  IconLinkedin,
  IconWhatsapp
} from '../utils/icon';

const Socials = () => (
  <>
    <a href="https://github.com/Arvindcool2022" target="_blank">
      <IconGithub height={'1.5rem'} width={'1.5rem'} />
    </a>
    <a href="https://www.linkedin.com/in/arvind-a-262260227/" target="_blank">
      <IconLinkedin height={'1.5rem'} width={'1.5rem'} />
    </a>
    <a href="https://wa.me/918778891211" target="_blank">
      <IconWhatsapp height={'1.5rem'} width={'1.5rem'} />
    </a>
    <a href="#">
      <IconInstagram height={'1.5rem'} width={'1.5rem'} />
    </a>
  </>
);

export default Socials;
