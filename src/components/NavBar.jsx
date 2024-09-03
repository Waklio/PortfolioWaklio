import logo from "../assets/WaklioNetoLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"; // Corrigido para usar FaTwitter

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-5 w-12" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/waklio-neto/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Waklio"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
