import { RiReactjsLine, RiVuejsLine, RiNodejsLine } from "react-icons/ri"
import { SiExpress, SiPostgresql, SiCypress } from "react-icons/si"
import { FiZap, FiCpu } from "react-icons/fi"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: { y: [10, -10], transition: { duration: duration, ease: 'linear', repeat: Infinity, repeatType: 'reverse' } }
})

// Tooltip component
const IconWithTooltip = ({ icon: Icon, color, tooltip, duration }) => {
    return (
        <motion.div
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className='relative rounded-2xl border-4 border-neutral-800 p-4 group'
        >
            <Icon className={`text-7xl ${color}`} />
            <div className="absolute left-1/2 -translate-x-1/2 -top-12 bg-neutral-800 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {tooltip}
            </div>
        </motion.div>
    )
}

IconWithTooltip.propTypes = {
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired
}

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.5 }} className='flex flex-wrap items-center justify-center gap-4'>
                <IconWithTooltip icon={RiNodejsLine} color="text-green-500" tooltip="Node.js" duration={2.5} />
                <IconWithTooltip icon={RiReactjsLine} color="text-cyan-400" tooltip="React.js" duration={3} />
                <IconWithTooltip icon={RiVuejsLine} color="text-[#235840]" tooltip="Vue.js" duration={2.5} />
                <IconWithTooltip icon={SiExpress} color="text-[#ffc107]" tooltip="Express.js" duration={5} />
                <IconWithTooltip icon={SiPostgresql} color="text-sky-400" tooltip="PostgreSQL" duration={2} />
                <IconWithTooltip icon={SiCypress} color="text-gray-400" tooltip="Cypress" duration={6} />
                {/* <IconWithTooltip icon={SiPm2} color="text-blue-500" tooltip="PM2 Process Manager" duration={4} /> */}
                <IconWithTooltip icon={FiZap} color="text-purple-500" tooltip="WebSocket" duration={3.5} />
                <IconWithTooltip icon={FiCpu} color="text-red-500" tooltip="MQTT Protocol" duration={4.5} />
            </motion.div>
        </div>
    )
}

export default Technologies
