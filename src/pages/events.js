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
                        <div>
                            <PageHeader title={title} subtitle={subtitle}></PageHeader>

                            <div className="grid-container">
                                <div className="vertical-container">
                                    <h1>IT Events</h1>
                                    <div className="card-container">

                                        <div className="myCard">
                                            <div className="innerCard">
                                                <div className="frontSide">
                                                    {/* <Image src=""></Image> */}
                                                    <p className="card-title">Data Detective:<br />A Murder Mystery Quest</p>
                                                    <p>Hover Me</p>
                                                </div>
                                                <div className="backSide">
                                                    <p className="card-title">BACK SIDE</p>
                                                    <p>Leave Me</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="myCard">
                                            <div className="innerCard">
                                                <div className="frontSide">
                                                    <p className="card-title">FRONT SIDE</p>
                                                    <p>Hover Me</p>
                                                </div>
                                                <div className="backSide">
                                                    <p className="card-title">BACK SIDE</p>
                                                    <p>Leave Me</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="myCard">
                                            <div className="innerCard">
                                                <div className="frontSide">
                                                    <p className="card-title">FRONT SIDE</p>
                                                    <p>Hover Me</p>
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
                                                    <p className="card-title">FRONT SIDE</p>
                                                    <p>Hover Me</p>
                                                </div>
                                                <div className="backSide">
                                                    <p className="card-title">BACK SIDE</p>
                                                    <p>Leave Me</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="myCard">
                                            <div className="innerCard">
                                                <div className="frontSide">
                                                    <p className="card-title">FRONT SIDE</p>
                                                    <p>Hover Me</p>
                                                </div>
                                                <div className="backSide">
                                                    <p className="card-title">BACK SIDE</p>
                                                    <p>Leave Me</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="myCard">
                                            <div className="innerCard">
                                                <div className="frontSide">
                                                    <p className="card-title">FRONT SIDE</p>
                                                    <p>Hover Me</p>
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
                                                    <p className="card-title">FRONT SIDE</p>
                                                    <p>Hover Me</p>
                                                </div>
                                                <div className="backSide">
                                                    <p className="card-title">BACK SIDE</p>
                                                    <p>Leave Me</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="myCard">
                                            <div className="innerCard">
                                                <div className="frontSide">
                                                    <p className="card-title">FRONT SIDE</p>
                                                    <p>Hover Me</p>
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
                    </div>
                </motion.div>
            </AnimatePresence >
        </div>
    )
}