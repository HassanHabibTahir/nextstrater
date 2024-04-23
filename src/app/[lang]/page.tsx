import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import ProductCard from "../[lang]/ui/components/Card"
const Home = async function ({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);


  const products = [
    { id: 1, name: "Product 1", slug: "product-1", price: "€139.00", currency: "EUR", image: "https://placehold.co/400" },
    { id: 2, name: "Product 2", slug: "product-2", price: "€99.00", currency: "EUR", image: "https://placehold.co/400" },
    
  ];

  for (let i = 3; i <= 50; i++) {
    products.push({ ...products[i % 2], id: i });
  }
  return (
    <>
      <main>
        <div className="">
          <div className="relative bg-gray-900 text-white">
            {/* Banner Image */}
            <div className=" inset-0">
              <img
                src="https://placehold.co/600x400"
                alt="Hero"
                className="w-full h-[50vh] object-cover opacity-50"
              />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              {/* Content */}
              <div className="text-center">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                  Discover the Latest Trends
                </h1>
                <p className="text-lg mb-8">
                  Find your perfect style with our wide range of products.
                </p>

                {/* Search Component */}
                <div className="w-full max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full py-3 px-4 rounded-full shadow-md focus:outline-none focus:ring focus:ring-blue-500"
                  />
                </div>

             
              </div>
            </div>
          </div>
       
        </div>

    
        <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>

    
      
      </main>
    </>
  );
};
export default Home;
