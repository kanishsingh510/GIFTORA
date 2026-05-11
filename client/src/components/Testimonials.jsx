import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Anita Desai",
    text: "The personalized touch they added to my gift was absolutely stunning. Highly recommend for any special occasion!",
    rating: 5,
    role: "Verified Customer"
  },
  {
    id: 2,
    name: "Meera Patel",
    text: "Giftora Studio made it so easy to design a custom mug for my dad. The print quality is top-notch and delivery was fast.",
    rating: 5,
    role: "Verified Customer"
  },
  {
    id: 3,
    name: "Arjun Singh",
    text: "Found the perfect anniversary hamper here. The packaging was beautiful and the items felt very premium.",
    rating: 5,
    role: "Verified Customer"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral mb-3">Customer Feedback</p>
        <h2 className="text-4xl font-black text-ink">What Our Customers Say</h2>
      </div>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="glass-card p-8 relative">
            <Quote className="absolute top-6 right-6 text-mint/20" size={40} />
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-coral text-coral" />
              ))}
            </div>
            <p className="text-slate-600 font-medium italic mb-6 leading-relaxed">
              "{review.text}"
            </p>
            <div>
              <p className="font-black text-ink">{review.name}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
