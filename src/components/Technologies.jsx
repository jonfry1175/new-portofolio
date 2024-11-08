import { RiReactjsLine, RiVuejsLine, RiNodejsLine } from "react-icons/ri"
import { SiExpress, SiPostgresql } from "react-icons/si"

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h2 className='my-20 text-center text-4xl'>Technologies</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiNodejsLine className='text-7xl text-green-500' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiVuejsLine className="text-7xl text-[#235840]" />
                </div>


                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className='text-7xl text-[#ffc107]' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPostgresql className='text-7xl  text-sky-400' />
                </div>
            </div>
        </div>
    )
}

export default Technologies