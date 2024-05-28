'use client'
import Navbar from '@/components/Navbar'
import Nav from '../components/Nav'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { title } from 'process'
import { IsDrawerOpenProvider } from '@/contexts/IsDrawerOpenContext'
import Image from 'next/image'
import { TbTruckDelivery } from 'react-icons/tb'
import { GrConfigure } from 'react-icons/gr'
import { FaBoxes } from 'react-icons/fa'
import { motion, useScroll, useTransform, useViewportScroll } from "framer-motion";

export default function Home() {

  const [activeSection, setActiveSection] = useState('home')
  const [closeDrawer, setCloseDrawer] = useState()

  let links = [{
    link: "home",
  title: "الرئيسية"
},
 {
  link: "aboutUs",
  title: 'من نحن'
}, 
{
  link: "services",
  title: 'الخدمات'
}, 
{
  title: 'الاتصال بنا',
  link: "contactUs"
}]

  useEffect(() => {

      let home = document.getElementById('home')
      let aboutUs = document.getElementById('aboutUs')
      let services = document.getElementById('services')
      let contactUs = document.getElementById('contactUs')

      let sections = [home, aboutUs, services, contactUs]

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      };


    const observer = new IntersectionObserver(entries => {
  
      entries.forEach(entry => {
          if(entry.isIntersecting){
              if (entry.target.id == 'home'){
                setActiveSection('home')
              }
              if (entry.target.id == 'aboutUs'){
                setActiveSection('aboutUs')
              }
              if (entry.target.id == 'services'){
                setActiveSection('services')
              }
              if (entry.target.id == 'contactUs'){
                setActiveSection('contactUs')
              }
          }
      })
  }, observerOptions)
  
  sections?.forEach(section => {
    section && observer.observe(section)
  })
  }, [])

  return (
    <IsDrawerOpenProvider>
    <Navbar >
      <Nav links={links} activeSection={activeSection} />
    </Navbar>  
    <main className='overflow-x-hidden'>
    <section id="home" className="w-screen h-screen bg-panner bg-no-repeat bg-cover bg-fixed flex flex-col justify-around items-center bg-blend-darken bg-black/40 pt-9">
      <ShowDivOpacity>
      <div className='w-[70%] sm:w-[80%]  self-center'>
      <h1 className='xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-center h-[100%]  text-white font-extrabold shadow-md' style={{lineHeight: 2}}>خبراء في جميع تركيبات انواع <br/> السيراميك و الرخام </h1>
      </div>
      </ShowDivOpacity>
      <RevalCard className='' direction={-50}><button className='border-2 border-solid border-orange-700 bg-transparent outline-none m-auto block px-16 py-8 mt-8 text-orange-700 rounded-2xl text-3xl font-medium'>اتصل الان</button></RevalCard>
    </section>
    <section id="aboutUs" className="w-screen h-screen flex sm:flex-row flex-col sm:justify-stretch sm:items-center lg:px-32 sm:py-32">
     <RevalCard className="card w-[50%] h-full" direction={50}>
      <p className='lg:text-4xl xl:text-5xl md:text-3xl sm:text-2xl text-black flex-1 px-16 ' style={{lineHeight: '4rem'}}>معلم سيراميك خبره 10 سنوات في المقاولات العامه بفضل الله افضل شغل واحسن جوده. فريق متخصص بترميم وتشطيب المنازل والفلل والقصور من أعمال تركيب السيراميك والرخام 
     <mark> +966533108772 </mark>
</p>
</RevalCard>
<RevalCard className="card w-[50%] h-full" direction={-50}>
<DivTransitionOnScroll>
<div className='flex-1 bg-image1 w-full h-[100%] bg-cover rounded-lg ' >
</div>
</DivTransitionOnScroll>
</RevalCard>
    </section>
    <section id="services" className="w-screen h-screen  flex flex-col justify-around">
      <h3 className='relative text-center text-5xl font-bold self-center after:content-[" "] after:w-full after:h-[5px] after:bg-black after:absolute after:bottom-0 after:left-0'>الخدمات</h3>
   
    <div className='flex flex-wrap items-center justify-around'>

    {['','','',''].map((img, i) =><div key={i} className='relative after:content-[" "] after:w-full after:h-full after:bg-black/0 after:absolute after:inset-0 after:z-10 hover:after:bg-black/65 hover:cursor-pointer'> <Image  style={{   }} src='/image2.jfif' alt='' width={350} height={350} /></div>)}
    </div>
    </section>
    <section id="contactUs" className="w-screen h-screen flex flex-col justify-around ">
    <h3 className='relative text-center text-5xl font-bold self-center after:content-[" "] after:w-full after:h-[5px] after:bg-black after:absolute after:bottom-0 after:left-0'>الاتصال</h3>
    <div className='flex flex-col-reverse md:flex-row justify-around md:h-[65%] w-full h-full items-center'>
      <div className='flex flex-col justify-around items-stretch md:w-[50%] w-full px-36 '>
     { ["الاسم","الهاتف","البريد الاالكتروني"].map((input, index) => <input className='p-4 outline-none border-gray-800 border-solid border-b-2' placeholder={input}/>)}
     <textarea className='p-4 outline-none border-gray-800 border-solid border-b-2' cols={50} rows={10}/>
     <button className='mt-4 p-4 bg-gray-800 w-full text-white'>اتصل بنا </button>
    </div>
    <div className=' bg-image1 md:w-full md:h-[100%] bg-cover rounded-lg w-[350px] h-[350px]' >
</div>
</div>
    </section>
    </main>
    </IsDrawerOpenProvider>
  );
}


 function ShowDivOpacity({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: .25  }}
      className='w-full self-center flex flex-row justify-center'
    >
      {children}
    </motion.div>
  );
}


function DivShowOnScroll({children}:{ children: ReactNode } )
 {
  const { scrollYProgress } = useScroll()
const scale = useTransform(scrollYProgress, [0, 0], [1, 1]);
  
return (
  <motion.div
    style={{ scale, width: '100%', height: '100%' }}
  >
    <motion.div
      style={{
        scaleY: scrollYProgress, width: '100%', height: '100%' }}>
        {children}
      </motion.div>
    
  </motion.div>
)}

function DivTransitionOnScroll({children}:{children: ReactNode}){
  // const { scrollYProgress, scrollY } = useScroll()

  const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    })
    const opacity = useTransform(
        scrollYProgress,
        [0, .5, 1],
        [0, 2, 101],
    )

  return <motion.div
  
  transition={{
    ease: "linear",
    duration: 2,
    x: { duration: 1 }
  }}
  style={{opacity}}
  className='w-[100%] h-full'
  >{children}</motion.div>
} 

function RevalCard({ children , direction, className }: {children: ReactNode, direction: number, className: string}) {
  return (
    <motion.div
      className= {className}
      initial={{
        opacity: 0,
        // if odd index card,slide from right 50 instead of left -50
        x: direction
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 2 // Animation duration
        }
      }}
      
    >
      {children}
    </motion.div>
  );
}
