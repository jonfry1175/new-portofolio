import { RiReactjsLine, RiVuejsLine, RiNodejsLine } from "react-icons/ri"
import { SiExpress, SiPostgresql, SiCypress } from "react-icons/si"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: { y: [10, -10], transition: { duration: duration, ease: 'linear', repeat: Infinity, repeatType: 'reverse' } }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.5 }} className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiNodejsLine className='text-7xl text-green-500' />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiVuejsLine className="text-7xl text-[#235840]" />
                </motion.div>


                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className='text-7xl text-[#ffc107]' />
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPostgresql className='text-7xl  text-sky-400' />
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiCypress className='text-7xl  text-gray-400' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies