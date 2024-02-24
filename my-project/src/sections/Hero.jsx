import { useState } from "react"
import { dairy01, line, plane } from "../assets/images"
import { useTranslation } from "react-i18next"



const Hero = () => {

  const {t} = useTranslation();



  return (
    <section className=" w-full h-screen flex max-sm:flex-col max-sm:mt-12   ">
      {/* text div */}
      <div className=" w-[60%] max-sm:w-full flex flex-col  justify-center  h-[300px] max-sm:mt-0 mt-20 ml-15  " >
        <h1 className="text-[3.5rem] text-coral-red max-sm:text-[28px] font-[700] max-sm:font-[400] max-lg:text-[2rem] leading-12 max-sm:leading-9">
          {t("heroH1") }<br className="hidden max-sm:block" /> {t("heroH2")} <span className="max-sm:text-[28px] max-sm:font-[700] "> {t("heroH3")}
          </span> 

        </h1>
        <p className="text-[25px] max-sm:text-[18px] mt-[10px] text-gray-500 max-sm:leading-5  ">{t("heroP")}</p>

      </div>
      {/* image div */}
      <div className=" w-[50%] h-[full] max-sm:w-full max-sm:h-[60%] relative  max-sm:ml-5  ">
          <img src={dairy01}  className="z-10  max-lg:h-[40%] h-[80%] w-full  absolute -top-8 right-6 max-sm:-top-10 max-sm:h-[80%] max-sm:w-full   "  alt="" />
          <img src={line}  className= "z-0 absolute -top-60 -left-80   -rotate-[70deg] max-sm:hidden h-[800px] max-lg:hidden" alt="" />
          <img src={plane} className="absolute w-24 -top-0 -rotate-[70deg] -left-40 max-sm:left-52 max-sm:w-12 max-sm:-top-60 max-lg:hidden max-sm:block z-0" alt="" />
      </div>
     
    </section>
  )
}

export default Hero