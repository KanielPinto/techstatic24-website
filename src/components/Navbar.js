'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavItem from "./Navitem";
import "@/styles/nav.css";
import { useRouter } from 'next/router';




const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Events", href: "events" },
    { text: "Announcements", href: "https://linktr.ee/Techstatic2024" },
    // { text: "Gallery", href: "gallery" },

    { text: "Our Team", href: "workforce" },
    // { text: "Activities", href: "activities" },
];
const Navbar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);


    useEffect(() => {
        const element = document.querySelector(".main-container");
        const nav = document.querySelector("nav")

        element.addEventListener("scroll", (event) => {
            if (element.scrollTop > 5) {
                nav.classList.add('transparent');
              } else {
                nav.classList.remove('transparent');
              }
        });

    }, [])


    return (
        <header>
            <nav className="nav">
                <a className="logo" href="/"><Image
                    src="/techstatic_logo.png"
                    width={70}
                    height={70}
                    alt="Techstatic Logo"></Image></a>


                <div
                    className='nav__menu-bar'
                >
                    <input id="checkbox" type="checkbox" onClick={() => setNavActive(!navActive)}
                    ></input>
                    <label className="toggle" htmlFor="checkbox">
                        <div id="bar1" className="bars"></div>
                        <div id="bar2" className="bars"></div>
                        <div id="bar3" className="bars"></div>
                    </label>
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