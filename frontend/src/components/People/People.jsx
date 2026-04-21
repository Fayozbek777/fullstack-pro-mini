import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import msg1 from "../../assets/message-imag1.png";
import msg2 from "../../assets/message-imag2.png";
import msg3 from "../../assets/message-imag3.png";
import p1 from "../../assets/person-image1.png";
import p2 from "../../assets/person-image2.png";
import p3 from "../../assets/person-image3.png";

const People = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const msgIcons = [msg1, msg2, msg3];

  const reviews = [
    {
      name: "Sarah Nguyen",
      city: "San Francisco",
      img: p1,
      text: "Dwello truly cares about their clients. They listened to my needs and helped me find the perfect home in the Bay Area.",
    },
    {
      name: "Michael Rodriguez",
      city: "San Diego",
      img: p2,
      text: "I had a fantastic experience. Their expertise and personalized service exceeded my expectations.",
    },
    {
      name: "Emily Johnson",
      city: "Los Angeles",
      img: p3,
      text: "Dwello made my dream a reality! Their team provided exceptional support and guided me through every step.",
    },
    {
      name: "David Chen",
      city: "New York",
      img: p1,
      text: "Unmatched professionalism. The process of buying a luxury apartment was smooth and stress-free.",
    },
    {
      name: "Jessica Blair",
      city: "Miami",
      img: p2,
      text: "The attention to detail is insane. They don't just sell houses; they find you a lifestyle. Highly recommended!",
    },
    {
      name: "Robert Fox",
      city: "Austin",
      img: p3,
      text: "Best real estate experience ever. Transparent, honest, and extremely fast. My family is very happy.",
    },
    {
      name: "Sophia Loren",
      city: "Chicago",
      img: p1,
      text: "Sophisticated service for sophisticated clients. If you want the best in the market, go with Dwello.",
    },
    {
      name: "James Wilson",
      city: "Seattle",
      img: p2,
      text: "Found a hidden gem in Seattle that wasn't even on the public market yet. Top-tier connections.",
    },
  ];

  return (
    <section className="py-32 bg-brand-cream overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="text-center mb-32" data-aos="fade-up">
          <h6 className="text-brand-sand uppercase tracking-[0.5em] font-bold text-xs mb-6">
            Testimonials
          </h6>
          <h2 className="text-brand-coffee text-5xl lg:text-7xl font-black tracking-tighter">
            What People Say
          </h2>
        </div>

        <div className="relative px-4" data-aos="zoom-in">
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={1}
            loop={false}
            spaceBetween={90}
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{ delay: 1500, disableOnInteraction: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 8 },
              1200: { slidesPerView: 3 },
            }}
            className="people-swiper !overflow-visible"
          >
            {reviews.map((rev, i) => (
              <SwiperSlide key={i} className="pb-12">
                <div className="relative group">
                  {/* FLOATING ICON (382x169) */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    className="absolute -top-24 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
                    style={{ width: "382px", height: "169px" }}
                  >
                    <img
                      src={msgIcons[i % 3]}
                      alt="quote"
                      className="w-full h-full object-contain drop-shadow-[0_20px_25px_rgba(43,27,18,0.15)] group-hover:drop-shadow-[0_30px_35px_rgba(43,27,18,0.25)] transition-all duration-500"
                    />
                  </motion.div>

                  {/* CARD */}
                  <div className="bg-brand-sand p-10 pt-24 rounded-[60px] min-h-[460px] flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="space-y-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            size={18}
                            fill="#2B1B12"
                            color="#2B1B12"
                          />
                        ))}
                      </div>
                      <p className="text-brand-coffee text-xl font-medium leading-relaxed italic">
                        "{rev.text}"
                      </p>
                    </div>

                    <div className="flex items-center gap-5 border-t border-brand-coffee/10 pt-8">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md border-2 border-brand-cream">
                        <img
                          src={rev.img}
                          alt={rev.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-brand-coffee font-black text-2xl mb-1">
                          {rev.name}
                        </h4>
                        <p className="text-brand-coffee/50 font-bold uppercase tracking-widest text-[10px]">
                          {rev.city}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .people-swiper .swiper-pagination {
          bottom: -40px !important;
        }
        .people-swiper .swiper-pagination-bullet {
          background: #2b1b12 !important;
          width: 10px;
          height: 10px;
          transition: all 0.4s ease;
          opacity: 0.15;
        }
        .people-swiper .swiper-pagination-bullet-active {
          width: 35px;
          border-radius: 10px;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default People;
