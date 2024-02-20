import { arrowRight } from "../assets/icons"
import { dh, ghee } from "../assets/images"
import Button from "../components/Button"


const SuperQuality = () => {
  return (
    <section className=" w-full h-auto p-[40px] max-sm:p-[20px] rounded-3xl bg-white -mt-24">
      <div className=" ">
        <h1 className="text-[55px] max-sm:text-[24px] max-sm:leading-7  text-coral-red leading-[70px] font-[700]">
          WELCOME
          <br />
          <span className="font-[300]">
            TO THE WORLD OF 
            <br />
            MAHASHREE
          </span>
        </h1>
        <p className="text-[#626262] mt-2 text-[24px]  max-sm:text-[16px] font-[400] ">
        where tradition meets purity inevery <br className="max-sm:block hidden" /> drop of our golden goodness
        </p>
      </div>
      <div>
        <button className="w-[196px] h-[68px]  max-sm:text-[12px] max-sm:gap-2 font-[500] bg-[#F2D913] rounded-full flex justify-center items-center gap-5 text-[20px] mt-5 max-sm:w-[117px] max-sm:h-[40px] ">
          Know More <img src={arrowRight} alt="" />
        </button>
      </div>
    </section>  
  )
}

export default SuperQuality