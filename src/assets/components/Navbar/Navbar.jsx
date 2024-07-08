import * as s from "./NavbarStyles.js";
import { FaCartShopping } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <s.HeaderContainer>
      <s.Logo
        src="/src/assets/Image/_08c234a2-cf3d-427b-8f8e-4fdde03596bb.jpg"
        alt="Logo"
      />
      <s.LinksContainer>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Sobre nosotros</a>
          </li>
          <FaCartShopping size={32} />
        </ul>
      </s.LinksContainer>
    </s.HeaderContainer>
  );
};
