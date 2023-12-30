import "@/app/globals.css"
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import "@/styles/workforce.css"


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
                </div>
            </motion.div>
        </AnimatePresence >
        </div>
    )
}