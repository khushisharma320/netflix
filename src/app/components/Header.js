"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlinePlaylistRemove } from "react-icons/md";


const Header = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            name : "Home",
            href : "/"
        },
        {
            id: 2,
            name : "About",
            href : "/about"
        },
        {
            id: 3,
            name : "Movies",
            href : "/movies"
        },
        {
            id: 4,
            name : "Contact",
            href : "/contact"
        },
    ];

  return (
    <header className="shadow-lg shadow-slate-800 w-full h-20">
        <div className="flex justify-between pt-6 px-20">
            <h4 className="text-2xl text-purple-800 font-extrabold">Netflix</h4>
            <ul className="hidden md:flex gap-6 pt-1">
                {
                    links.map(({id, name, href})=>{
                        return(

                            <li key={id} className="hover:text-purple-800 hover:font-semibold"><Link href={href}>{name}</Link> </li>
                        )
                    })
                }     
            </ul>

            <div onClick={()=>setNav(!nav)} className="md:hidden z-20">
                {nav ? <MdOutlinePlaylistRemove size={30}/> : <IoMdMenu size={30}/>}</div>

            {
                nav && 
                <ul className="w-full h-full absolute top-0 left-0 bg-white text-center pt-40">
                    {
                    links.map(({id, name, href})=>{
                        return(

                            <li key={id} className="hover:text-purple-800 hover:font-semibold pt-10"><Link onClick={()=>setNav(!nav)} href={href}>{name}</Link> </li>
                        )
                    })
                }   
                </ul>
            }
        </div>
    </header>
  )
}

export default Header;
