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

                        <div className="grid-container">
                            <div className="vertical-container">
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
                                                <p className="card-title">BACK SIDE</p>
                                                {/* <p>Leave Me</p> */}
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
                                                <p className="card-title">BACK SIDE</p>

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
                                                <p className="card-title">BACK SIDE</p>
                                                <p>Leave Me</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="vertical-container">
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
                                                <p className="card-title">BACK SIDE</p>
                                                {/* <p>Leave Me</p> */}
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
                                                <p className="card-title">BACK SIDE</p>

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
                                                <p className="card-title">BACK SIDE</p>
                                                <p>Leave Me</p>
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
                                                <p className="card-title">BACK SIDE</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="myCard">
                                        <div className="innerCard">
                                            <div className="frontSide">
                                                <Image src="/icons/datadetective.png" width={100} height={100}></Image>

                                                <p className="card-title">Let&#39;s Get Quizzical</p>
                                                <p>Enchanting Pixels: A Digital Fantasy Showcase</p>

                                            </div>
                                            <div className="backSide">
                                                <p className="card-title">BACK SIDE</p>
                                                <p>Leave Me</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence >
        </div>
    )
}