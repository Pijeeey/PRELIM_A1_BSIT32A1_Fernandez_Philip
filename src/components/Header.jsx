
import { useState } from "react";
import logo from "../assets/logo.png";



function Header() {
     const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
      <header className="
      flex justify-between 
      text-black
      py-3 px-5
      md:px-32 bg-gradient-to-r from-yellow-500 to-blue-300
      drop-shadow-md">
  
      <div className="flex justify-between gap-3">
      <a href="#">
        <img src={logo}  className="w-16
        hover:scale-105 transition-all" /> 
      </a>
      <p className="text-3xl  py-3 px-2 font-serif">Lyceum of Alabang</p>
      </div>
  
      
      <ul className="hidden xl:flex items-center
      gap-6 font-semibold text-base ">
    <li className="p-3 hover:bg-yellow-100 hover:item-stretch hover:text-black 
        rounded-md transition-all cursor-pointer ">
        <i className="bx-fw bx bx-home bx-sm bx-tada-hover"></i> HOME</li>
  
       <li className="p-3 hover:bg-yellow-100 hover:text-black
        rounded-md transition-all cursor-pointer">
        <i className="bx-fw bx bx-book-open bx-sm bx-tada-hover"></i>ABOUT</li>
        
      <li className="p-3 hover:bg-yellow-100 hover:text-black
        rounded-md transition-all cursor-pointer">
        <i className="bx-fw bx bx-phone bx-sm bx-tada-hover"></i>CONTACT US</li>
      </ul>
     
      
      <i className="bx bx-menu xl:hidden block 
      text-5xl cursor-pointer py-2" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
  
      <div className={`absolute xl:hidden top-20
        left-0 w-full 
        bg-gradient-to-r from-yellow-500 to-blue-300
        drop-shadow-mdflex flex-col item-center
        gap-6 font semibold text-lg transform transition-transform
        ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
  
        style={{transition: "transoform 0.3 ease, opacity 0.3 ease" }}>
        
        <li className="list-none w-full text-center p-4 bg-green hover:text-white
        transition-all cursor-pointer ">
        <i className="bx-fw bx bx-home bx-sm bx-tada-hover"></i>HOME</li>
  
        <li className="list-none w-full text-center p-4 bg-green hover:text-white
        transition-all cursor-pointer ">
        <i className="bx-fw bx bx-book-open bx-sm bx-tada-hover"></i>ABOUT</li>
  
        <li className="list-none w-full text-center p-4 bg-green hover:text-white
        transition-all cursor-pointer ">
         <i className="bx-fw bx bx-phone bx-sm bx-tada-hover"></i>CONTACT US</li>
      </div>
      </header>
   
    </div>
  )
}

export default Header
