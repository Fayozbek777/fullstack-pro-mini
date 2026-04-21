import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import poplar1 from "../../assets/popular-image1.png";
import poplar2 from "../../assets/popular-image2.png";
import poplar3 from "../../assets/popular-image3.png";
import roomIcon from "../../assets/rooms.png";
import sizeIcon from "../../assets/size.png";

const Popular = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const residences = [
    {
      img: poplar1,
      location: "San Francisco, California",
      rooms: "4 Rooms",
      size: "3,500 sq ft",
      price: "$2,500,000",
    },
    {
      img: poplar2,
      location: "Beverly Hills, California",
      rooms: "5 Rooms",
      size: "4,200 sq ft",
      price: "$3,800,000",
    },
    {
      img: poplar3,
      location: "Palo Alto, California",
      rooms: "6 Rooms",
      size: "5,000 sq ft",
      price: "$4,150,000",
    },
  ];

  return (
    <section className="py-24 px-8 bg-[#fef7f2]">
      <div className="max-w-[1440px] mx-auto">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          data-aos="fade-up"
        >
          <div>
            <h6 className="text-brand-sand uppercase tracking-[0.4em] font-bold text-sm mb-4">
              Best Choices
            </h6>
            <h1 className="text-brand-coffee text-5xl lg:text-6xl font-black tracking-tighter">
              Our Popular Residences
            </h1>
          </div>
          <button className="text-brand-coffee font-bold uppercase tracking-widest text-sm border-b-2 border-brand-sand pb-2 hover:text-brand-sand transition-colors">
            View All Properties
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {residences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-[45px] p-6 shadow-[0_20px_50px_rgba(43,27,18,0.05)] border border-brand-sand/10 group hover:shadow-[0_30px_60px_rgba(43,27,18,0.1)] transition-all duration-500"
            >
              <div className="relative h-[320px] rounded-[35px] overflow-hidden mb-8">
                <img
                  src={item.img}
                  alt="Residence"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-brand-coffee font-bold text-xs uppercase tracking-widest">
                  Popular
                </div>
              </div>

              <div className="space-y-6 px-2">
                <div className="flex items-center gap-2 text-brand-coffee/60">
                  <MapPin size={30} className="text-brand-sand" />
                  <span className="text-2xl font-semibold tracking-wide">
                    {item.location}
                  </span>
                </div>

                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <img
                      src={roomIcon}
                      alt="rooms"
                      className="h-9 w-9 opacity-80"
                    />
                    <span className="text-brand-coffee text-2xl  font-bold  ">
                      {item.rooms}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={sizeIcon}
                      alt="size"
                      className="h-9 w-9 opacity-80"
                    />
                    <span className="text-brand-coffee font-bold  text-2xl">
                      {item.size}
                    </span>
                  </div>
                </div>

                <div className="h-[1px] bg-brand-sand/20 w-full" />

                <div className="flex items-center justify-between pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-coffee text-brand-cream px-8 py-4 rounded-2xl text-[10px] uppercase tracking-widest font-black hover:bg-brand-sand hover:text-brand-coffee transition-all shadow-lg"
                  >
                    Explore
                  </motion.button>
                  <div className="text-right">
                    <p className="text-[20px] text-brand-sand uppercase font-bold tracking-widest mb-1">
                      Price
                    </p>
                    <h2 className="text-brand-coffee text-2xl font-black">
                      {item.price}
                    </h2>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
