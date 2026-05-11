import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { money } from "../utils/helpers.js";
const placeholderImage = "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800";
const secondaryPlaceholder = "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800";

export default function ProductCard({ product, selected, onSelect }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <article 
      onClick={onSelect}
      className={`relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500 ${
        selected 
          ? "border-primary bg-white ring-4 ring-primary/5 shadow-xl" 
          : "border-slate-100 bg-white hover:border-slate-200"
      }`}
    >
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <div className={`absolute inset-0 bg-slate-200 animate-pulse transition-opacity duration-500 ${loaded ? "opacity-0" : "opacity-100"}`} />
        <img
          src={product.image || placeholderImage}
          alt={product.name}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={(e) => { 
            if (e.target.src !== placeholderImage) {
              e.target.src = placeholderImage; 
            } else if (e.target.src !== secondaryPlaceholder) {
              e.target.src = secondaryPlaceholder;
            }
          }}
          className={`relative z-10 h-full w-full object-cover transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"} ${selected ? "scale-105" : "hover:scale-105"}`}
        />
        {selected && (
          <div className="absolute right-3 top-3 z-20 grid h-6 w-6 place-items-center rounded-full bg-primary text-white shadow-lg">
             <CheckCircle2 size={14} />
          </div>
        )}
      </div>
      <div className="p-2 sm:p-5">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-1 sm:gap-3">
          <div>
            <p className="text-[7px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400">{product.category}</p>
            <h4 className="mt-0.5 sm:mt-1 text-xs sm:text-lg font-black tracking-tight text-ink line-clamp-1">{product.name}</h4>
          </div>
          <p className="text-xs sm:text-base font-black text-ink">{money(product.price)}</p>
        </div>
      </div>
    </article>
  );
}
