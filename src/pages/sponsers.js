import "@/app/globals.css"
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import "@/styles/sponsers.css";
import Image from "next/image"; 


export default function WorkforcePage() {
    const router = useRouter();
    const title = "Sponsers";
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
               
                    <section className="card-container">
                    <article className="c-cardd">
      
                      <header className="c-card__header">
                      <Image src="/Seagate.jpg"  alt="seagate image " className="c-card__image" width={500} height={300} quality={80}/> 
                       
                      </header>
  
                      <div className="c-card__body">
                          <h2 className="c-card__title">
                             Seagate
                          </h2>
                          <br />
     
        
                      <p className="c-card__intro" >
                             Naturals Honestly Crafted Ice-Cream is an authentic beacon in India's industry. Crafted with care, each scoop embodies excellence - 100% Pure Milk, no preservatives, and no artificial colors. With 50+ flavors, it caters to 100+ cities.
                        </p>
                      </div>
  
                      <div className="icons">
       
                      <button>
                          <a href="#" className="instagram-link"></a>
                      </button>

       
                         {/* <button>
                           <a href="#" className="link"> </a>
                         </button>
                         <button>
                          <ion-icon name="logo-behance"></ion-icon>
                         </button> */}
                    </div>
     
  
                     </article>

                     <article className="c-cardd">
      
                      <header className="c-card__header">
                      <Image src="/Finstat Academy.jpg"  alt="finstat academy  image " className="c-card__image" width={500} height={300} quality={80}/> 
                      </header>
  
                      <div className="c-card__body">
                          <h2 className="c-card__title">
                             Finstat Academy
                          </h2>
                          <br />
     
        
                      <p className="c-card__intro">
                             Naturals Honestly Crafted Ice-Cream is an authentic beacon in India's industry. Crafted with care, each scoop embodies excellence - 100% Pure Milk, no preservatives, and no artificial colors. With 50+ flavors, it caters to 100+ cities.
                        </p>
                      </div>
  
                      <div className="icons">
       
                      <button>
                          <a href="#" className="instagram-link"></a>
                      </button>

       
                         {/* <button>
                           <a href="#" className="link"> </a>
                         </button>
                         <button>
                          <ion-icon name="logo-behance"></ion-icon>
                         </button> */}
                    </div>
     
  
                     </article>

                     <article className="c-cardd">
      
                      <header className="c-card__header">
                      <Image src="/PEA.png"  alt="PEA  image " className="c-card__image" width={500} height={300} quality={80}/> 
                      </header>
  
                      <div className="c-card__body">
                          <h2 className="c-card__title">
                             Providence Education Advisory
                          </h2>
                          <br />
     
        
                      <p className="c-card__intro">
                             Naturals Honestly Crafted Ice-Cream is an authentic beacon in India's industry. Crafted with care, each scoop embodies excellence - 100% Pure Milk, no preservatives, and no artificial colors. With 50+ flavors, it caters to 100+ cities.
                        </p>
                      </div>
  
                      <div className="icons">
       
                      <button>
                          <a href="#" className="instagram-link"></a>
                      </button>

       
                         {/* <button>
                           <a href="#" className="link"> </a>
                         </button>
                         <button>
                          <ion-icon name="logo-behance"></ion-icon>
                         </button> */}
                    </div>
     
  
                     </article>

                     <article className="c-cardd">
      
                      <header className="c-card__header">
                      <Image src="/BEBytes.jpg"  alt="finstat academy  image " className="c-card__image" width={450} height={300} quality={80}/> 
                      </header>
  
                      <div className="c-card__body">
                          <h2 className="c-card__title">
                             B.E Bytes
                          </h2>
                          <br />
     
        
                      <p className="c-card__intro">
                             Naturals Honestly Crafted Ice-Cream is an authentic beacon in India's industry. Crafted with care, each scoop embodies excellence - 100% Pure Milk, no preservatives, and no artificial colors. With 50+ flavors, it caters to 100+ cities.
                        </p>
                      </div>
  
                      <div className="icons">
       
                      <button>
                          <a href="#" className="instagram-link"></a>
                      </button>

       
                         {/* <button>
                           <a href="#" className="link"> </a>
                         </button>
                         <button>
                          <ion-icon name="logo-behance"></ion-icon>
                         </button> */}
                    </div>
     
  
                     </article>

                     <article className="c-cardd">
      
                      <header className="c-card__header">
                      <Image src="/Cinnabon.png"  alt="finstat academy  image " className="c-card__image" width={450} height={300} quality={80}/> 
                      </header>
  
                      <div className="c-card__body">
                          <h2 className="c-card__title">
                            Cinnabon
                          </h2>
                          <br />
     
        
                      <p className="c-card__intro">
                             Naturals Honestly Crafted Ice-Cream is an authentic beacon in India's industry. Crafted with care, each scoop embodies excellence - 100% Pure Milk, no preservatives, and no artificial colors. With 50+ flavors, it caters to 100+ cities.
                        </p>
                      </div>
  
                      <div className="icons">
       
                      <button>
                          <a href="#" className="instagram-link"></a>
                      </button>

       
                         {/* <button>
                           <a href="#" className="link"> </a>
                         </button>
                         <button>
                          <ion-icon name="logo-behance"></ion-icon>
                         </button> */}
                    </div>
     
  
                     </article>

                     <article className="c-cardd">
      
                      <header className="c-card__header">
                      <Image src="/Hactify.png"  alt="finstat academy  image " className="c-card__image" width={500} height={300} quality={80}/> 
                      </header>
  
                      <div className="c-card__body">
                          <h2 className="c-card__title">
                             Hactify
                          </h2>
                          <br />
     
        
                      <p className="c-card__intro">
                             Naturals Honestly Crafted Ice-Cream is an authentic beacon in India's industry. Crafted with care, each scoop embodies excellence - 100% Pure Milk, no preservatives, and no artificial colors. With 50+ flavors, it caters to 100+ cities.
                        </p>
                      </div>
  
                      <div className="icons">
       
                      <button>
                          <a href="#" className="instagram-link"></a>
                      </button>

       
                         {/* <button>
                           <a href="#" className="link"> </a>
                         </button>
                         <button>
                          <ion-icon name="logo-behance"></ion-icon>
                         </button> */}
                    </div>
     
  
                     </article>

                     <article className="c-cardd">
      
                      <header className="c-card__header">
                      <Image src="/A1_samosas.png"  alt="finstat academy  image " className="c-card__image" width={500} height={300} quality={80}/> 
                      </header>
  
                      <div className="c-card__body">
                          <h2 className="c-card__title">
                             A1 samosas
                          </h2>
                          <br />
     
        
                      <p className="c-card__intro">
                             Naturals Honestly Crafted Ice-Cream is an authentic beacon in India's industry. Crafted with care, each scoop embodies excellence - 100% Pure Milk, no preservatives, and no artificial colors. With 50+ flavors, it caters to 100+ cities.
                        </p>
                      </div>
  
                      <div className="icons">
       
                      <button>
                          <a href="#" className="instagram-link"></a>
                      </button>

       
                         {/* <button>
                           <a href="#" className="link"> </a>
                         </button>
                         <button>
                          <ion-icon name="logo-behance"></ion-icon>
                         </button> */}
                    </div>
     
  
                     </article>

                     <article className="c-cardd">
      
                      <header className="c-card__header">
                      <Image src="/Crucibo.png"  alt="finstat academy  image " className="c-card__image" width={450} height={300} quality={80}/> 
                      </header>
  
                      <div className="c-card__body">
                          <h2 className="c-card__title">
                             Crucibo
                          </h2>
                          <br />
     
        
                      <p className="c-card__intro">
                             Naturals Honestly Crafted Ice-Cream is an authentic beacon in India's industry. Crafted with care, each scoop embodies excellence - 100% Pure Milk, no preservatives, and no artificial colors. With 50+ flavors, it caters to 100+ cities.
                        </p>
                      </div>
  
                      <div className="icons">
       
                      <button>
                          <a href="#" className="instagram-link"></a>
                      </button>

       
                         {/* <button>
                           <a href="#" className="link"> </a>
                         </button>
                         <button>
                          <ion-icon name="logo-behance"></ion-icon>
                         </button> */}
                    </div>
     
  
                     </article>



                     
                     
                 </section>
                </div>
            </motion.div>
        </AnimatePresence >
        </div>
    )
}