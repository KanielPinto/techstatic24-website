import Link from "next/link";
import "@/styles/nav.css";

const NavItem = ({ text, href, active }) => {
    return (
        <a className={`nav__link`} href={href}>
            {text}
        </a>
    );
};

export default NavItem;