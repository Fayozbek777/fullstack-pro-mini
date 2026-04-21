import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import locate from "../../assets/choose-image1.png";
import person from "../../assets/choose-image2.png";
import note from "../../assets/choose-image3.png";
import handshake from "../../assets/choose-image4.png";

const Why = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      img: locate,
      title: "Expert Guidance",
      text: "Benefit from our team's seasoned expertise for a smooth buying experience",
    },
    {
      img: person,
      title: "Personalized Service",
      text: "Our services adapt to your unique needs, making your journey stress-free",
    },
    {
      img: note,
      title: "Transparent Process",
      text: "Stay informed with our clear and honest approach to buying your home",
    },
    {
      img: handshake,
      title: "Exceptional Support",
      text: "Providing peace of mind with our responsive and attentive customer service",
    },
  ];

  return (
    <section className="py-24 px-8 bg-[#fef7f2]">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center space-y-6 mb-20" data-aos="fade-up">
          <h6 className="text-brand-sand uppercase tracking-[0.4em] font-bold text-sm">
            Our Values
          </h6>
          <h2 className="text-brand-coffee text-5xl lg:text-6xl font-black tracking-tighter">
            Why Choose Us
          </h2>
          <p className="text-brand-coffee/60 text-xl max-w-2xl mx-auto font-medium">
            Elevating Your Home Buying Experience with Expertise, Integrity, and
            Unmatched Personalized Service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -15 }}
              className="group bg-brand-sand/10 p-10 rounded-[40px] border border-brand-sand/20 hover:bg-brand-sand transition-all duration-500"
            >
              <div className="w-20 h-20 bg-brand-cream rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="text-brand-coffee text-2xl font-bold mb-4 group-hover:text-brand-cream transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-brand-coffee/70 text-base leading-relaxed group-hover:text-brand-cream/80 transition-colors duration-500">
                {item.text}
              </p>

              <div className="w-12 h-[2px] bg-brand-sand mt-6 group-hover:bg-brand-cream transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
