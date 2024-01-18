import Navbar from "@/components/Navbar";
import * as THREE from "three";
import perlin, { material, options } from "../app/perlin";
import dynamic from "next/dynamic";
import { useEffect } from "react"
import Background from "@/components/Background";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import "@/styles/activities.css"
import Image from 'next/image'
import Footer from "@/components/Footer";
import { TypeAnimation } from "react-type-animation";

export default function EventPage() {
    const router = useRouter();
    let title = "Activities";
    let subtitle = "Explore what Techstatic has to offer!";

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

                            <div className="activities-container">
                                
                                <div className="horizontal-container-1">

                                    <div className="img-container">
                                        <div style={{ overflow: 'hidden'}} >
                                            <Image src="/activityImages/memory game.png" layout="responsive" width={200} height={200}></Image>
                                        </div>
                                    </div>


                                    <div className="description-container">
                                        <div className="card-container">

                                            <div className="innerCard">

                                                <div className="frontSide">
                                                    <h1 class="activity-title">MEMORY GAME</h1>
                                                    <p>Venue: College Hall</p>
                                                    <p>Date: 20. 01. 24</p>
                                                    <p className="tap">Tap to know more</p>

                                                </div>

                                                <div className="backSide">
                                                    <p className="card-info">Immerse yourself in the ultimate challenge of wit and recall with our Memory Game Show! Test your memory prowess with series of patterns, sequences, and puzzles for you to remember and replicate.</p>

                                                </div>

                                            </div> { /* innerCard ends */ }

                                        </div> { /* card-container ends */ }
                                        
                                    </div> { /* description-container ends */ }

                                </div> { /* horizontal container ends */ }



                                <div className="horizontal-container-2">
                                        <div className="description-container">
                                            <div className="card-container">

                                                <div className="innerCard">

                                                    <div className="frontSide">
                                                        {/* <Image src="/icons/elympics.png" width={100} height={100}></Image>
                                                        */}
                                                    <h1 class="activity-title">RETRO GAME CABINET</h1>
                                                    <p>Venue: College Hall</p>
                                                    <p>Date: 20. 01. 24</p>
                                                    <p className="tap">Tap to know more</p>
                                                    </div>

                                                    <div className="backSide">
                                                        <p className="card-info">Experience the nostalgia of classic arcade cabinets, challenge friends in timeless games, and celebrate the enduring appeal of retro gaming. Join us for a blast from the past, where technology evolution meets timeless fun</p>

                                                    </div>

                                                </div> { /* innerCard ends */ }

                                            </div> { /* card-container ends */ }
                                            
                                        </div> { /* description-container ends */ }

                                    
                                        <div className="img-container-2">
                                            <div style={{ overflow: 'hidden' }}>
                                                <Image src="/activityImages/retro game cabinet.png" layout="responsive" width={200} height={200}></Image>
                                            </div>

                                        </div>

                                </div> { /* horizontal container ends */ }

                           
                            <div className="horizontal-container-1">

                                <div className="img-container">
                                    <div style={{overflow: 'hidden'}}>
                                        <Image src="/activityImages/dart.png" layout="responsive" width={200} height={200}></Image>
                                    </div>
                                </div>


                                <div className="description-container">
                                    <div className="card-container">

                                        <div className="innerCard">
                                            <div className="frontSide">
                                                <h1 class="activity-title">D.A.R.T (Digital Art Gallery)</h1> 
                                                <p>Venue: College Hall</p>
                                                <p>Date: 20. 01. 24</p> 
                                                <p className="tap">Tap to know more</p>

                                            </div>

                                            <div className="backSide">
                                                <p className="card-info">Immerse yourself in a captivating display of digital masterpieces crafted by talented students. From stunning illustrations to cutting-edge digital designs, witness the fusion of art and technology.</p>

                                            </div>
                                        </div> { /* innerCard container ends */ }
                                            
                                    </div> { /* card-container ends */ }
                                    
                                </div> { /* description-container ends */ }

                            </div> { /* horizontal container ends */ }


                            <div className="horizontal-container-2">
                                        <div className="description-container">
                                            <div className="card-container">

                                                <div className="innerCard">

                                                    <div className="frontSide">
                                                    <h1 class="activity-title">THE EXHIBITION</h1>
                                                    <p>Venue: College Hall</p>
                                                    <p>Date: 20. 01. 24</p>
                                                    <p className="tap">Tap to know more</p>
                                
                                                    </div>

                                                    <div className="backSide">
                                                        <p className="card-info"> From robotics to AI, witness the future unfolding before your eyes. Engage with hands-on demonstrations and explore the forefront of technology. Join us for an inspiring journey through the realms of creativity and discovery at this must-see exhibition!</p>

                                                    </div>

                                                </div> { /* innerCard ends */ }

                                            </div> { /* card-container ends */ }
                                            
                                        </div> { /* description-container ends */ }

                                    
                                        <div className="img-container-2">
                                            <div style={{overflow: 'hidden'}}>
                                                <Image src="/activityImages/exhibition.png" layout="responsive" width={200} height={200}></Image>
                                            </div>
                                        </div>

                                </div> { /* horizontal container ends */ }
                            
                        </div> { /* activities-container ends */ }
                        <Footer></Footer>
                    </div>
                </motion.div>
            </AnimatePresence >
        </div>
    )
}