import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter,faInstagram,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  return (
<div className="footer z-50">

    <section className="flex-row footer-socials">
      {/* <p> <FontAwesomeIcon icon={faPlantWilt}/></p> */}
      <a className="no-style"  href="https://twitter.com/iONBain" target="_blank" rel="noreferrer">
      <FontAwesomeIcon className="hover-mouse" icon={faTwitter} />
      </a>
      <a className="no-style"  href="https://github.com/iONBain" target="_blank" rel="noreferrer" >
      <FontAwesomeIcon className="hover-mouse" icon={faGithub} />
      </a>
      <a className="no-style"  href="https://instagram.com/i0NBain" target="_blank" rel="noreferrer" >
      <FontAwesomeIcon className="hover-mouse" icon={faInstagram} />
      </a>
      <a className="no-style"  href="https://www.linkedin.com/in/bhaskar-agrawal-598b5a16b/"  rel="noreferrer" target="_blank">
      <FontAwesomeIcon className="hover-mouse" icon={faLinkedin} />
      </a>
    </section>
      <p>assembled by <a className="no-style"  href="https://github.com/iONBain" target="_blank" rel="noreferrer" > <span className="ionbain accent">@iONBain</span></a></p>
</div>
  );
};

export default Footer;
