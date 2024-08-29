'use client'
import Link from "next/link"
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";




type INavbarProps={
    className?: string
}

export default function Tarja(props:INavbarProps){
    
    return(
        <div className={`hidden w-[100vw] px-5  text-[.9rem] h-[3.5rem] bg-gray-900 lg:flex items-center text-white justify-between`}>
            <ul className="flex gap-10 text-white">
                <li className="flex gap-2">
                <Link href="/" className="hover:text-blue-500 hover:rounded-ful">
                8:00- 20:00 (TODOS OS DIAS)
                </Link>
                </li>
                <li className="flex gap-2">
                <Link href="/" className="hover:text-blue-500 hover:rounded-ful">
                +455 91 875990000 /98 76688 8999
                </Link>
                </li>
                <li className="flex gap-2">
                    <Link href="/" className="hover:text-blue-500 hover:rounded-ful">
                    gramsaconsultoria@gmail.com
                    </Link>
                </li>
                
            </ul>
             <div  className="flex gap-2 pr-4 text-white items-center text-[1.2rem]">
            <span className="text-[1rem]"> Redes sociais:</span>
            <Link href="/">            
                 <FaInstagram className="hover:text-blue-500 hover:rounded-ful"/>
            </Link> 
            <Link href="/" >            
                 <AiOutlineLinkedin className="hover:text-blue-500 hover:rounded-ful"/>
            </Link> 
            <Link href="/" >            
                 <MdOutlineFacebook className="hover:text-blue-500 hover:rounded-ful"/>
            </Link> 
            </div>
        </div>
    )}