import { useState } from "react";
import { ArrowRight } from "lucide-react";

const placeholderImage = "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=400";

export default function CategoryCard({ category, image, subtitle, count, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div 
      onClick={onClick}
      className="group relative h-80 overflow-hidden rounded-3xl border border-slate-100 bg-white cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <div className="absolute inset-0 z-0 bg-slate-100 animate-pulse transition-opacity duration-500" style={{ opacity: loaded ? 0 : 1 }}>
      </div>
      <div className="absolute inset-0 z-0">
        <img 
          src={image || placeholderImage} 
          alt={category} 
          onLoad={() => setLoaded(true)}
          onError={(e) => { 
            if (e.target.src !== placeholderImage) {
              e.target.src = placeholderImage; 
              setLoaded(true); 
            }
          }}
          className={`h-full w-full object-cover transition-all duration-700 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-110"} group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      </div>
      
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 mb-2">{count} Items</p>
        <h3 className="text-2xl font-black mb-1">{category}</h3>
        <p className="text-sm font-medium text-slate-200 mb-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {subtitle}
        </p>
        <div className="flex items-center gap-2 text-sm font-bold text-orange-500">
          Explore Now <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </div>
  );
}
