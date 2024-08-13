"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";
import Ford from "../../../public/icons/brands/ford.svg";
import Benz from "../../../public/icons/brands/mercedes.svg";
import Audi from "../../../public/icons/brands/audi.svg";
import Bmw from "../../../public/icons/brands/bmw.svg";
import Vw from "../../../public/icons/brands/vw.svg";
import Skoda from "../../../public/icons/brands/skoda.svg";
import Mazda from "../../../public/icons/brands/mazda.svg";

export default function Brands() {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          <div>
            <Image src={Ford} width={85} height={32} alt="image"/>
          </div>
          <div>
            <Image src={Benz} width={60} height={50} alt="image"/>
          </div>
          <div>
            <Image src={Audi} width={60} height={60} alt="image"/>
          </div>
          <div>
            <Image src={Bmw} width={60} height={60} alt="image"/>
          </div>
          <div>
            <Image src={Vw} width={60} height={60} alt="image"/>
          </div>
          <div>
            <Image src={Skoda} width={60} height={60} alt="image"/>
          </div>
          <div>
            <Image src={Mazda} width={62} height={50} alt="image"/>
          </div>
        </div>
      </div>
    </section>
  )
}
