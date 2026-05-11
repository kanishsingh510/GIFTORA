import { useNavigate } from "react-router-dom";
import { ShoppingBag, Gift, Truck, ShieldCheck, Search, Sparkles, Heart, Star, ChevronRight, Zap, Flame, Award } from "lucide-react";
import CategoryCard from "../components/CategoryCard.jsx";
import Testimonials from "../components/Testimonials.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { fallbackProducts } from "../utils/constants.js";
import { money, optimiseImage } from "../utils/helpers.js";

const categoriesData = [
  { id: "birthday", name: "Birthday", image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=400" },
  { id: "anniversary", name: "Anniversary", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400" },
  { id: "personalized", name: "Personalized", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400" },
  { id: "marriage", name: "Marriage", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400" },
];

export default function HomeView({ products = [], apiMode = "connecting" }) {
  const navigate = useNavigate();

  const displayProducts = products.length > 0 ? products : apiMode === "demo" ? fallbackProducts : [];
  const featuredProducts = [...displayProducts].sort((a, b) => (b.orders || 0) - (a.orders || 0)).slice(0, 12);

  // Dynamic Categories from Products
  const dynamicCategories = products.length > 0 ? Object.values(products.reduce((acc, p) => {
    const cat = p.category || "Gifts";
    if (!acc[cat]) {
      acc[cat] = { id: cat.toLowerCase(), name: cat, image: p.image };
    }
    return acc;
  }, {})).slice(0, 6) : categoriesData;

  return (
    <div className="pb-24 w-full overflow-x-hidden bg-[#fafbfc]">
      
      {/* 📱 MOBILE-ONLY REFINED UI */}
      <div className="block sm:hidden space-y-12 w-full overflow-x-hidden">
        
        {/* Apple-Style Glass Search - Hardened */}
        <div className="sticky top-0 z-40 w-full box-border px-4 py-4 backdrop-blur-xl bg-white/80 border-b border-slate-200/50 left-0 right-0">
          <div className="relative w-full">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search for memories..."
              className="w-full bg-slate-100/80 border-none h-12 pl-12 pr-4 rounded-2xl text-sm font-semibold placeholder:text-slate-400 focus:ring-0"
            />
          </div>
        </div>

        {/* Dynamic Stories - Perfectly Centered & Dynamic */}
        <div className="w-full overflow-hidden">
          <div className={`flex overflow-x-auto scrollbar-none gap-6 px-6 pb-2 ${dynamicCategories.length <= 4 ? 'justify-around' : ''}`}>
            {dynamicCategories.map((cat) => (
              <button key={cat.id} onClick={() => navigate(`/studio?category=${cat.name}`)} className="flex flex-col items-center gap-2.5 shrink-0">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-coral via-coral/40 to-transparent animate-spin-slow opacity-60" />
                  <div className="relative w-[68px] h-[68px] rounded-full p-1 bg-white shadow-sm border border-slate-100">
                    <img src={cat.image} className="w-full h-full rounded-full object-cover" alt={cat.name} />
                  </div>
                </div>
                <span className="text-[10px] font-black text-ink uppercase tracking-tight">{cat.name}</span>
              </button>
            ))}
            {dynamicCategories.length > 4 && (
              <button onClick={() => navigate("/studio")} className="flex flex-col items-center gap-2.5 shrink-0">
                <div className="w-[68px] h-[68px] rounded-full bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-300 text-slate-400">
                   <Sparkles size={24} />
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-tight">More</span>
              </button>
            )}
          </div>
        </div>

        {/* LUXURY BANNER */}
        <div className="w-full space-y-2">
          <div 
            onClick={() => navigate("/studio")}
            className="relative aspect-[16/9.5] w-full overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800" 
              className="absolute inset-0 w-full h-full object-cover"
              alt="Luxury"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-8 bg-coral" />
                <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Signature Series</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-white mb-2 leading-none">The Luxury<br />Edit.</h2>
              <p className="text-white/70 text-[11px] font-medium mb-5 max-w-[220px] leading-relaxed">Hand-curated hampers for life's biggest celebrations.</p>
              <button className="w-fit bg-coral text-white px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-coral/30">
                Shop Now
              </button>
            </div>
          </div>
          
          <div 
            onClick={() => navigate("/studio")}
            className="relative aspect-[16/6] w-full overflow-hidden bg-ink flex items-center px-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent z-10" />
            <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400" className="absolute right-0 w-1/2 h-full object-cover grayscale opacity-20" alt="bg" />
            
            <div className="relative z-20 flex flex-col gap-1">
               <div className="flex items-center gap-2">
                 <div className="h-5 w-5 rounded-full bg-mint flex items-center justify-center">
                    <Zap size={12} className="text-white fill-white" />
                 </div>
                 <span className="text-[10px] font-black text-mint uppercase tracking-[0.2em]">New Arrival</span>
               </div>
               <h2 className="text-xl font-serif italic text-white">Sustainable Curations</h2>
            </div>
            <div className="ml-auto relative z-20">
               <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50">
                  <ChevronRight size={20} />
               </div>
            </div>
          </div>
        </div>

        {/* Premium Marquee */}
        <div className="w-full overflow-hidden bg-white py-5 border-y border-slate-100">
          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-ink flex items-center gap-2">
                   <div className="h-1.5 w-1.5 rounded-full bg-coral" /> Free Express Delivery
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-ink flex items-center gap-2">
                   <div className="h-1.5 w-1.5 rounded-full bg-mint" /> Quality Guaranteed
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bestsellers */}
        <div>
          <div className="flex items-center justify-between mb-6 px-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-coral/10 flex items-center justify-center text-coral">
                <Flame size={20} className="fill-coral" />
              </div>
              <h3 className="text-xl font-black text-ink">Bestsellers</h3>
            </div>
            <button onClick={() => navigate("/studio")} className="text-[11px] font-black text-slate-400 uppercase tracking-widest">See All</button>
          </div>
          <div className="flex overflow-x-auto gap-5 pb-8 scrollbar-none snap-x snap-mandatory px-4">
            {featuredProducts.map((p) => (
              <div key={p.id} className="min-w-[210px] w-[210px] snap-start">
                <ProductCard product={p} selected={false} onSelect={() => navigate("/studio")} />
              </div>
            ))}
          </div>
        </div>

        <Testimonials />
      </div>

      {/* 🖥️ DESKTOP VIEW */}
      <div className="hidden sm:block w-full">
        <section className="relative h-[480px] lg:h-[580px] overflow-hidden mb-16 bg-slate-900 mx-4 rounded-[48px]">
          <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=75&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-55" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/45 to-slate-900/85" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-5">
            <span className="inline-block bg-coral/90 text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-5">✦ Premium Gifting</span>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4 max-w-2xl mx-auto">Perfect Gifts for Every Occasion</h1>
            <p className="text-lg font-medium text-white/80 mb-8 max-w-md mx-auto leading-relaxed">Discover unique presents that tell your story</p>
            <div className="flex flex-row gap-3 justify-center">
              <button onClick={() => navigate("/studio")} className="bg-coral text-white font-black text-base h-14 px-10 rounded-2xl hover:bg-[#e24e3c] active:scale-95 transition-all shadow-lg">Shop Now</button>
              <button onClick={() => document.getElementById("shop-categories")?.scrollIntoView({ behavior: "smooth" })} className="bg-white/15 backdrop-blur-md text-white border border-white/30 font-black text-base h-14 px-10 rounded-2xl hover:bg-white/25 active:scale-95 transition-all">Explore</button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto mb-16 px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-4 p-6 rounded-[32px] bg-slate-50 border border-slate-100">
            {[
              { icon: Gift, label: "Premium Packaging" },
              { icon: Truck, label: "Express Delivery" },
              { icon: ShieldCheck, label: "Quality Guarantee" },
              { icon: ShoppingBag, label: "Bulk Gifting" },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 py-1">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-mint">
                  <f.icon size={16} />
                </div>
                <p className="font-black text-xs text-ink leading-tight text-center">{f.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="shop-categories" className="mb-24 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-ink mb-3">Shop by Gift Type</h2>
            <div className="h-1.5 w-20 bg-mint mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            {(products.length > 0 ? Object.values(products.reduce((acc, p) => {
              const cat = p.category || "Other";
              if (!acc[cat]) {
                acc[cat] = { category: cat, count: 0, image: optimiseImage(p.image, 400, 70), subtitle: `Discover our ${cat} collection` };
              }
              acc[cat].count++;
              return acc;
            }, {})) : categoriesData).slice(0, 4).map((cat, i) => (
              <div key={i} className="min-w-0">
                <CategoryCard category={cat.category || cat.name} image={cat.image} subtitle={cat.subtitle} count={cat.count} onClick={() => navigate(`/studio?category=${cat.category || cat.id}`)} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black text-ink">Bestsellers</h2>
            <button onClick={() => navigate("/studio")} className="text-xs font-black text-orange-500 uppercase tracking-widest hover:text-ink transition-colors py-2 pl-3">View All →</button>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} selected={false} onSelect={() => navigate("/studio")} />
            ))}
          </div>
        </section>

        <Testimonials />

        <section className="mt-16 max-w-7xl mx-auto rounded-[48px] bg-mint p-16 text-center text-ink relative overflow-hidden mb-16">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-ink/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="relative text-4xl font-black mb-5 leading-tight">Create your next memory.</h2>
          <p className="relative text-ink/60 max-w-xs mx-auto mb-8 text-base font-bold leading-relaxed">Step into our studio and experience real-time gift design.</p>
          <button onClick={() => navigate("/studio")} className="relative bg-ink text-white font-black h-14 px-10 rounded-2xl text-base hover:bg-slate-800 active:scale-95 transition-all shadow-xl shadow-ink/20">Enter Studio</button>
        </section>
      </div>

    </div>
  );
}
