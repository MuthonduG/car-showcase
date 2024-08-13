"use client";
import { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "../context/search";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "/variants";
import Image from "next/image"
import Btn1 from "../../../public/icons/buttons/google-play.svg";
import Btn2 from "../../../public/icons/buttons/app-store.svg";
import CarImage from "../../../public/images/hero/car.svg"

export default function Hero() {
  const {searchActive} = useContext(SearchContext)
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.6}} className="text-4xl md:text-5xl xl:text-6xl font-bold">Explore the Finest <span className="text-accent">Global</span>{' '} Offers</motion.h1>
            <motion.p variants={fadeIn('down', 0.4)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.6}} className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10">
              Find your ideal ride for any adventure with our diverse range of affordable and dependable car rentals
            </motion.p>
            <motion.div variants={fadeIn('down', 0.4)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.8}} className="flex gap-x-3 justify-center xl:justify-start">
              <button className="btn-cta"> 
                <Image src={Btn2} width={132} height={36} alt="image"/>
              </button>
              <button className="btn-cta">
                <Image src={Btn1} width={132} height={36} alt="image"/>
              </button>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.6}} className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[180px] min-[1680px]:right-[120px] xl:top-48">
            <Image src={CarImage} fill alt="image" style={{ objectFit: 'contain' }} priority/>
          </motion.div>
        </div>
      </div>
      {
        searchActive ? 
        (<motion.div initial={{y: '-100%'}} animate={{y: 0}} transition={{ease: easeInOut}} className="fixed top-[80px] z-10 w-full max-w-[1920px]">
          <Search/>
        </motion.div>): 
        (
          <div className="-mt-12 w-full max-w-[1300px] mx-auto">
            <motion.div variants={fadeIn('up', 0.8)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.2}} className="-mt-12 w-full max-w-[1300px] mx-auto">
              <Search/>
            </motion.div>
          </div>
        )
      }
    </section>
  )
};
