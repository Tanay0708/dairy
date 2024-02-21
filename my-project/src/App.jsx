import { Footer } from "flowbite-react";
import About from "./Pages/About";
import All from "./Pages/All";
import MainRoute from "./Pages/MainRoute";
import Nav from "./components/Nav";
import { Subscribe } from "./sections";
import FooterM from "./components/FooterM";




const App = () => (
 <div className="bg-[#F7EFED]  "> 
 <section className="xl:padding-l wide:padding-r mb-0 pt-2 max-sm:pt-0 ">
    <Nav />
    </section>
  <MainRoute />
  <section className="padding-x py-10">
    
    <Subscribe />
    </section>
    <section className="mt-10 ">
    <FooterM />
   
    </section>
 </div>
)

export default App;