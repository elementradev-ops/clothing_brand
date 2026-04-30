import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const collectionsData = [
  {
    id: "silk",
    name: "Heritage Silk",
    desc: "Woven from the finest threads, our heritage silk collection offers an unmatched drape and radiant sheen. Perfect for haute couture and bridal elegance.",
    image: "/images/silk.png",
    reverse: false,
  },
  {
    id: "cotton",
    name: "Premium Cotton",
    desc: "Organic, breathable, and incredibly soft. Our cotton collection represents the pinnacle of everyday luxury, ethically sourced and masterfully finished.",
    image: "/images/cotton.png",
    reverse: true,
  },
  {
    id: "linen",
    name: "Organic Linen",
    desc: "Characterized by its beautiful texture and cooling properties, our linen range brings a rustic yet refined aesthetic to modern tailoring.",
    image: "/images/linen.png",
    reverse: false,
  },
  {
    id: "designer",
    name: "Designer Brocade",
    desc: "Intricate patterns woven with gold and silver threads. This exclusive collection is designed for statement pieces that command attention.",
    image: "/images/product_brocade.png",
    reverse: true,
  }
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-charcoal text-ivory text-center">
        <div className="container mx-auto px-6">
          <h4 className="text-gold uppercase tracking-widest text-sm mb-4">Discover</h4>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Our Collections</h1>
          <p className="text-ivory/70 max-w-2xl mx-auto font-light text-lg">
            A curated selection of the world's finest textiles, meticulously crafted for designers who demand excellence.
          </p>
        </div>
      </section>

      {/* Collections List */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 space-y-32">
          {collectionsData.map((collection) => (
            <div key={collection.id} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${collection.reverse ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2 relative h-[500px] overflow-hidden group">
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="font-serif text-4xl lg:text-5xl text-charcoal">{collection.name}</h2>
                <div className="h-px w-20 bg-gold" />
                <p className="text-charcoal/70 font-light text-lg leading-relaxed">
                  {collection.desc}
                </p>
                <Link href="/products" className="inline-block px-8 py-3 border border-charcoal text-charcoal uppercase tracking-widest text-sm hover:bg-charcoal hover:text-ivory transition-colors mt-4">
                  View Products
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
