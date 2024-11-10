import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <div className='border-b border-neutral-800 pb-4'>
            <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>Projects</motion.h2>
            <div className="">
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1 }} className="w-full lg:w-1/4">
                            <img src={project.image} alt={project.title} width={150} height={150} className='mb-6 rounded' />
                        </motion.div>

                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4 flex flex-wrap lg:flex-none">
                            <h6 className="mb-2 text-2xl font-bold">{project.title}</h6>
                            <p className="text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className={`mr-2 mt-4 rounded h-8  bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800`}>{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects