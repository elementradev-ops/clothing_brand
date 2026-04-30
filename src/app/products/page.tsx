"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  { id: 1, name: "Ivory Silk Charmeuse", category: "Silk", price: "$45 / yard", image: "/images/product_silk.png" },
  { id: 2, name: "Midnight Charcoal Linen", category: "Linen", price: "$28 / yard", image: "/images/product_linen.png" },
  { id: 3, name: "Golden Flora Brocade", category: "Designer", price: "$85 / yard", image: "/images/product_brocade.png" },
  { id: 4, name: "Raw Organic Cotton", category: "Cotton", price: "$18 / yard", image: "/images/product_cotton.png" },
  { id: 5, name: "Pearl White Silk Crepe", category: "Silk", price: "$52 / yard", image: "/images/silk.png" },
  { id: 6, name: "Desert Beige Linen", category: "Linen", price: "$30 / yard", image: "/images/linen.png" },
  { id: 7, name: "Classic French Cotton", category: "Cotton", price: "$22 / yard", image: "/images/cotton.png" },
  { id: 8, name: "Obsidian Weave Jacquard", category: "Designer", price: "$95 / yard", image: "/images/hero.png" },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-40 pb-16 bg-beige/30 border-b border-charcoal/10 text-center">
        <div className="container mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl mb-4 text-charcoal">Fabric Catalog</h1>
          <p className="text-charcoal/60 font-light text-lg">Browse our complete range of premium textiles.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filter Placeholder */}
          <div className="w-full lg:w-1/4 hidden lg:block space-y-10">
            <div>
              <h3 className="font-serif text-xl mb-6 text-charcoal border-b border-charcoal/10 pb-4">Categories</h3>
              <ul className="space-y-4 text-charcoal/70 font-light">
                <li><label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="accent-gold" /> All Fabrics</label></li>
                <li><label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="accent-gold" /> Silk</label></li>
                <li><label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="accent-gold" /> Cotton</label></li>
                <li><label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="accent-gold" /> Linen</label></li>
                <li><label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="accent-gold" /> Designer</label></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-xl mb-6 text-charcoal border-b border-charcoal/10 pb-4">Color</h3>
              <div className="flex flex-wrap gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F8F6F2] border border-charcoal/20 cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-[#C9A227] cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-[#E8DFD6] border border-charcoal/20 cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-[#8A2BE2] cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-[#CD5C5C] cursor-pointer"></div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-8 text-sm text-charcoal/60">
              <span>Showing 1-8 of 124 products</span>
              <select className="bg-transparent border border-charcoal/20 px-4 py-2 outline-none cursor-pointer">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-charcoal/5">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
                    
                    {/* Quick Add Button Reveal */}
                    <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <button className="w-full py-3 bg-white/90 backdrop-blur-sm text-charcoal text-xs uppercase tracking-widest font-semibold hover:bg-gold hover:text-white transition-colors shadow-lg">
                        Quick Enquire
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-gold text-xs uppercase tracking-widest mb-1 block">{product.category}</span>
                    <h3 className="font-serif text-lg text-charcoal mb-2">{product.name}</h3>
                    <p className="text-charcoal/60 font-light text-sm">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-16 flex justify-center gap-2">
              <button className="w-10 h-10 border border-charcoal/20 flex items-center justify-center hover:bg-charcoal hover:text-ivory transition-colors">1</button>
              <button className="w-10 h-10 border border-transparent text-charcoal/50 flex items-center justify-center hover:text-charcoal transition-colors">2</button>
              <button className="w-10 h-10 border border-transparent text-charcoal/50 flex items-center justify-center hover:text-charcoal transition-colors">3</button>
              <button className="w-10 h-10 border border-transparent text-charcoal/50 flex items-center justify-center hover:text-charcoal transition-colors">→</button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
