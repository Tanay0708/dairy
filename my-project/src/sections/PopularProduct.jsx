import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
      <h2 className="text-4xl font-palanquin font-bold">घी के <span className="text-coral-red">पैकेट की </span> अलग-अलग मात्रा  </h2>
      <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">उन लोगों के लिए बिल्कुल सही जो कम मात्रा में शुद्ध सोने के घी की समृद्धि का स्वाद लेना चाहते हैं। हमारा मिनी जार प्रयोग के लिए आदर्श है, जो बड़े आकार के बिना आपके व्यंजनों में विलासिता का स्पर्श जोड़ता है।</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-col-3 sm:grid-cols-2  grid-cols-1 sm:gap-4 gap-14 ">
        {
          products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))
        }

      </div>
    </section>
  )
}

export default PopularProduct