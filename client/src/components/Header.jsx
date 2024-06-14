import { Navbar, TextInput, Button } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch} from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa'

export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        
        {/* Logo Section */}
        <Link to="/" className='self-center whitespace-nowrap test-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-300 rounded-lg text-white'> Edward's </span> Blog
        </Link>

        {/* Search Section */}
        <form>
            <TextInput
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            >
            </TextInput>
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch></AiOutlineSearch>
        </Button>

        <div className='flex gap-2 md:order-2'>
            {/* Transition Moon or Sun Button */}
            <Button className='w-12 h-10 hidden sm:inline' color="gray" pill>
                <FaMoon></FaMoon>
            </Button>
            <Link to='/sign-in'>
                <Button gradientDuoTone='OrangeToYellow'>Sign In</Button>
            </Link>
            
            {/* Navbar.Toggle should work with below Navbar.Collapse */}
            <Navbar.Toggle/>
        </div>

        {/* Menu Section */}
        <Navbar.Collapse>
            <Navbar.Link active={path === "/"} as={'div'}>
                <Link to ='/'>
                    Home
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/projects"} as={'div'}>
                <Link to ='/projects'>
                    Projects
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/about"} as={'div'}>
                <Link to ='/about'>
                    About
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>

    </Navbar>
  )
}
