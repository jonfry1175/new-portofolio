import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa'
import logo from '../assets/jonLogo.png'

const NavBar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className='mx-1 w-28 h-15' src={logo} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://linkedin.com/in/jonfry-agung-marbun" target="_blank" >
                    <FaLinkedin />
                </a>
                <a href="https://github.com/jonfry1175" target="_blank" >
                    <FaGithub />
                </a>
                <a href="https://discord.com/users/1043162437467258920" target='_blank'>
                    <FaDiscord />
                </a>
            </div>
        </nav>
    )
}

export default NavBar