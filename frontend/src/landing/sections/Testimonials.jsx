import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "Manager",
    company: "TechStart Solutions",
    content:
      "Honestly, this financial management system has changed the way we manage money at work. Earlier we used to spend so much time on routine tasks, but now the automation saves us hours every single week.",
    contentHindi:
      "सच बोलूँ तो इस फाइनेंशियल सिस्टम ने हमारा पूरा तरीका ही बदल दिया। पहले छोटा-छोटा काम करने में कितना टाइम चला जाता था। अब ऑटोमेशन की वजह से हर हफ्ते कई घंटे बच जाते हैं। बहुत काम की चीज़ है।",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&size=256&background=3b82f6&color=ffffff",
  },
  {
    name: "Priya Singh",
    title: "Finance Manager",
    company: "Growth Enterprises",
    content:
      "The reporting part is just amazing. We can actually see cash flow live, and it helps us take decisions way faster than before. It really gives us confidence in running the business.",
    contentHindi:
      "रिपोर्टिंग फीचर्स तो कमाल के हैं! अब कैश फ्लो रियल-टाइम में दिख जाता है और डिसीजन तुरंत ले सकते हैं। पहले जो कंफ्यूजन रहता था, अब सब क्लियर हो जाता है। बिजनेस ग्रो करने में बहुत मदद मिल रही है।",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Priya+Singh&size=256&background=ec4899&color=ffffff",
  },
  {
    name: "Amit Sharma",
    title: "Business Owner",
    company: "Local Market Store",
    content:
      "Being a business owner, I always found accounting stressful. But this tool makes everything so simple. The design is clean, easy to use, and honestly saves me from a lot of headache.",
    contentHindi:
      "अकाउंटिंग हमेशा टेंशन दे देती थी। लेकिन इस टूल ने सब इतना आसान कर दिया कि अब झंझट ही नहीं रहता। इंटरफेस भी इतना सिंपल है कि कोई भी आराम से चला ले। सच में बहुत बढ़िया है।",
    rating: 4,
    image: "https://ui-avatars.com/api/?name=Amit+Sharma&size=256&background=10b981&color=ffffff",
  },
];


const TestimonialsSection = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl tracking-tight sm:text-4xl font-bold mb-2">
            Trusted by hundreds of businesses
          </h2>
          <p className="mt-6 text-lg leading-8">
            See how business owners like you are transforming their financial
            management.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-none gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <FlipCard key={idx} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FlipCard = ({ testimonial }) => {
  return (
    <div
      className="flip-card w-full min-w-[18rem] h-80 min-h-[20rem] max-h-[24rem] rounded-lg shadow-lg"
      style={{ perspective: "1000px" }}
    >
      <style>
        {`
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: left;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }

          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            border-radius: 0.5rem;
            box-shadow:
              0 10px 15px -3px rgb(0 0 0 / 0.1),
              0 4px 6px -4px rgb(0 0 0 / 0.1);
            padding: 2rem; /* p-8 */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            background-color: white;
          }

          .flip-card-back {
            transform: rotateY(180deg);
            background: linear-gradient(to bottom right, #2563eb, #1d4ed8);
            color: white;
            padding: 2rem; /* p-8 */
          }
        `}
      </style>

      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div>
            <div className="flex items-center gap-x-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-primary text-primary"
                  aria-label="Star rating"
                />
              ))}
            </div>
            <blockquote className="text-lg leading-8 text-gray-900 line-clamp-4">
              "{testimonial.content}"
            </blockquote>
          </div>
          <div className="mt-8 flex items-center gap-x-4">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src={testimonial.image}
              alt={`${testimonial.name} profile`}
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  testimonial.name
                )}&size=48&background=e5e7eb&color=374151`;
              }}
            />
            <div>
              <div className="text-base font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-600">
                {testimonial.title}, {testimonial.company}
              </div>
            </div>
          </div>
        </div>

        <div className="flip-card-back">
          <div>
            <blockquote className="text-lg leading-8 line-clamp-6">
              "{testimonial.contentHindi}"
            </blockquote>
          </div>
          <div className="mt-8 text-right">
            <div className="text-base font-semibold">{testimonial.name}</div>
            <div className="text-sm opacity-90">
              {testimonial.title}, {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
