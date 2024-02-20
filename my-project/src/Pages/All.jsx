
import { Footer } from "flowbite-react";
import Acc from "../components/Acc";
import Nav from "../components/Nav";
import Fass from "../components/Fass";
import { Hero,  Subscribe, SuperQuality } from "../sections";
import GalleryOne from "../sections/GalleryOne";
import Products from "../sections/Products";
import CowS from "../components/CowS";


const All = () => {
  return (
    <main className="relative p-5 max-sm:p-0">
  
    <section className="xl:padding-l wide:padding-r mb-0 ">
    <Nav />
    </section>
    <section className="padding">
    <Hero />
    </section>
    <section className="max-sm:p-5 padding ">
    
     <SuperQuality />
    </section>
    <section className="max-sm:p-5 padding">
     <Fass />
    </section>
    
    <section className="padding-x py-10">
     
    <GalleryOne />
    </section>
   
    
    <section className="padding ">
     <Products />
    </section>
    <section className="padding-x py-10">
     
     <Acc />
     </section>
     <section className="padding-x py-10 max-sm:p-0">
     
     <CowS />
     </section>
    <section className="padding-x py-10">
    
    <Subscribe />
    </section>
    {/* <section className="padding-x py-10">
    
    <Footer />
    </section>
    <section className="padding-x  padding-t pb-8">
    
    </section> */}
  </main>
  )
}

export default All