import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
      <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
      <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Our healthy, creamy and delicious dairy products will make everything better. With our assurance of quality and purity, you can confidently add these to your diet and boost your overall wellness!</p>
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