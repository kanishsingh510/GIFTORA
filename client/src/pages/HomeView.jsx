import { useNavigate } from "react-router-dom";
import { Sparkles, ShoppingBag, Gift, Truck, ShieldCheck } from "lucide-react";
import CategoryCard from "../components/CategoryCard.jsx";
import Testimonials from "../components/Testimonials.jsx";

const categories = [
  {
    id: "birthday",
    name: "Birthday Gifts",
    subtitle: "Make their day special with a personal touch",
    image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=800&auto=format&fit=crop",
    count: 12
  },
  {
    id: "anniversary",
    name: "Anniversary Gifts",
    subtitle: "Celebrate your love with timeless memories",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
    count: 8
  },
  {
    id: "personalized",
    name: "Personalized Items",
    subtitle: "Unique gifts crafted specifically for you",
    image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=800&auto=format&fit=crop",
    count: 24
  },
  {
    id: "corporate",
    name: "Corporate Gifting",
    subtitle: "Professional gifts for your valued partners",
    image: "https://images.unsplash.com/photo-1512418490979-92798ccc1380?q=80&w=800&auto=format&fit=crop",
    count: 15
  }
];

export default function HomeView() {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint/5 rounded-full blur-3xl -z-10" />
        <h2 className="text-5xl font-black tracking-tighter sm:text-8xl text-ink leading-[1.05] mb-8">
          Every Gift Tells <br />
          <span className="text-coral italic">a Unique Story.</span>
        </h2>
        <p className="mt-6 mx-auto max-w-2xl text-lg text-slate-500 font-medium leading-relaxed sm:text-2xl mb-10">
          Design premium personalized gifts in real-time. From custom jewelry to artisan hampers, we bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => navigate("/studio")}
            className="focus-ring bg-ink text-white h-16 px-10 rounded-2xl text-lg font-black hover:bg-slate-800 transition-all shadow-xl shadow-ink/20 flex items-center gap-3 w-full sm:w-auto"
          >
            <Sparkles size={24} className="text-coral" />
            Start Designing
          </button>
          <button 
             onClick={() => {
                document.getElementById('shop-categories')?.scrollIntoView({ behavior: 'smooth' });
             }}
             className="focus-ring bg-white border-2 border-slate-100 text-ink h-16 px-10 rounded-2xl text-lg font-black hover:border-mint transition-all flex items-center gap-3 w-full sm:w-auto"
          >
            Browse Collections
          </button>
        </div>
      </section>

      {/* Trust Features */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {[
          { icon: Gift, label: "Premium Packaging", sub: "Ready to gift" },
          { icon: Truck, label: "Express Delivery", sub: "Fast & reliable" },
          { icon: ShieldCheck, label: "Quality Assured", sub: "Crafted with care" },
          { icon: ShoppingBag, label: "Secure Payment", sub: "100% encrypted" }
        ].map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center p-6 rounded-3xl bg-white border border-slate-50 shadow-sm">
            <div className="h-12 w-12 rounded-2xl bg-mint/10 flex items-center justify-center text-mint mb-4">
              <f.icon size={24} />
            </div>
            <p className="font-black text-sm text-ink">{f.label}</p>
            <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-widest">{f.sub}</p>
          </div>
        ))}
      </section>

      {/* Categories Section */}
      <section id="shop-categories" className="mb-24">
        <div className="flex flex-col sm:flex-row items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral mb-3">Curated Varieties</p>
            <h2 className="text-4xl font-black text-ink">Shop by Category</h2>
          </div>
          <button 
             onClick={() => navigate("/studio")}
             className="text-sm font-bold text-mint hover:text-ink transition-colors flex items-center gap-2"
          >
            View All Varieties <ShoppingBag size={16} />
          </button>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2">
          {categories.map((cat) => (
            <CategoryCard 
              key={cat.id} 
              {...cat} 
              onClick={() => navigate("/studio")} 
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <section className="mt-12 rounded-[40px] bg-ink p-12 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-coral/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <h2 className="text-4xl font-black mb-6">Ready to create something special?</h2>
        <p className="text-slate-300 max-w-xl mx-auto mb-10 text-lg">
          Join thousands of happy customers who trust Giftora Studio for their most meaningful moments.
        </p>
        <button 
          onClick={() => navigate("/studio")}
          className="focus-ring bg-coral text-white h-14 px-8 rounded-xl text-sm font-black hover:bg-rose-500 transition-all shadow-lg shadow-coral/20"
        >
          Open Design Studio
        </button>
      </section>
    </div>
  );
}
