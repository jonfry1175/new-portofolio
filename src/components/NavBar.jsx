import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa'
import logo from '../assets/jonLogo.png'

const NavBar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className='mx-1 w-28 h-15' src={logo} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaLinkedin />
                <FaGithub />
                <FaDiscord />
            </div>
        </nav>
    )
}

export default NavBar