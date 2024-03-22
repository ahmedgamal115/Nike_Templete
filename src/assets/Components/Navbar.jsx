import websiteLogo from '../Icons/nike.png'
import navIcon from '../Icons/pngwing.com (4).png'
import { NavbarLinks } from '../Constants'


const Navbar = () => {
  return (
    <header className="padding-x py-1 absolute  z-50 w-full">
        <nav className='flex justify-between 
        items-center 
        max-container'>
            <a href="#" className=''>
                <img 
                src={websiteLogo}
                alt="logo" 
                width={90}
                height={29}
                />
            </a>
            <ul className='flex flex-1 justify-end items-center
            gap-16 max-lg:hidden'>
                {NavbarLinks.map((NavbarLink)=>(
                    <li key={NavbarLink.label}>
                        <a 
                        href={NavbarLink.href}
                        className='font-Garamond leading-normal 
                        text-xl text-slate-gray'
                        >{NavbarLink.label}</a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block cursor-pointer'>
                    <img 
                    src={navIcon} 
                    alt="navIcon" 
                    width={80}
                    height={80}
                    />
            </div>
        </nav>
    </header>
  )
}

export default Navbar