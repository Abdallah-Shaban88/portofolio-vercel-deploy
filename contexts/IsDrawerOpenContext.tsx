import React, { createContext, useContext, useEffect, useState } from 'react'

interface isDrawerOpenContextType {
    isDrawerOpen?: boolean,
    toggleDrawer?: ()=> void
}

const isDrawerOpenDefaultValue : isDrawerOpenContextType ={
    isDrawerOpen: false,
    toggleDrawer: ()=> {}
}

const IsDrawerOpenContext = createContext<isDrawerOpenContextType>(isDrawerOpenDefaultValue);

export function useIsDrawerOpen(){
    return useContext(IsDrawerOpenContext)
}

type Props = {
    children: React.ReactNode;
  }

  export function IsDrawerOpenProvider({children}: Props){
    const [isDrawerOpen, setIsDrawerOpen] = useState<false | true >(false);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
    };
    const value = {
        isDrawerOpen,
        toggleDrawer
    };

    useEffect(()=> window.addEventListener('resize',() =>{isDrawerOpen && setIsDrawerOpen(false)}),[])

    return  <IsDrawerOpenContext.Provider value={value}>
    {children}
    </IsDrawerOpenContext.Provider>
    
  }