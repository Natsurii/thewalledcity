import { motion } from 'framer-motion';
import fort from '/assets/fortvec.svg'

function Hero(){

    return (
        <div className="hero sidepad">
            <div className="hero__text">
                <motion.h1
                initial={{ x: -1500 }}
                animate={{ x: 0, y:0 }}
                transition={{ ease: "easeOut", duration: 1.5 }}>
                    The Walled City
                </motion.h1>
                
                <motion.p
                initial = {{ opacity:0 }}
                animate = {{ opacity: 1 }}
                transition = {{ ease: "easeOut", duration: 5 }}>
                    Experience the magic of the historic walled city of Intramuros, where the past meets the present.
                </motion.p>

                <motion.div className="button"
                 whileHover={{ scale: 1.2 }}>
                    <a href="https://intramuros.gov.ph/guides/">Take a tour</a>
                </motion.div>
            </div>

            <motion.img 
            animate =
                {{
                    x: [0, 150, -150, 0],
                    scale: [0, 1.25, 1.25, 1]
                }}

            transition = {{ type: "spring", stiffness: 150 }}
           
            src={fort} alt="Fort Santiago Vector" />

        </div>
    )
}

export default Hero;