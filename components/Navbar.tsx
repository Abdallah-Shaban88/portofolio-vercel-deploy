import React, { ReactNode, useContext, useEffect, useState } from "react";
import { MdEmail, MdLocalPhone, MdMenu } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { useIsDrawerOpen } from "@/contexts/IsDrawerOpenContext";

interface Props {
  children?: ReactNode;
  onClick?: ()=> void;
  // any props that come into the component
}

const Navbar = ({ children }: Props) => {
//   const [isDrawerOpen, setIsDrawerOpen] = useContext()
const {isDrawerOpen, toggleDrawer} = useIsDrawerOpen()
  //Define a function to handle the toggle of the drawer
//   const handleDrawerToggle = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

  useEffect(() => {
    // window.addEventListener('click', handleDrawerToggle)
  },[])
  return (
    <div className="w-full p-5 sticky flex flex-row items-center justify-center bg-gray-700 text-white">
      <h2 className="ml-auto text-2xl">معلم سراميك في الرياض</h2>

      <div className="sm:hidden relative flex flex-col my-4">
        <MobileMenuButton onClick={toggleDrawer}/>
        {/* Logo, Mobile Menu Button, Mobile Drawer */}
        <div className={`p-6 fixed inset-0 z-10 bg-slate-700 ${ !isDrawerOpen ? 'hidden':'flex'} flex-col justify-around`}>
        <IoMdCloseCircle onClick={toggleDrawer} size={30}/>
       {children}
        </div>
      </div>

      <div className="hidden relative py-6 sm:flex  justify-center">
        {children}
        {/* <div className="bg-gray-700 text-white gap-4">
          <MdLocalPhone size={22} />
          <MdEmail color="" size={25} />
          <FaLocationArrow />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;

const MobileMenuButton = ({onClick}: Props) => {
    return (
        <button className=" p-1" onClick={onClick}>
          <MdMenu size={30}/>
        </button>
      );
}