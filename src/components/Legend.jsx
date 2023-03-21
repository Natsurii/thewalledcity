import { delay, motion } from "framer-motion";
function Legend() {

    const pAnimationVariant = {
        offscreen: {
            x: -300
          },
          onscreen: {
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.3,
              duration: 1.5
            }
          }
    }

    const paragraphs = [
        "Intramuros, also known as the Walled City, is a historic district located within Manila, Philippines. The city was built in the 16th century during the Spanish colonial period, and served as the center of political, religious, and military power in the Philippines for over three centuries. The walls were constructed by the Spanish conquistador Miguel Lopez de Legazpi and were completed in 1571. The walls were designed to protect the city from attacks by foreign invaders and to defend the Spanish colonial government against the local population.",
        "Throughout its history, Intramuros has witnessed numerous significant events, including battles, revolutions, and the struggle for Philippine independence. During World War II, the city was heavily bombed and devastated, leaving much of its original architecture and landmarks destroyed.",
        "Today, Intramuros has been restored and serves as a cultural and historical landmark for both locals and tourists alike. The city is home to various attractions such as Fort Santiago, Casa Manila, San Agustin Church, and many more. Visitors can also explore the city's historic walls and gates, which offer stunning views of the surrounding city and the Manila Bay. Intramuros is not just a site of historical significance, but also a living and breathing part of modern Manila, blending old-world charm with modern amenities, making it a must-visit destination for anyone interested in Philippine history and culture."
    ]

    return (
        <div className="legend sidepad">
            <motion.h2
            initial = {{ opacity: 0 }}
            whileInView ={{opacity: 1 }}
            transition = {{ delay: 2 }}>
                The Legend of Walled City
            </motion.h2>

            {paragraphs.map((par) => {
                    return (
                        <motion.p initial="offscreen" whileInView="onscreen" viewport={{once: true}} variants={pAnimationVariant}>
                            {par}
                        </motion.p>
                        )
                    }
                )       
            }
            
        </div>
    )
}

export default Legend;