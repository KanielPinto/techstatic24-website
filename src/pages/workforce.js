import "@/app/globals.css"
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import "@/styles/workforce.css"
import Image from "next/image"

export default function WorkforcePage() {
    const router = useRouter();
    const title = "Our Team";
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

                    <div className="vertical-container">

                                    <div className="dept-container-right">
                                    <h1> CHAIRPERSONS</h1>

                                        <div className="sides-container">
                                            <div className="leftSide">
                                            <p className="titleone">Chairpersons</p>
                                                <p className="titletwo">Get ready for the ultimate showdown in our Esports Competition! Contingents face off in thrilling online gaming tournaments featuring popular titles like Valorant, call of duty, etc.</p>
                                                
                                            </div>
                                            <div className="rightSide">
                                                <Image src="/deptImages/DSC03013.png" width={400} height={300}></Image>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dept-container-left">
                                        <h1>ADMIN DEPARTMENT</h1>
                                             
                                        <div className="sides-container">
                                            <div className="leftSide">
                                                <Image src="/deptImages/Admin Department Photo.png" width={400} height={300}/>
                                                {/* <p>Hover Me</p> */}
                                            </div>

                                            <div className="rightSide">
                                                <p className="titleone">Tag line</p>
                                                <p className="titletwo"> description </p>
                                            </div>
                                        </div>
                                            
                                    </div>
                                    
                                    <div className="dept-container-right">
                                    <h1> CREATIVES DEPARTMENT</h1>

                                        <div className="sides-container">
                                            <div className="leftSide">
                                            <p className="titleone">E-lympics</p>
                                                <p className="titletwo">Get ready for the ultimate showdown in our Esports Competition! Contingents face off in thrilling online gaming tournaments featuring popular titles like Valorant, call of duty, etc.</p>
                                                
                                            </div>
                                            <div className="rightSide">
                                                <Image src="/deptImages/Creatives Department Photo 2.png" width={400} height={300}></Image>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div className="dept-container-left">
                                    <h1> DEVELOPMENTS DEPARTMENT</h1>

                                        <div className="sides-container">
                                            <div className="leftSide">
                                                <Image src="/deptImages/Devs Department Photoshoot.png" width={400} height={300}></Image>

                                            </div>
                                            <div className="rightSide">
                                                <p className="titleone">Digitales</p>
                                                <p className="titletwo"> reimagine a classic childhood story through a contemporary digital lens.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dept-container-right">
                                    <h1> EVENTS (IT) DEPARTMENT</h1>

                                        <div className="sides-container">
                                            <div className="leftSide">
                                            <p className="titleone">E-lympics</p>
                                                <p className="titletwo">Get ready for the ultimate showdown in our Esports Competition! Contingents face off in thrilling online gaming tournaments featuring popular titles like Valorant, call of duty, etc.</p>
                                                
                                            </div>
                                            <div className="rightSide">
                                                <Image src="/deptImages/Events IT Department Photo.png" width={400} height={300}></Image>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dept-container-left">
                                    <h1> EVENTS (STATS) DEPARTMENT</h1>

                                        <div className="sides-container">
                                            <div className="leftSide">
                                                <Image src="/deptImages/Events Stats Department Photo.png" width={400} height={300}></Image>

                                            </div>
                                            <div className="rightSide">
                                                <p className="titleone">Digitales</p>
                                                <p className="titletwo"> reimagine a classic childhood story through a contemporary digital lens.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dept-container-right">
                                    <h1> FINANCE DEPARTMENT</h1>

                                        <div className="sides-container">
                                            <div className="leftSide">
                                            <p className="titleone">E-lympics</p>
                                                <p className="titletwo">Get ready for the ultimate showdown in our Esports Competition! Contingents face off in thrilling online gaming tournaments featuring popular titles like Valorant, call of duty, etc.</p>
                                                
                                            </div>
                                            <div className="rightSide">
                                                <Image src="/deptImages/Finance Department Photo.png" width={400} height={300}></Image>
                                            </div>
                                        </div>
                                    </div>

                                
                                    <div className="dept-container-left">
                                    <h1> FnD DEPARTMENT</h1>

                                        <div className="sides-container">
                                            <div className="leftSide">
                                                <Image src="/deptImages/FnD Department Photoshoot.png" width={400} height={300}></Image>

                                            </div>
                                            <div className="rightSide">
                                                <p className="titleone">Digitales</p>
                                                <p className="titletwo"> reimagine a classic childhood story through a contemporary digital lens.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dept-container-right">
                                    <h1> MARKETING DEPARTMENT</h1>

                                        <div className="sides-container">
                                            <div className="leftSide">
                                            <p className="titleone">E-lympics</p>
                                                <p className="titletwo">Get ready for the ultimate showdown in our Esports Competition! Contingents face off in thrilling online gaming tournaments featuring popular titles like Valorant, call of duty, etc.</p>
                                                
                                            </div>
                                            <div className="rightSide">
                                                <Image src="/deptImages/Marketing Department Photoshoot.png" width={400} height={300}></Image>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="dept-container-left">
                                    <h1> VenMan DEPARTMENT</h1>

                                        <div className="sides-container">
                                            <div className="leftSide">
                                                <Image src="/deptImages/Venman Department Photoshoot.png" width={400} height={300}></Image>

                                            </div>
                                            <div className="rightSide">
                                                <p className="titleone">Digitales</p>
                                                <p className="titletwo"> reimagine a classic childhood story through a contemporary digital lens.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dept-container-right">
                                    <h1> PR DEPARTMENT</h1>

                                        <div className="sides-container">
                                            <div className="leftSide">
                                            <p className="titleone">E-lympics</p>
                                                <p className="titletwo">Get ready for the ultimate showdown in our Esports Competition! Contingents face off in thrilling online gaming tournaments featuring popular titles like Valorant, call of duty, etc.</p>
                                                
                                            </div>
                                            <div className="rightSide">
                                                <Image src="/deptImages/PR Department Photoshoot.png" width={400} height={300}></Image>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="dept-container-left">
                                    <h1> CONCLAVE DEPARTMENT</h1>

                                        <div className="sides-container">
                                            <div className="leftSide">
                                                <Image src="/deptImages/Conclave Department Photoshoot.png" width={400} height={300}></Image>

                                            </div>
                                            <div className="rightSide">
                                                <p className="titleone">Digitales</p>
                                                <p className="titletwo"> reimagine a classic childhood story through a contemporary digital lens.</p>
                                            </div>
                                        </div>
                                    </div> 

                                    
                    </div>     {/*vertical-container closes          */}

                </div>  {/*main-container closes          */}

            </motion.div>
        </AnimatePresence >
        </div>    
    )
}