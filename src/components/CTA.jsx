import { motion } from "framer-motion"
function CTA(){

    return (
        <div className="cta ctabox">
            <h2>Step back in time and discover the stories hidden within Intramuros' walls.</h2>

            <motion.div className="button"
                whileHover={{ scale: 1.2 }}>
                <a href="https://intramuros.gov.ph/packages/">Book Now!</a>
            </motion.div>
        </div>
        )
    }

export default CTA