export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="font-serif text-3xl text-ivory mb-6 tracking-wider">BRAND</h2>
            <p className="text-ivory/50 text-sm leading-relaxed font-light">
              Elevating the standard of luxury textiles since 1999. Crafted with passion, delivered with prestige.
            </p>
          </div>
          
          <div>
            <h4 className="text-ivory uppercase tracking-widest text-xs mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-ivory/60 font-light">
              <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#collections" className="hover:text-gold transition-colors">Collections</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-ivory uppercase tracking-widest text-xs mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-ivory/60 font-light">
              <li>info@brandtextiles.com</li>
              <li>+1 (800) 123-4567</li>
              <li>123 Silk Avenue,<br/>Fashion District, NY 10001</li>
            </ul>
          </div>

          <div>
            <h4 className="text-ivory uppercase tracking-widest text-xs mb-6">Newsletter</h4>
            <p className="text-ivory/50 text-xs mb-4 font-light">Subscribe for exclusive updates and new collection releases.</p>
            <div className="flex border-b border-ivory/30 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none text-sm text-ivory w-full placeholder:text-ivory/30"
              />
              <button className="text-gold text-xs uppercase tracking-widest hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-ivory/40 font-light">
          <p>&copy; {new Date().getFullYear()} BRAND Textiles. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-ivory transition-colors">Instagram</a>
            <a href="#" className="hover:text-ivory transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-ivory transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
