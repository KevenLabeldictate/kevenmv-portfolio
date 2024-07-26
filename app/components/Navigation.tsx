'use client'
import React, { useEffect, useRef, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';



const Navigation = () => {
    //Menu burger
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    //Menu Dropdown
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    // Función para alternar la visibilidad del dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    //Menu Dropdown2
    const [isOpen2, setIsOpen2] = useState(false);
    const dropdownRef2 = useRef<HTMLDivElement>(null);
    // Función para alternar la visibilidad del dropdown
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
        if (dropdownRef2.current && !dropdownRef2.current.contains(event.target as Node)) {
            setIsOpen2(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

  return (
    <div className="flex flex-col-reverse items-center ">	
            
        <nav className={`text-lg items-start flex-col lg:flex-row lg:max-h-screen lg:overflow-visible lg:space-x-20 lg:transition-none transition-max-height ease-in-out duration-300 ${menuOpen ? 'flex lg:flex' : 'hidden lg:flex'}`}>
            
            {/* design  */}
            <Link href="#" className="font-semibold text-stone-800 no-underline hover:text-stone-600 hover:text-underline ease-in-out duration-150">
                Home
            </Link>
            <Link href="#about" className="font-semibold text-stone-800 no-underline hover:text-stone-600 hover:text-underline ease-in-out duration-150">
                About
            </Link>
            <Link href="#projects" className="font-semibold text-stone-800 no-underline hover:text-stone-600 hover:text-underline ease-in-out duration-150">
                Projects
            </Link>
            <Link href="#contact" className="font-semibold text-stone-800 no-underline hover:text-stone-600 hover:text-underline ease-in-out duration-150">
                Contact
            </Link>
            {/* tools  */}        
        </nav>
        {/* Mobile Menu */}
        <button onClick={toggleMenu} className={`lg:hidden`}>
            <IoMenu />
        </button>
        
    </div>
  )
}

export default Navigation