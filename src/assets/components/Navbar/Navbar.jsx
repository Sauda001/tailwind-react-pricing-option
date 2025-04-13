import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
    {
      id: 1,
      name: "Home",
      url: "/home"
    },
    {
      id: 2,
      name: "About",
      url: "/about"
    },
    {
      id: 3,
      name: "Services",
      url: "/services"
    },
    {
      id: 4,
      name: "Projects",
      url: "/projects"
    },
    {
      id: 5,
      name: "Contact",
      url: "/contact"
    }
  ];
  

const Navbar = () => {
    const [open,setOpen]=useState(false)
    const Links = navigationData.map(route=> <Link key={route.id} route={route}></Link>)
    return (
        <nav className='flex justify-between mx-10'>

            <span className='flex' onClick={()=>setOpen(!open)}>
                {open? <X className='md:hidden'></X>:<Menu className='md:hidden'></Menu>}
            
            <ul className={`md:hidden absolute duration-1000 ${open? 'top-8': '-top-40'} bg-slate-500`}>
                {
                    Links
                }
            </ul>
            <h1 className='ml-4'>My navbar</h1>
            </span>

            <ul className='md:flex hidden'>
                {
                    Links
                }
            </ul>

            {/* <ul>
                {
                    navigationData.map(route=>
                    <li><a href={route.url}>{route.name}</a></li>
                )}
            </ul> */}



            {/* <ul className='flex gap-4'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul> */}

            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;