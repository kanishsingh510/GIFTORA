import { useNavigate } from "react-router-dom";
import { Sparkles, ShoppingBag, Gift, Truck, ShieldCheck, ArrowRight, Heart, Star } from "lucide-react";
import CategoryCard from "../components/CategoryCard.jsx";
import Testimonials from "../components/Testimonials.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { fallbackProducts } from "../utils/constants.js";
import { money } from "../utils/helpers.js";

const categories = [
  {
    id: "birthday",
    name: "Birthday Gifts",
    subtitle: "Make their special day unforgettable",
    image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=500",
    count: 124
  },
  {
    id: "anniversary",
    name: "Anniversary Gifts",
    subtitle: "Celebrate love and togetherness",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500",
    count: 89
  },
  {
    id: "personalized",
    name: "Personalized Gifts",
    subtitle: "Custom gifts with a personal touch",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500",
    count: 156
  },
  {
    id: "marriage",
    name: "Marriage Gifts",
    subtitle: "Elegant gifts for the perfect couple",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500",
    count: 42
  }
];

export default function HomeView({ products = [], apiMode = "connecting" }) {
  const navigate = useNavigate();
  
  // Use live products if available, otherwise fallback to static data ONLY if in demo mode
  const displayProducts = products.length > 0 ? products : (apiMode === "demo" ? fallbackProducts : []);
  const featuredProducts = [...displayProducts]
    .sort((a, b) => (b.orders || 0) - (a.orders || 0))
    .slice(0, 4);

  const placeholderImg = "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=600";

  return (
    <div className="animate-fade-in pb-24">
      {/* Hero Section — Full-bleed, mobile-first */}
      <section className="relative h-[420px] sm:h-[600px] overflow-hidden mb-10 sm:mb-24 bg-slate-900 -mx-4 sm:-mx-6 lg:-mx-8" style={{width: 'calc(100% + 2rem)'}}>
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=90&w=1600" 
            className="h-full w-full object-cover opacity-60" 
            alt="Giftora Hero" 
          />
          {/* Gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-900/70" />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-5">
          <div className="max-w-[340px] sm:max-w-4xl mx-auto">
            {/* Eyebrow tag */}
            <span className="inline-block bg-coral/90 text-white text-[10px] sm:text-sm font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 sm:mb-6">
              ✦ Premium Gifting
            </span>
            <h1 className="text-3xl sm:text-7xl font-serif font-bold mb-3 sm:mb-6 text-white leading-[1.15] sm:leading-tight">
              Perfect Gifts for<br />Every Occasion
            </h1>
            <p className="text-sm sm:text-2xl font-medium mb-7 sm:mb-10 text-white/85 drop-shadow-lg max-w-xs sm:max-w-2xl mx-auto leading-relaxed">
              Discover unique presents that tell your story
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center">
              <button 
                onClick={() => {
                  navigate("/studio");
                  window.scrollTo(0, 0);
                }}
                className="bg-coral text-white h-12 sm:h-14 px-7 sm:px-10 rounded-2xl text-sm sm:text-base font-black hover:bg-[#e24e3c] transition-all shadow-xl shadow-coral/30 active:scale-95"
              >
                Shop Now
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('shop-categories');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/15 backdrop-blur-md text-white border border-white/30 h-12 sm:h-14 px-7 sm:px-10 rounded-2xl text-sm sm:text-base font-black hover:bg-white/25 transition-all active:scale-95"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="shop-categories" className="mb-12 sm:mb-32 max-w-full lg:max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-16">
          <h2 className="text-xl sm:text-4xl font-black text-ink mb-2 sm:mb-3 text-center">Shop by Gift Type</h2>
          <div className="h-1 w-12 sm:h-1.5 sm:w-24 bg-mint mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-2 gap-3 sm:gap-8 w-full">
          {(products.length > 0 ? 
            Object.values(products.reduce((acc, p) => {
              const cat = p.category || "Other";
              if (!acc[cat]) {
                acc[cat] = {
                  category: cat,
                  count: 0,
                  image: p.image || placeholderImg,
                  subtitle: `Discover our ${cat} collection`
                };
              }
              acc[cat].count++;
              return acc;
            }, {}))
            : categories
          ).slice(0, 4).map((cat, i) => (
            <div key={i} className="min-w-0 w-full">
              <CategoryCard 
                category={cat.category || cat.name}
                image={cat.image || placeholderImg}
                subtitle={cat.subtitle}
                count={cat.count}
                onClick={() => {
                  navigate(`/studio?category=${cat.category || cat.id}`);
                  window.scrollTo(0, 0);
                }} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="mb-12 sm:mb-32 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-5 sm:mb-12">
          <h2 className="text-xl sm:text-3xl font-black text-ink">Bestsellers</h2>
          <button 
             onClick={() => navigate("/studio")}
             className="text-xs sm:text-xs font-black text-orange-500 uppercase tracking-widest hover:text-ink transition-colors"
          >
            View All →
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-3 sm:gap-8 lg:grid-cols-4 w-full">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((p) => (
              <div key={p.id} className="min-w-0 w-full">
                <ProductCard 
                  product={p} 
                  selected={false} 
                  onSelect={() => {
                    navigate("/studio");
                    window.scrollTo(0, 0);
                  }} 
                />
              </div>
            ))
          ) : (
            [1,2,3,4].map((i) => (
              <div key={i} className="aspect-square rounded-2xl bg-slate-100 animate-pulse" />
            ))
          )}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="max-w-7xl mx-auto mb-12 sm:mb-32">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-8 rounded-2xl sm:rounded-[40px] bg-slate-50 border border-slate-100">
            {[
               { icon: Gift, label: "Premium Packaging" },
               { icon: Truck, label: "Express Delivery" },
               { icon: ShieldCheck, label: "Quality Guarantee" },
               { icon: ShoppingBag, label: "Bulk Gifting" }
            ].map((f, i) => (
               <div key={i} className="flex items-center gap-2 sm:gap-4 py-1 justify-center flex-col">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-mint">
                     <f.icon size={16} />
                  </div>
                  <p className="font-black text-[11px] sm:text-xs text-ink leading-tight text-center">{f.label}</p>
               </div>
            ))}
         </div>
      </section>

      <Testimonials />

      {/* Final CTA */}
      <section className="mt-8 sm:mt-20 max-w-7xl mx-auto rounded-3xl sm:rounded-[60px] bg-mint p-8 sm:p-16 text-center text-ink relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-ink/10 rounded-full blur-3xl" />
        <h2 className="relative text-2xl sm:text-4xl font-black mb-3 sm:mb-6 leading-tight">Create your next memory.</h2>
        <p className="relative text-ink/60 max-w-xs sm:max-w-md mx-auto mb-7 sm:mb-10 text-sm sm:text-base font-bold leading-relaxed">
          Step into our studio and experience real-time gift design.
        </p>
        <button 
          onClick={() => navigate("/studio")}
          className="relative bg-ink text-white h-12 sm:h-14 px-9 sm:px-10 rounded-2xl text-sm sm:text-base font-black hover:bg-slate-800 transition-all shadow-xl shadow-ink/20 active:scale-95"
        >
          Enter Studio
        </button>
      </section>
    </div>
  );
}
