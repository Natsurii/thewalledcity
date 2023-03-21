import { motion } from "framer-motion"

function DestinationCard({destimage, destname}) {

    return (
        <motion.div className="destcard rectcard" 
        whileHover={{
            scale: 1.25,
            rotate: -5
        }}

        style={{ "--img": `url(${destimage})`}}>
            <h3>{destname}</h3>
        </motion.div>
    )
}

export default DestinationCard