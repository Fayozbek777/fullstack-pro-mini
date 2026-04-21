import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import dreamImg from "../../assets/dream-houose.png";

const Dream = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stats = [
    { number: "8K+", label: "Houses Available" },
    { number: "6K+", label: "Houses Sold" },
    { number: "2K+", label: "Trusted Agents" },
  ];

  return (
    <section className="bg-brand-cream py-24 px-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">
        <div className="flex-1 relative" data-aos="fade-right">
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-sand rounded-[40px] -z-10" />

          <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src={dreamImg}
              alt="Dream House"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute -bottom-8 -right-125 bg-brand-coffee text-brand-cream p-8 rounded-2xl hidden md:block"
          >
            <p className="text-white text-sm tracking-[0.3em] font-bold uppercase">
              Sign up
            </p>
          </motion.div>
        </div>

        <div className="flex-1 space-y-12">
          <div data-aos="fade-up">
            <h6 className="text-brand-sand uppercase tracking-[0.3em] font-bold mb-4">
              Our Achievement
            </h6>
            <h1 className="text-brand-coffee text-5xl lg:text-7xl font-black leading-tight tracking-tighter mb-6">
              We Help You To Find <br /> Your{" "}
              <span className="text-brand-sand">Dream</span> Home
            </h1>
            <p className="text-brand-coffee/70 text-lg leading-relaxed max-w-xl font-medium">
              From cozy cottages to luxurious estates, our dedicated team guides
              you through every step of the journey, ensuring your dream home
              becomes a reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 200}
                className="group"
              >
                <h2 className="text-brand-coffee text-5xl font-black mb-2 transition-colors group-hover:text-brand-sand">
                  {stat.number}
                </h2>
                <p className="text-brand-coffee/60 uppercase tracking-widest text-[11px] font-bold">
                  {stat.label}
                </p>
                <div className="w-10 h-[2px] bg-brand-sand mt-4 transition-all group-hover:w-full" />
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 text-brand-coffee font-black uppercase tracking-widest text-sm pt-4"
          >
            Learn More About Us
            <span className="w-12 h-[1px] bg-brand-coffee"></span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Dream;
