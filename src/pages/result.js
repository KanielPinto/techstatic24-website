import "@/app/globals.css"
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import "@/styles/result.css";


export default function Result() {
    const router = useRouter();
    const title = "!!! RESULTS !!!";
    const subtitle = "";
    return (
        <div> 
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
                <PageHeader title={title} subtitle={subtitle}></PageHeader>
                        <div className="mainevent">
                            IT EVENTS
                        </div>
                        <br />
                        <div className="subevent">
                            HACKTHON
                        </div>
                        <div className="subevent">
                            E-LYMPICS
                        </div>
                        <div className="subevent">
                            DIGITALES
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />

                        <div className="mainevent">
                            STATS EVENTS
                        </div>
                        <br />
                        <div className="subevent">
                            STAT WAR
                        </div>
                        <div className="subevent">
                            FAMILY  FEUD
                        </div>
                        <div className="subevent">
                            DATA  DETECTIVE 
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />

                        <div className="mainevent">
                            CROSSOVER EVENTS
                        </div>
                        <br />
                        <div className="subevent">
                            ESCAPE ROOM
                        </div>
                        <div className="subevent">
                            LET'S GET QUIZZICAL
                        </div>
                </div>
                
            </motion.div>
        </AnimatePresence >
        </div>
    )
}
