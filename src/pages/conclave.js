
import Navbar from "@/components/Navbar";
import * as THREE from "three";
import perlin, { material, options } from "../app/perlin";
import dynamic from "next/dynamic";
import { useEffect } from "react"
import Background from "@/components/Background";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import "@/styles/conclave.css"
import Image from 'next/image';
import Footer from "@/components/Footer";
import { TypeAnimation } from "react-type-animation";

export default function EventPage() {
    const router = useRouter();
    let title = "Our Conclave Lineup";
    let subtitle = "check out our guest speakers";

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
                                "Check out our esteemed guest speakers",
                                1000,

                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                            className="subtitle"
                        />

                        <div className="body-container">
                        <h1 className="section-header">Keynote Speaker</h1>

                            <div className="content-container">
                                <div className="card">
                                    <div className="image">
                                        <Image src="/conclaveImages/Ankush Bhagarwal.png" layout="responsive" width={100} height={100}></Image>
                                    </div>
                                    <div className="info">
                                        <h2>Ankush Bhagarwal</h2>
                                        <h3>Founder & CEO<br></br>COROVER.AI &#40;& BHARATGPT&#41;</h3>
                                        <p>A tech entrepreneur and the CEO of CoRover. He is driven by a deep passion for creating innovative tech solutions that address both business and societal challenges.</p>
                                    </div>

                                </div>
                            </div>

                            <h1 className="section-header">Panel Discussion</h1>
                            <div className="content-container">


                                <div className="card">

                                    <div className="image">
                                        <Image src="/conclaveImages/Dhaval Thanki.png" layout="responsive" width={100} height={100}></Image>
                                    </div>
                                    <div className="info">
                                        <h2>dhaval Thanki</h2>
                                        <h3>Executive Vice-President<br></br>LogiNext</h3>
                                        <p>Executive Vice President at LogiNext - World&#39;s leading logistics automation SaaS platform. He&#39;s also on the advisory board of K. J. Somaiya Institute of Management..</p>
                                    </div>

                                </div>

                            </div>


                            <div className="content-container">
                                <div className="card">
                                    <div className="image">
                                        <Image src="/conclaveImages/Dr. Abhijit Sarkar.png" layout="responsive" width={100} height={100}></Image>
                                    </div>
                                    <div className="info">
                                        <h1>Dr. Abhijit Sarkar</h1>
                                        <h3>CEO & Board of Director<br></br>MegasGroup</h3>
                                        <p>Dr. Abhijit Sarkar is a distinguished entrepreneur, currently holding  the position of Group Chief Executive Officer &amp; Board
                                            of Directors at the renowned design and build firm MEGAS
                                            Architectural Services Pvt Ltd
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="content-container">
                                <div className="card">

                                    <div className="image">
                                        <Image src="/conclaveImages/badri-sanjeevni.png" layout="responsive" width={100} height={100}></Image>
                                    </div>
                                    <div className="info">
                                        <h1>Badri Sanjeevni</h1>
                                        <h3>CFO<br></br>Turtlemint</h3>

                                    </div>

                                </div>
                            </div>

                            <div className="content-container">
                                <div className="card">

                                    <div className="image">
                                        <Image src="/conclaveImages/Ritesh Jain.png" layout="responsive" width={100} height={100}></Image>
                                    </div>
                                    <div className="info">
                                        <h1>Ritesh Jain</h1>
                                        <h3>Co-Founder<br></br>FlexiLoans</h3>

                                    </div>

                                </div>
                            </div>


                        </div> { /* body-container ends */}

                        <Footer></Footer>
                    </div>
                </motion.div>
            </AnimatePresence >
        </div>
    )
}