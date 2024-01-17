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
    let subtitle = "check out our other activities";

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
                                            <Image src="/activityImages/arcade-img-removebg-preview.png" layout="responsive" width={100} height={100}></Image>
                                        </div>
                                    </div>


                                    <div className="description-container">
                                        <div className="card-container">

                                            <div className="innerCard">

                                                <div className="frontSide">
                                                    <h1 class="activity-title">ARCADE MACHINE</h1>
                                                    <p>Arcade station for everyone to play</p><br />
                                                    <p>Venue: College Hall</p>
                                                    <p>Date: 19. 01. 24</p>
                                                </div>

                                                <div className="backSide">
                                                    <p className="card-info">Get ready for the ultimate showdown in our Esports Competition! Contingents face off in thrilling online gaming tournaments featuring popular titles like Valorant, call of duty, etc.</p>

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
                                                    <h1 class="activity-title">MERCH SALE</h1>
                                                    <p>Venue: College Hall</p>
                                                    <p>Date: 19. 01. 24</p>
                                                        
                                                    </div>

                                                    <div className="backSide">
                                                        <p className="card-info">Get ready for the ultimate showdown in our Esports Competition! Contingents face off in thrilling online gaming tournaments featuring popular titles like Valorant, call of duty, etc.</p>

                                                    </div>

                                                </div> { /* innerCard ends */ }

                                            </div> { /* card-container ends */ }
                                            
                                        </div> { /* description-container ends */ }

                                    
                                        <div className="img-container">
                                            <div style={{ overflow: 'hidden' }}>
                                                <Image src="/activityImages/arcade-img-removebg-preview.png" layout="responsive" width={200} height={200}></Image>
                                            </div>

                                        </div>

                                </div> { /* horizontal container ends */ }

                           
                            <div className="horizontal-container-1">

                                <div className="img-container">
                                    <div style={{overflow: 'hidden'}}>
                                        <Image src="/activityImages/arcade-img-removebg-preview.png" layout="responsive" width={200} height={200}></Image>
                                    </div>
                                </div>


                                <div className="description-container">
                                    <div className="card-container">

                                        <div className="innerCard">
                                            <div className="frontSide">
                                                <h1 class="activity-title">GAME LOUNGE</h1> 
                                                <p>Venue: College Hall</p>
                                                <p>Date: 19. 01. 24</p>                                               
                                            </div>

                                            <div className="backSide">
                                                <p className="card-info">Get ready for the ultimate showdown in our Esports Competition! Contingents face off in thrilling online gaming tournaments featuring popular titles like Valorant, call of duty, etc.</p>

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
                                                    <p>Date: 19. 01. 24</p>
                                                        
                                                    </div>

                                                    <div className="backSide">
                                                        <p className="card-info">Get ready for the ultimate showdown in our Esports Competition! Contingents face off in thrilling online gaming tournaments featuring popular titles like Valorant, call of duty, etc.</p>

                                                    </div>

                                                </div> { /* innerCard ends */ }

                                            </div> { /* card-container ends */ }
                                            
                                        </div> { /* description-container ends */ }

                                    
                                        <div className="img-container">
                                            <div style={{overflow: 'hidden'}}>
                                                <Image src="/activityImages/arcade-img-removebg-preview.png" layout="responsive" width={200} height={200}></Image>
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