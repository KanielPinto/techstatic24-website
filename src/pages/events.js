import Navbar from "@/components/Navbar";
import * as THREE from "three";
import perlin, { material, options } from "../app/perlin";
import dynamic from "next/dynamic";
import { useEffect } from "react"
import Background from "@/components/Background";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import "@/styles/events.css"
import Image from 'next/image'
import Footer from "@/components/Footer";
import { TypeAnimation } from "react-type-animation";

export default function EventPage() {
    const router = useRouter();
    let title = "Events";
    let subtitle = "A Glimpse into our Events";

    return (
        <div className="main-container">
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
                    <div>
                        <PageHeader title={title} subtitle={subtitle}></PageHeader>

                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Dive into the competitions and challenges!",
                                1000,

                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                            className="subtitle"
                        />
                        <div className="brochure-link">
                            <p>For more details,</p>
                            <a
                                class="btn-class-name"
                                href="https://heyzine.com/flip-book/6a7bb87635.html#page/1"
                                type="button"
                            >
                                <span>View Our Events Brochure</span>
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

                        </div>
                        <div className="grid-container">
                            <div className="vertical-container1">
                                <h1>I.T. Events</h1>
                                <div className="card-container">

                                    <div className="myCard">
                                        <div className="innerCard">
                                            <div className="frontSide">
                                                <Image src="/icons/hackathon.png" width={100} height={100}></Image>
                                                <p className="card-title">Hackathon</p>
                                                <p className="card-subtitle">Where Vision Meets Virtuality!</p>
                                                {/* <p>Hover Me</p> */}
                                            </div>
                                            <div className="backSide">
                                                <h1 className="titleone">Hackathon</h1>
                                                <p className="titletwo"> Battleground for brilliant minds . Unravel progressively intricate coding questions and then develop an app/ website for a social cause .</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="myCard">
                                        <div className="innerCard">
                                            <div className="frontSide">
                                                <Image src="/icons/elympics.png" width={100} height={100}></Image>

                                                <p className="card-title">E-Lympics</p>
                                                <p>May the Odds be Ever in your Favour!</p>
                                            </div>
                                            <div className="backSide">
                                                <h1 className="titleone">E-lympics</h1>
                                                <p className="titletwo">Get ready for the ultimate showdown in our Esports Competition! Contingents face off in thrilling online gaming tournaments featuring popular titles like Valorant, call of duty, etc.</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="myCard">
                                        <div className="innerCard">
                                            <div className="frontSide">
                                                <Image src="/icons/digitales.png" width={100} height={100}></Image>

                                                <p className="card-title">Digitales</p>
                                                <p>Enchanting Pixels: A Digital Fantasy Showcase</p>

                                            </div>
                                            <div className="backSide">
                                                <h1 className="titleone">Digitales</h1>
                                                <p className="titletwo"> reimagine a classic childhood story through a contemporary digital lens.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="vertical-container2">
                                <h1>Stats Events</h1>
                                <div className="card-container">

                                    <div className="myCard">
                                        <div className="innerCard">
                                            <div className="frontSide">
                                                <Image src="/icons/statwars.png" width={100} height={100}></Image>
                                                <p className="card-title">Stat Wars</p>
                                                <p className="card-subtitle">May The Data Be With You!</p>
                                                {/* <p>Hover Me</p> */}
                                            </div>
                                            <div className="backSide">
                                                <h1 className="titleone">Stat Wars</h1>
                                                <p>Episode IV</p>

                                                <p className="titletwo">group event where you decode patterns , trends and insights on a randomly selected industry of the four ( sports ,travel / tourism , apparel , music ) and then present your analysis.</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="myCard">
                                        <div className="innerCard">
                                            <div className="frontSide">
                                                <Image src="/icons/familyfeud.png" width={100} height={100}></Image>

                                                <p className="card-title">Family Feud</p>
                                                <p>Outwit, Outplay, Outstat</p>
                                            </div>
                                            <div className="backSide">
                                                <h1 className="titleone">Family Feud</h1>
                                                <p>Stats Edition</p>

                                                <p className="titletwo">The clash of clans, where two spirited teams go head-to- head, battling wits and quick thinking to unearth the most popular survey answer.</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="myCard">
                                        <div className="innerCard">
                                            <div className="frontSide">
                                                <Image src="/icons/datadetective.png" width={100} height={100}></Image>

                                                <p className="card-title">Data Detective</p>
                                                <p>Enchanting Pixels: A Digital Fantasy Showcase</p>

                                            </div>
                                            <div className="backSide">
                                                <h1 className="titleone">Data Detective</h1>
                                                <p>Murder Mystery Quest</p>
                                                <p className="titletwo"> A group event, where you conduct analysis to narrow down suspects to one murderer.</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="horizontal-container">
                                <h1>Crossover Events</h1>

                                <div className="card-container">

                                    <div className="myCard">
                                        <div className="innerCard">
                                            <div className="frontSide">
                                                <Image src="/icons/escaperoom.png" width={100} height={100}></Image>

                                                <p className="card-title">Escape Room</p>
                                                <p>Outwit, Outplay, Outstat</p>
                                            </div>
                                            <div className="backSide">
                                                <h1 className="titleone">Escape Room</h1>
                                                <p className="titletwo">Can you outsmart the algorithms and break free from the digital labyrinth? Challenge your wits, embrace the challenge, and decode your way to victory!</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="myCard">
                                        <div className="innerCard">
                                            <div className="frontSide">
                                                <Image src="/icons/quiz.png" width={100} height={100}></Image>

                                                <p className="card-title">Let&#39;s Get Quizzical</p>
                                                <p>Enchanting Pixels: A Digital Fantasy Showcase</p>

                                            </div>
                                            <div className="backSide">
                                                <h1 className="titleone">Let&#39;s Get Quizzical</h1>
                                                <p className="titletwo">This event is a two-person quiz where they will be asked both statistical and I.T. questions respectively and they must answer them.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer></Footer>

                    </div>
                </motion.div>
            </AnimatePresence >
        </div>
    )
}
