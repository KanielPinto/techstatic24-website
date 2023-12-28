'use client'

import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./Navitem";
import "@/styles/nav.css";
import { useRouter } from 'next/router';




const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Events", href: "events" },
    { text: "Contact", href: "contact" },
];
const Navbar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header>
            <nav className={`nav`}>
                <a href="/"><Image
                    src="/techstatic_logo.png"
                    width={110}
                    height={110}
                    alt="Techstatic Logo"></Image></a>


                <div
                    onClick={() => setNavActive(!navActive)}
                    className={`nav__menu-bar`}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                    {MENU_LIST.map((menu, idx) => (
                        <div
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                        >
                            <NavItem active={activeIdx === idx} {...menu} />
                        </div>
                    ))}
                </div>
            </nav>
        </header >
    );
};

export default Navbar;