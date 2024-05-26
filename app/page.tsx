'use client'
import Navbar from '@/components/Navbar'
import Nav from '../components/Nav'
import { ReactNode, useEffect, useState } from 'react'
import { title } from 'process'
import { IsDrawerOpenProvider } from '@/contexts/IsDrawerOpenContext'
import Image from 'next/image'
import { TbTruckDelivery } from 'react-icons/tb'
import { GrConfigure } from 'react-icons/gr'
import { FaBoxes } from 'react-icons/fa'

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
    <div className='overflow-x-hidden'>
    <Navbar >
      <Nav links={links} activeSection={activeSection} />
    </Navbar>  
    <div id="home" className="w-screen h-screen bg-panner bg-no-repeat bg-cover bg-fixed flex flex-col justify-center items-center bg-blend-darken bg-black/40">
      <h1 className='text-8xl text-white'>معلم سيراميك في الرياض</h1>
    </div>
    <div id="aboutUs" className="w-screen h-screen flex sm:flex-row flex-col sm:justify-stretch sm:items-center lg:px-32 sm:py-32">
      <div className='md:text-4xl sm:text-2xl text-black flex-1 px-16 lg:text-5xl xl:text-6xl'>معلم سيراميك خبره 10 سنوات في المقاولات العامه بفضل الله افضل شغل واحسن جوده. فريق متخصص بترميم وتشطيب المنازل والفلل والقصور من أعمال تركيب السيراميك والرخام والدهانات
0570986747
</div>
<div className='flex-1 bg-image1 w-1/2 sm:h-3/4 md:h-2/4 lg:h-4/5 bg-cover rounded-lg xl:h-5/5' >
  {/* <Image src={'/image1.jfif'} width={300} height={300} alt=''/> */}
</div>
    </div>
    <div id="services" className="w-screen h-screen  flex flex-col justify-around">
      <h3 className='relative text-center text-5xl font-bold self-center after:content-[" "] after:w-full after:h-[5px] after:bg-black after:absolute after:bottom-0 after:left-0'>الخدمات</h3>
    <div className='flex flex-row justify-around  flex-wrap'>

      {[
        {title:'نقل عفش بالرياض',
          icon: <TbTruckDelivery size={45}/>
        },
        {title: 'مجال فك وتركيب جميع انواع غرف النوم والمطابخ والستائر',
          icon: <GrConfigure size={45} style={{marginBottom: 22}}/>
        },
        {title: 'الفك والتركيب والتغليف والتخزين',
          icon: <FaBoxes size={45}/>
        }
      ].map((item, index) => <div key={index} className='border-black border-solid border p-11 rounded-2xl w-[280px] xl:w-1/4 flex flex-col justify-around items-center hover:cursor-pointer hover:bg-gray-800 hover:text-white hover:scale-125'>
        {item.icon}
        <h5 className='text-2xl text-center'>{item.title}</h5>
      </div>)}
    </div>
    </div>
    <div id="contactUs" className="w-screen h-screen flex flex-col justify-around ">
    <h3 className='relative text-center text-5xl font-bold self-center after:content-[" "] after:w-full after:h-[5px] after:bg-black after:absolute after:bottom-0 after:left-0'>الاتصال</h3>
      <div className='flex flex-row justify-around'>
     { ["الاسم","الهاتف","البريد الاالكتروني"].map((input, index) => <input className='p-4 outline-none border-gray-800 border-solid border' placeholder={input}/>)}
     <button className='p-4 bg-gray-800 md:w-1/4 lg:w-1/6 text-white'>اتصل بنا </button>
    </div>
    </div>
    </div>
    </IsDrawerOpenProvider>
  );
}

