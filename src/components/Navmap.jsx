import { motion } from 'framer-motion';
import NavigationalMap from '/assets/intrammaps 1.png'


function Navmap(){

    return (
        <div className="navmap sidepad">
           <h2>Navigational Map</h2>
           <motion.img 
           whileHover={{
            scale: 1.25,
            rotate: -3
           }}
           
           src={NavigationalMap} />
        </div>
    )
}

export default Navmap;