import './App.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from "./assets/logo.svg"

import interactiveImgMobile from "./assets/mobile/image-interactive.jpg"
import interactiveImgDesktop from "./assets/desktop/image-interactive.jpg"

import mobileEarth from './assets/mobile/image-deep-earth.jpg';
import desktopEarth from './assets/desktop/image-deep-earth.jpg';

import mobileArcade from './assets/mobile/image-night-arcade.jpg';
import desktopArcade from './assets/desktop/image-night-arcade.jpg';

import mobileSoccer from './assets/mobile/image-soccer-team.jpg';
import desktopSoccer from './assets/desktop/image-soccer-team.jpg';

import mobileGrid from './assets/mobile/image-grid.jpg';
import desktopGrid from './assets/desktop/image-grid.jpg';

import mobileAbove from './assets/mobile/image-from-above.jpg';
import desktopAbove from './assets/desktop/image-from-above.jpg';

import mobilePocket from './assets/mobile/image-pocket-borealis.jpg';
import desktopPocket from './assets/desktop/image-pocket-borealis.jpg';

import mobileCuriosity from './assets/mobile/image-curiosity.jpg';
import desktopCuriosity from './assets/desktop/image-curiosity.jpg';

import mobileFisheye from './assets/mobile/image-fisheye.jpg';
import desktopFisheye from './assets/desktop/image-fisheye.jpg';

const navItems=['About', 'Careers', 'Events', 'Products', 'Support'];
const gridItems = [
  {image:[mobileEarth, desktopEarth], title: "Deep Earth" },
  {image:[mobileArcade, desktopArcade], title: "Night Arcade"},
  {image:[mobileSoccer, desktopSoccer], title: "Soccer Team VR"},
  {image:[mobileGrid, desktopGrid], title: "The Grid"},
  {image:[mobileAbove, desktopAbove], title: "From up above vr"},
  {image:[mobilePocket, desktopPocket], title: "pocket borealis"},
  {image:[mobileCuriosity, desktopCuriosity], title: "the curiosity"},
  {image:[mobileFisheye, desktopFisheye], title: "make it fisheye"}
]

const socialIcons = [faSquareFacebook, faTwitter, faPinterest, faInstagram]

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <main className='font-display text-black font-light m-0 p-0 text-body-size' >
    <nav className='flex flex-row m-0 px-4 md:px-20 py-8 gap-4 justify-between items-center absolute bg-[rgba(0,0,0,0)] z-10 top-0 left-0 w-full text-white' aria-label="Main navigation">
       <img src={logo} alt="loop studios logo" className='h-8 z-10'/>

        <div className='flex flex-row md:flex-row-reverse m-0 gap-4'>
          {isMobile ? <div className='flex flex-column m-0 p-0 justify-center items-center' onClick={() => setIsOpen(!isOpen)}  aria-controls="mobile-menu">
                {isOpen ? (<FontAwesomeIcon icon={faXmark} className='z-10 text-2xl'/>) : (<FontAwesomeIcon icon={faBars} className='z-10 text-2xl'/>)}
                </div> : (
                <ul className="flex flex-row m-0 gap-4 justify-center items-center" role="menubar">
                {navItems.map((item) => (
                  <li key={item} role="menuitem">
                    {item}
                  </li>))}
                </ul>
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-0 right-full translate-x-[100%] p-8 w-full h-full text-white bg-black">
          <ul className="list-none flex flex-col gap-8 items-start justify-center h-full">
            {navItems.map((item, index) => (
              <li
                key={index}
                role="menuitem"
              >
                <a href="#" className="text-2xl cursor-pointer hover:">
                  {item}</a>
              
              </li>
            ))}
          </ul> 
          </div>
        )}
      </nav>

      <header className="w-full h-auto relative bg-no-repeat bg-cover px-8 md:px-20 py-32 m-0 bg-[url('./assets/mobile/image-hero.jpg')] 
       md:bg-[url('./assets/desktop/image-hero.jpg')]">
        <h1 className='font-josefin-sans w-full md:w-[60%] text-5xl md:text-8xl uppercase border-2
         border-White text-White p-8 font-light mx-0 my-6 md:ml-4 md:mr-auto'>immersive experiences that deliver</h1>
      </header>
      
      <section className="w-full h-auto p-8 md:p-20 m-0 flex flex-col md:flex-row gap-4 justify-center align-center relative">
        <div className="w-full h-auto" >
          <img src={`${isMobile ? interactiveImgMobile : interactiveImgDesktop}`} alt="interactive image"/>
        </div>
        <div className='p-8 md:p-12 md:absolute bg-white w-full md:w-[50%] bottom-20 right-0 flex flex-col justify-center align-center gap-6 md:gap-0'>
          <h2 className='font-josefin-sans uppercase text-5xl md:text-7xl text-center'>the leader in interactive vr</h2>
          <p className='text-2xl text-center w-full'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies
            around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
          </p>
        </div>
      </section>

      <section className='w-full h-auto p-8 pb-24 md:p-20 m-0 relative'>
        <h2 className='font-josefin-sans uppercase text-5xl md:text-7xl text-center md:text-left my-12 w-full md:w-fit'>our creations</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-10 md:gap-2">
          {gridItems.map((item, index)=>
          (<div key={index} className='w-full relative hover:bg-[rgba(255,255,255,0.7)] text-Black'>
            <h3 className='font-josefin-sans text-White absolute left-5 bottom-5 uppercase text-3xl text-wrap w-[40%]'>{item.title}</h3>
            {isMobile ? <img src={item.image[0]} alt={item.title}/> : <img src={item.image[1]} alt={item.title} />}
            </div>))}
        </div>
        <button className='absolute bottom-12 left-0 translate-x-4/5 md:top-32 md:bottom-auto md:left-[75%] font-xl tracking-wider uppercase py-3 px-10 border-2 border-black hover:bg-black hover:text-white'>see all</button>
      </section>

      <footer className='bg-Black text-white py-20 px-12 md:px-20 md:py-10 flex md:flex-row flex-col justify-evenly md:justify-between items-center gap-10'>
        <div className="flex flex-col gap-6">
          <img src={logo} alt="loopstudios logo"/>
          <ul className="flex flex-col md:flex-row m-0 gap-6 justify-center items-center" role="footermenu">
                {navItems.map((item) => (
                  <li key={item} role="menuitem">
                    {item}
                  </li>))}
                </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className='flex flex-row gap-6 justify-center align-items md:justify-end'>
            {socialIcons.map((item, index)=>(
              <FontAwesomeIcon icon={item} key={index} className='text-2xl'/>
            ))}
          </div>
          <p className='text-grey'>	&copy; 2021 Loopstudios. All rights reserved.</p>
        </div>
      </footer>
    </main>
    </>
  )
}

export default App
