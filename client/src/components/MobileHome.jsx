import { Search, Sparkles, Heart, Flame, Gift, Award, Star, ChevronRight, User, ShieldCheck } from "lucide-react";
import { money } from "../utils/helpers.js";

export default function MobileHome({ products, apiMode, navigate, session, openLogin, logout }) {
  const isLoading = apiMode === "connecting";
  const displayProducts = products.length > 0 ? products : [];
  const featured = displayProducts.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto overflow-x-hidden pb-32">
      
      {/* 1. INTEGRATED APP HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-5 py-4 flex items-center justify-between border-b border-slate-50">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-ink flex items-center justify-center shadow-lg shadow-ink/20">
            <Sparkles size={18} className="text-orange-500" />
          </div>
          <div className="leading-none">
            <p className="text-[7px] font-black uppercase tracking-widest text-orange-500">Premium</p>
            <h1 className="text-sm font-black text-ink">Giftora</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {session ? (
            <button onClick={logout} className="h-9 px-3 rounded-xl bg-slate-50 text-[10px] font-bold text-slate-400">Logout</button>
          ) : (
            <button onClick={() => openLogin()} className="h-9 w-9 rounded-xl bg-slate-50 flex items-center justify-center text-ink">
              <User size={18} />
            </button>
          )}
        </div>
      </header>

      {/* 2. SEARCH AREA (ZERO SHIFT) */}
      <div className="px-5 pt-6 pb-2">
        <div className="relative group">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search for magic..."
            className="w-full bg-slate-100/50 border-transparent h-13 pl-12 pr-4 rounded-[20px] text-sm font-semibold focus:bg-white focus:ring-2 focus:ring-coral/20 transition-all outline-none"
          />
        </div>
      </div>

      {/* 3. HERO SECTION (FIXED ASPECT) */}
      <div className="px-5 mt-6">
        <div className="relative aspect-[16/11] w-full rounded-[32px] overflow-hidden bg-slate-100 shadow-2xl shadow-coral/10">
          <img 
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <h2 className="text-3xl font-black text-white leading-tight mb-3">Gifts that<br />wow them.</h2>
            <button onClick={() => navigate("/studio")} className="w-fit bg-coral text-white px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest active:scale-95 transition-transform">
              Enter Studio
            </button>
          </div>
        </div>
      </div>

      {/* 4. PRODUCT GRID WITH SKELETONS (ZERO SHIFT) */}
      <div className="px-5 mt-10">
        <div className="flex items-center justify-between mb-6">
           <h3 className="text-lg font-black text-ink">Trending Now</h3>
           <button onClick={() => navigate("/studio")} className="text-[10px] font-black uppercase tracking-widest text-coral">View All</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {isLoading ? (
            [1, 2, 3, 4].map(i => (
              <div key={i} className="space-y-3">
                <div className="aspect-[4/5] rounded-[24px] bg-slate-50 animate-pulse" />
                <div className="h-4 w-3/4 bg-slate-50 rounded animate-pulse" />
                <div className="h-3 w-1/2 bg-slate-50 rounded animate-pulse" />
              </div>
            ))
          ) : (
            featured.map(p => (
              <div key={p.id} className="group" onClick={() => navigate("/studio")}>
                <div className="aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-50 relative mb-3">
                  <img src={p.image} className="w-full h-full object-cover" alt={p.name} />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg">
                    <span className="text-[10px] font-black text-ink">{money(p.price)}</span>
                  </div>
                </div>
                <h4 className="text-[13px] font-bold text-ink truncate px-1">{p.name}</h4>
                <p className="text-[10px] font-medium text-slate-400 px-1">{p.category}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* 5. POPULAR COLLECTIONS GRID */}
      <div className="mt-12 px-5">
        <h3 className="text-lg font-black text-ink mb-6">Popular Collections</h3>
        <div className="grid grid-cols-2 gap-3">
           {[
             { name: "Luxury", icon: Star, color: "bg-ink text-white", count: "12 Items" },
             { name: "Hampers", icon: Gift, color: "bg-coral/10 text-coral", count: "8 Items" },
             { name: "Express", icon: Flame, color: "bg-orange-50 text-orange-500", count: "24h Delivery" },
             { name: "Studio", icon: Sparkles, color: "bg-mint/10 text-teal-700", count: "Customizable" }
           ].map((col, i) => (
             <button key={i} onClick={() => navigate("/studio")} className="flex flex-col gap-3 p-5 rounded-[28px] bg-slate-50 border border-slate-100 active:scale-95 transition-all">
                <div className={`h-11 w-11 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${col.color}`}>
                  <col.icon size={20} />
                </div>
                <div>
                  <span className="block text-[12px] font-black uppercase tracking-tight text-ink">{col.name}</span>
                  <span className="text-[9px] font-bold text-slate-400">{col.count}</span>
                </div>
             </button>
           ))}
        </div>
      </div>

      {/* 6. CUSTOMER FEEDBACK (TESTIMONIALS) */}
      <div className="mt-16 bg-slate-50/50 py-12">
        <div className="px-5 mb-8">
           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-coral mb-2">Social Proof</p>
           <h3 className="text-2xl font-black text-ink leading-tight">What our circle<br />is saying.</h3>
        </div>
        
        <div className="flex overflow-x-auto gap-4 px-5 scrollbar-none touch-pan-x">
          {[
            { name: "Siddhant", text: "The studio is pure magic. Seeing the gift come to life is addictive!", role: "Luxury Buyer" },
            { name: "Ananya", text: "Fastest delivery I've ever seen for a personalized gift. 10/10.", role: "Corporate" },
            { name: "Rahul", text: "The quality of the engraving on the bottle was top-notch.", role: "Collector" }
          ].map((t, i) => (
            <div key={i} className="shrink-0 w-[280px] bg-white p-6 rounded-[32px] shadow-xl shadow-slate-200/40 border border-slate-100">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} className="fill-orange-400 text-orange-400" />)}
              </div>
              <p className="text-[13px] font-medium text-slate-600 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-[10px] text-ink">{t.name[0]}</div>
                <div>
                  <p className="text-[11px] font-black text-ink">{t.name}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. TRUST FEATURES */}
      <div className="mt-16 px-5 pb-20">
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Award, title: "Premium Quality", desc: "Handpicked selection" },
            { icon: ShieldCheck, title: "Secure Pay", desc: "100% Protected" }
          ].map((f, i) => (
            <div key={i} className="flex flex-col gap-3 p-6 rounded-[28px] border border-slate-100 bg-white shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                <f.icon size={18} />
              </div>
              <div>
                <h4 className="text-[11px] font-black text-ink uppercase tracking-tight">{f.title}</h4>
                <p className="text-[9px] font-bold text-slate-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
