import { Sparkles, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white pt-20 pb-10 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-white shadow-lg">
                <Sparkles size={20} />
              </div>
              <h2 className="text-xl font-black">Giftora Studio</h2>
            </div>
            <p className="mt-6 text-sm text-slate-500 font-medium leading-relaxed">
              Premium personalized gifting platform. We combine technology with craftsmanship to create unique memories.
            </p>
            <div className="mt-8 flex items-center gap-4">
               <SocialIcon icon={Instagram} />
               <SocialIcon icon={Twitter} />
               <SocialIcon icon={Facebook} />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 lg:col-span-3">
            <FooterGroup 
              title="Shop" 
              links={["Mugs", "T-Shirts", "Jewelry", "Hampers", "Photo Frames"]} 
            />
            <FooterGroup 
              title="Company" 
              links={["About Us", "Contact", "Terms of Service", "Privacy Policy"]} 
            />
          </div>
        </div>
        
        <div className="mt-20 border-t border-slate-50 pt-10 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © 2026 Giftora Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-black text-ink uppercase tracking-widest mb-6">{title}</h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm font-bold text-slate-500 hover:text-mint transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ icon: Icon }) {
  return (
    <a href="#" className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-mint hover:border-mint transition-all">
      <Icon size={18} />
    </a>
  );
}
