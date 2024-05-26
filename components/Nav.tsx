import { useIsDrawerOpen } from '@/contexts/IsDrawerOpenContext'
import React from 'react'

interface Links  {
    links: {link: string, title: string}[],
    activeSection: string,
}

function Nav({links, activeSection} : Links) {
    const {toggleDrawer} = useIsDrawerOpen()
  return (
    
        links.map((link, index) => (
          <a key={index} href={`#${link.link}`} onClick={toggleDrawer}>  <span  className={`w-full inline-block px-5 font-bold text-center cursor-pointer relative pb-3 ${activeSection == link.link && "text-orange-500 nav"}`}>{link.title}</span></a>
        ))
    )
}

export default Nav