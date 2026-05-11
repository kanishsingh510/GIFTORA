import { useState } from "react";
import { ArrowRight } from "lucide-react";

const placeholderImage = "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=400";

export default function CategoryCard({ category, image, subtitle, count, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div 
      onClick={onClick}
      className="group relative h-44 sm:h-52 overflow-hidden rounded-[20px] sm:rounded-[32px] border border-slate-100 bg-white cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={image || placeholderImage} 
          alt={category} 
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
      </div>
      
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 sm:p-8 text-white">
        <div className="flex items-end justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-2xl font-serif font-semibold mb-1 leading-tight">{category}</h3>
            <p className="text-[10px] sm:text-[11px] font-medium text-white/75 mb-1 line-clamp-1">
              {subtitle}
            </p>
            <p className="text-[9px] sm:text-[10px] font-bold text-white/50 tracking-wider uppercase">
              {count} Gifts
            </p>
          </div>
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 shrink-0">
            <ArrowRight size={15} />
          </div>
        </div>
      </div>
    </div>
  );
}
