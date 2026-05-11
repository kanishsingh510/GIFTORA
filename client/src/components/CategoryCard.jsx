import { ArrowRight } from "lucide-react";

export default function CategoryCard({ category, image, subtitle, count, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="group relative h-80 overflow-hidden rounded-3xl border border-slate-100 bg-white cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={category} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      </div>
      
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral/90 mb-2">{count} Items</p>
        <h3 className="text-2xl font-black mb-1">{category}</h3>
        <p className="text-sm font-medium text-slate-200 mb-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {subtitle}
        </p>
        <div className="flex items-center gap-2 text-sm font-bold text-coral">
          Explore Now <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </div>
  );
}
