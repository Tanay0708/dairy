import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
      <h2 className="text-4xl font-palanquin font-bold">Different <span className="text-coral-red">Sizes</span> of Products</h2>
      <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Perfect for those who wish to savor the richness of Pure Gold Ghee in smaller quantities. Our mini jar is ideal for experimentation, adding a touch of luxury to your recipes without committing to a larger size.</p>
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