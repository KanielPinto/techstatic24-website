import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { getPosts } from "@/lib/api";
import '@/styles/gallery.css'

export default function GalleryPage({ posts }) {
    console.log(posts);
    let title = "Gallery";
    let subtitle = "A Glimpse into our Events";
    return (
        <>
            <div>

                <div className="main-container">
                    <PageHeader title={title} subtitle={subtitle}></PageHeader>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "Techstatic through FnD's lens ",
                            1000,

                        ]}
                        wrapper="span"
                        speed={20}
                        repeat={Infinity}
                        className="subtitle"
                    />
                    <div className="vertical-container">

                        {posts?.slice(1, posts.length).map(({ imageLink, img_title, venue, date, description }) => {
                                <div key={img_title} className="gallery-container">
                                    <div className="img-container">
                                        <div style={{ borderRadius: '25px', overflow: 'hidden' }}>
                                            <Image src={imageLink} layout="responsive" width={400} height={300}></Image>
                                        </div>
                                    </div>
                                    <div className="img-text-container">
                                        <div className="img-title">{img_title}</div>
                                        <div className="img-subtitle">{venue}, {date}</div>
                                        <div className="img-desc">{description}</div>
                                    </div>
                                </div>
                            })
                        }
                    </div>     {/*vertical-container closes          */}

                    <Footer></Footer>
                </div>  {/*main-container closes          */}


            </div >
        </>
    )
}


export async function getStaticProps(context) {
    const posts = await getPosts();
    return {

        props: {
            posts
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
        revalidate: 1, // In seconds
    };
}