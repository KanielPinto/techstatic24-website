import "@/app/globals.css"
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import "@/styles/sponsers.css";
import Image from 'next/image';


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
                        <Image src="https://cdn.dailypicked.com/wp-content/uploads/2019/08/natural-ice-cream-logo.jpeg"  className="c-card__image" alt="Card Image" /> 
                      </header>
  
                      <div className="c-card__body">
                          <h2 className="c-card__title">
                             Naturals
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
                        <Image src="https://th.bing.com/th/id/OIP.TPGX2n5t4zj56NM58fUO2wHaEK?rs=1&pid=ImgDetMain"  className="c-card__image" alt="Card Image" /> 
                      </header>
  
                      <div className="c-card__body">
                          <h2 className="c-card__title">
                             Swiggy
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
                        <Image src="https://logodix.com/logo/590190.jpg"  className="c-card__image" alt="Card Image" /> 
                      </header>
  
                      <div className="c-card__body">
                          <h2 className="c-card__title">
                             Airtel
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
                        <Image src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1968-1999.png"  className="c-card__image" alt="Card Image" /> 
                      </header>
  
                      <div className="c-card__body">
                          <h2 className="c-card__title">
                             H & M
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
                        <Image src="https://www.unicothings.com/wp-content/uploads/2021/08/Croc-Slogans-1140x665.jpg"  className="c-card__image" alt="Card Image" /> 
                      </header>
  
                      <div className="c-card__body">
                          <h2 className="c-card__title">
                             Crocs
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
                        <Image src="https://logolook.net/wp-content/uploads/2021/01/Dabur-Logo.png"  className="c-card__image" alt="Card Image" /> 
                      </header>
  
                      <div className="c-card__body">
                          <h2 className="c-card__title">
                             Dabar
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