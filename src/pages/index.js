'use client'

import * as THREE from "three";
import perlin, { material, options } from "../app/perlin";
import dynamic from "next/dynamic";
import { useEffect } from "react"

import "@/styles/index.css"
import "@/app/globals.css"
import Navbar from "@/components/Navbar"
import "@/styles/nav.css";
import Background from "@/components/Background";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { TypeAnimation } from "react-type-animation";


export default function IndexPage() {
    const router = useRouter();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={router.route}
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={
                    {
                        duration: 0.75,
                    }
                }
                variants={{
                    initialState: {
                        opacity: 0,
                    },
                    animateState: {
                        opacity: 1,
                    },
                    exitState: {
                    },
                }}
            >
                <div className="main-container">
                    <div className="hero-text">
                        <h1 crossOrigin="anonymous" className="neon flicker-slow">Techstatic</h1>
                        <p crossOrigin="anonymous" className="neon-small">Digital Odyssey<br /><span className="neon-smaller">A Data Driven Adventure</span></p>

                    </div>
                    <div className="about-section">
                        <div className="about-section-text-container">
                            <h2 className="about-section-header">Techstatic is...</h2>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    "An I.T. Festival.",
                                    900,
                                    "A Statistics Festival.",
                                    900,
                                    "A Celebration of Tech.",
                                    900,
                                    "The Best (and only) IT x Stats Fest.",
                                    1000,
                                    "All of these things AND MORE!!!",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={20}
                                repeat={Infinity}
                                className="about-section-type"
                            />
                        </div>
                        <div className="flex-container">
                            <div className="vertical-container1">
                                <div className="card-title">Our Vision</div>
                                <div className="card-content">Techstatic is envisioned as a dynamic event that transcends traditional boundaries, offering a unique space for professionals, researchers, and enthusiasts to explore the limitless potentials of statistics and information technology.</div>
                            </div>
                            <div className="vertical-container2">
                                <div className="card-title">Our Theme</div>
                                <div className="card-content">Embark on a transformative odyssey in the digital realm with &#39;Digital Odyssey: A Data-Driven Adventure.&#39; <br /> Here, participants are modern-day explorers navigating data horizons. The theme encourages using data as a guiding star for collaborative problem-solving, pushing the boundaries of knowledge in ethical and innovative ways.</div>
                            </div>
                        </div>
                    </div>
                    <div className="events-section">
                        <div className="events-section-header">Ecstatic for Techstatic?</div>
                        <div className="events-section-subtitle"></div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence >

    )
}