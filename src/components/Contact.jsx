import { CONTACT } from '../constants'
const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <h2 className='my-10 text-center text-4xl'>Get In Touch</h2>
            <div className="text-center tracking-tighter">
                <p className="my-4">{CONTACT.address}</p>
                <a href={`mailto:${CONTACT.email}`} className="border-b m-1">{CONTACT.email}</a>
                <a href={CONTACT.github} className="border-b m-1">Github</a>
                <a href={CONTACT.linkedin} className="border-b m-1">Linkedin</a>
            </div>
        </div>
    )
}

export default Contact