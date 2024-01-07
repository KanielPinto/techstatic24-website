
import React from 'react';
import "@/app/globals.css";
import { motion, AnimatePresence, px } from "framer-motion";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import "@/styles/workforce.css";
import Slider from "@/components/Slider";
import '@/styles/merchendise.css';
import Image from 'next/image';


export default function Merchendise() {
  const router = useRouter();
  

  
  const merchandiseItems = [
    {
      name: "Shirt one",
      price: 500,
      description:
        "A classic button-down shirt crafted from premium cotton, offering a perfect blend of style and comfort. With meticulous attention to detail in its design and stitching, this shirt showcases versatility in its timeless appeal.",
      images: ['/shirt.jpg', '/shirt 2.png'],
    },
    {
      name: "Fest jacket",
      price: 1000,
      description:
        "A sleek and modern jacket crafted from high-quality materials, seamlessly blending style and warmth for a fashion-forward statement.",
        images: ['/jacket3.jpg', '/jacket1.jpg'],
    },
  ];

 
  const sliderContent = merchandiseItems.map((item, index) => (
    <>
    <div className='eventscontainer'>
      <div key={`merchandise-${index}`} className="merchandise">
      <h1>{item.name}</h1>
      <br />
      <p>Price: {item.price}</p>
      <p>Description: {item.description}</p>
      <br />
      <button className='buttonshop'>Buy Now</button>
     
    </div>
     <div>
     {item.images.map((image, imageIndex) => (
        <Image key={`image-${imageIndex}`} src={image} width={250} height={225} />
      ))}
    </div>

    </div>
   
    </>
    
   
  ));

  
  return (
    <div className="main-container">
      <AnimatePresence exitBeforeEnter={false}>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {},
          }}
        >
          
        </motion.div>
      </AnimatePresence>
      
      
      <Slider items={sliderContent} />
    </div>
  );
}
