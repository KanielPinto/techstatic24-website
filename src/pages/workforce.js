import "@/app/globals.css"
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import "@/styles/workforce.css"
import Image from "next/image"
import Footer from "@/components/Footer";
import { TypeAnimation } from "react-type-animation";


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
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "The People Behind Techstatic! ",
                                1000,

                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                            className="subtitle"
                        />
                        <div className="vertical-container">

                            <div className="dept-container-right">

                                <div className="sides-container-right">
                                    <div className="dept-text-container">
                                        <p className="titleone">Chairpersons</p>
                                        <p className="titletwo">Double the leadership, Quadruple the impact 💥</p>
                                        <p className="names">Chairperson : Aarushi Parida<br />Chairperson : Jazeel Ekhlas</p>
                                    </div>
                                    <div className="dept-pic-container">
                                        <div style={{ borderRadius: '25px', overflow: 'hidden' }}>
                                            <Image src="/deptImages/chairpersons.png" layout="responsive" width={400} height={300}></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dept-container-left">

                                <div className="sides-container-left">
                                    <div className="dept-pic-container">
                                        <div style={{ borderRadius: '25px', overflow: 'hidden' }}>
                                            <Image src="/deptImages/admin.png" layout="responsive" width={400} height={300}></Image>
                                        </div>
                                    </div>

                                    <div className="dept-text-container">
                                        <p className="titleone">Admin</p>
                                        <p className="titletwo">Mitochondria is the powerhouse of the cell ❌
                                            <br></br> Admin is the powerhouse of techastatic ✅</p>
                                        <p className="names">Head : Tanishka Vijaykumar<br />Sub Head : Parinita Radhwani</p>

                                    </div>
                                </div>

                            </div>

                            <div className="dept-container-right">

                                <div className="sides-container-right">
                                    <div className="dept-text-container">
                                        <p className="titleone">Creatives</p>
                                        <p className="titletwo">They don&#39;t settle within the boxes; they sculpt new realities 🌟🎨🌄</p>
                                        <p className="names">Head : Asmi Rambhia<br />Sub Head : Aditi Salvi</p>

                                    </div>
                                    <div className="dept-pic-container">
                                        <div style={{ borderRadius: '25px', overflow: 'hidden' }}>
                                            <Image src="/deptImages/creatives.png" layout="responsive" width={400} height={300}></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="dept-container-left">
                                <div className="sides-container-left">
                                    <div className="dept-pic-container">
                                        <div style={{ borderRadius: '25px', overflow: 'hidden' }}>
                                            <Image src="/deptImages/devs.png" layout="responsive" width={400} height={300}></Image>
                                        </div>
                                    </div>
                                    <div className="dept-text-container">
                                        <p className="titleone">Developments</p>
                                        <p className="titletwo">Coding has never been cooler⚡💻</p>
                                        <p className="names">Head : Kaniel Pinto<br />Sub Head : Utkarsh Sharma</p>

                                    </div>
                                </div>
                            </div>

                            <div className="dept-container-right">
                                <div className="sides-container-right">
                                    <div className="dept-text-container">
                                        <p className="titleone">Events &#40;I.T.&#41;</p>
                                        <p className="titletwo">Ctrl + Alt + Create💻✨</p>
                                        <p className="names">Head : Jadyn Braganza<br />Sub Head : Isha Agrawal</p>

                                    </div>
                                    <div className="dept-pic-container">
                                        <div style={{ borderRadius: '25px', overflow: 'hidden' }}>
                                            <Image src="/deptImages/eventsIT.png" layout="responsive" width={400} height={300}></Image>
                                        </div>                                    </div>
                                </div>
                            </div>

                            <div className="dept-container-left">

                                <div className="sides-container-left">
                                    <div className="dept-pic-container">
                                        <div style={{ borderRadius: '25px', overflow: 'hidden' }}>
                                            <Image src="/deptImages/eventsStats.png" layout="responsive" width={400} height={300}></Image>
                                        </div>
                                    </div>
                                    <div className="dept-text-container">
                                        <p className="titleone">Events &#40;Stats&#41;</p>
                                        <p className="titletwo">Its a guaranteed success, they should know they&#39;ve run the numbers 📊📈</p>
                                        <p className="names">Head : Naina Sisodia<br />Sub Head : Antara Zaveri</p>

                                    </div>
                                </div>
                            </div>

                            <div className="dept-container-right">

                                <div className="sides-container-right">
                                    <div className="dept-text-container">
                                        <p className="titleone">Finance</p>
                                        <p className="titletwo">They may be the finance bros of techstatic, but we know we can 	&#39;bank	&#39; on them🫡💸</p>
                                        <p className="names">Coordinator : Shravani Kale<br />Coordinator : Meghna Patil</p>

                                    </div>
                                    <div className="dept-pic-container">
                                        <div style={{ borderRadius: '25px', overflow: 'hidden' }}>
                                            <Image src="/deptImages/finance.png" layout="responsive" width={400} height={300}></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="dept-container-left">
                                <div className="sides-container-left">
                                    <div className="dept-pic-container">
                                        <div style={{ borderRadius: '25px', overflow: 'hidden' }}>
                                            <Image src="/deptImages/fnd.png" layout="responsive" width={400} height={300}></Image>
                                        </div>
                                    </div>
                                    <div className="dept-text-container">
                                        <p className="titleone">FnD</p>
                                        <p className="titletwo">Capturing experiences, memories & Quirkiness 📸🫣</p>
                                        <p className="names">Head : Lijoy Mathew<br />Sub Head : Katia Nicole Teles<br />Sub Head : Tejas Thakur</p>

                                    </div>
                                </div>
                            </div>

                            <div className="dept-container-right">

                                <div className="sides-container-right">
                                    <div className="dept-text-container">
                                        <p className="titleone">Marketing</p>
                                        <p className="titletwo">The bread winners of Techstatic 🍞💼</p>
                                        <p className="names">Head : Shubham Mashalkar<br />Sub Head : Sriram Ramesh<br />Sub Head : Kanak Suryavanshi</p>


                                    </div>
                                    <div className="dept-pic-container">
                                        <div style={{ borderRadius: '25px', overflow: 'hidden' }}>
                                            <Image src="/deptImages/mktg.png" layout="responsive" width={400} height={300}></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dept-container-left">
                                <div className="sides-container-left">
                                    <div className="dept-pic-container">
                                        <div style={{ borderRadius: '25px', overflow: 'hidden' }}>
                                            <Image src="/deptImages/venman.png" layout="responsive" width={400} height={300}></Image>
                                        </div>
                                    </div>
                                    <div className="dept-text-container">
                                        <p className="titleone">VenMan</p>
                                        <p className="titletwo">Fluent in both event orchestration and coding languages, get you a team that can do both. 💪🦾</p>
                                        <p className="names">Head : Tanishq Parab<br />Sub Head : Pratik Kingre<br />Sub Head : Arul Babu<br />Sub Head : Jerry Mathew</p>
                                    </div>
                                </div>
                            </div>

                            <div className="dept-container-right">
                                <div className="sides-container-right">
                                    <div className="dept-text-container">
                                        <p className="titleone">PR</p>
                                        <p className="titletwo">Hype kardo guys&#33;&#33;&#33;</p>
                                        <p className="names">Head : Krishna Agrawal<br />Sub Head : Shreya Joshi</p>



                                    </div>
                                    <div className="dept-pic-container">
                                        <div style={{ borderRadius: '25px', overflow: 'hidden' }}>
                                            <Image src="/deptImages/pr.png" layout="responsive" width={400} height={300}></Image>
                                        </div>                                    </div>
                                </div>
                            </div>


                            <div className="dept-container-left">

                                <div className="sides-container-left">
                                    <div className="dept-pic-container">
                                        <div style={{ borderRadius: '25px', overflow: 'hidden' }}>
                                            <Image src="/deptImages/conclave.png" layout="responsive" width={400} height={300}></Image>
                                        </div>
                                    </div>
                                    <div className="dept-text-container">
                                        <p className="titleone">Conclave</p>
                                        <p className="titletwo">Techies UNITE &#33;&#33; 💻🔗</p>
                                        <p className="names">Head : Naman Jain<br />Sub Head : Karen Kurien<br />Sub Head : Kiran Bende</p>

                                    </div>
                                </div>
                            </div>


                        </div>     {/*vertical-container closes          */}

                        <Footer></Footer>
                    </div>  {/*main-container closes          */}

                </motion.div>
            </AnimatePresence >
        </div >
    )
}