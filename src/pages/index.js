'use client'

import Image from "next/image";
import "@/styles/index.css"
import "@/app/globals.css"
import Navbar from "@/components/Navbar"
import "@/styles/nav.css";
import Background from "@/components/Background";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { TypeAnimation } from "react-type-animation";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";

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
                        <h1 crossOrigin="anonymous" className="neon">Techstatic</h1>
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
                                    "A Cool Department Fest.",
                                    1000,
                                    "A Hub for Learning About Modern Tech.",
                                    1000,
                                    "All of these AND MORE!!!",
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
                        <div className="events-section-subtitle">Join us on our Digital Odyssey :&#41;</div>
                        <a
                            class="contingent-reg-btn"
                            href="https://forms.gle/vR3p2AkbYSbM8Qjz9"
                            type="button"
                        >
                            <span>Register Your Contingent Now!</span>
                            <svg
                                viewBox="0 0 320 512"
                                height="2em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                ></path>
                            </svg>
                        </a>
                        <a
                            class="cl-decl-btn"
                            href="https://drive.google.com/file/d/1KA1PFgNa4Xrjv5mA-7gLQFdu19Kc3QLX/view?usp=drive_link"
                            type="button"
                        >
                            <span>Download the CL Declaration Letter</span>
                            <svg
                                viewBox="0 0 320 512"
                                height="2em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                ></path>
                            </svg>
                        </a>
                        <div className="horizontal-container">
                            <a
                                class="btn-class-name1"
                                href="/events"
                                type="button"
                            >
                                <span>Dive into our exciting Events!</span>
                                <svg
                                    viewBox="0 0 320 512"
                                    height="6.5em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                class="btn-class-name2"
                                type="button"
                                href="/activities"
                            >
                                <span>Check out our Exciting Activities!</span>
                                <svg
                                    viewBox="0 0 320 512"
                                    height="6.5em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                    ></path>
                                </svg>
                            </a>
                        </div>

                    </div>
                    <div className="schedule-section">
                        <div className="events-section-header">Events Schedule</div>
                        <div className="schedule-horizontal-container">
                            <Image src="/techstatic-day1.jpeg" width={700} height={525} layout="responsive"></Image>
                            <Image src="/techstatic-day2.jpeg" width={700} height={525} layout="responsive"></Image>

                        </div>

                    </div>
                    <Footer></Footer>

                </div>
            </motion.div>
        </AnimatePresence >

    )
}