import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Home, Banknote, ChevronDown, Search } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import introImg from "../../assets/hero-image1.png";

const Intro = () => {
  const locations = [
    "Tashkent, UZ",
    "Dubai, UAE",
    "London, UK",
    "New York, USA",
  ];
  const propertyTypes = ["Modern Villa", "Apartment", "Penthouse", "Townhouse"];
  const priceRanges = ["$5k - $10k", "$10k - $20k", "$20k - $50k", "$50k+"];

  const [selectedLoc, setSelectedLoc] = useState(locations[0]);
  const [selectedType, setSelectedType] = useState(propertyTypes[0]);
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);

  const fadeln = (delay) => ({
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: "easeOut" },
  });
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const closeAll = () => setActiveDropdown(null);
    window.addEventListener("click", closeAll);
    return () => window.removeEventListener("click", closeAll);
  }, []);

  const toggleDropdown = (e, name) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <section className="relative min-h-screen bg-[#fef7f2] pt-32 pb-40 px-8 flex flex-col items-center">
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row items-center justify-evenly gap-10">
        <div className="flex-1 space-y-8" data-aos="fade-right">
          <h6 className="text-[#ddc7bb] uppercase tracking-[0.4em] font-bold text-sm">
            Exclusive Living
          </h6>
          <h1 className="text-[#2B1B12] text-6xl lg:text-8xl font-black leading-[1.1] tracking-tighter">
            Find Your <br />
            <span className="text-[#ddc7bb]">Dream</span> Home
          </h1>
          <p className="text-[#2B1B12]/70 text-xl max-w-lg leading-relaxed font-medium">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2B1B12] text-[#fef7f2] px-14 py-5 rounded-full text-xs uppercase tracking-[0.3em] font-black shadow-2xl transition-all"
          >
            Explore Now
          </motion.button>
        </div>

        <div
          className="flex-1 relative flex justify-center lg:justify-end"
          data-aos="zoom-in-left"
        >
          <div className="relative w-full max-w-[600px] h-[550px] overflow-hidden rounded-tr-[120px] rounded-bl-[120px] shadow-[30px_30px_0px_0px_rgba(221,199,187,0.3)]">
            <img
              src={introImg}
              alt="Luxury"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-[3s]"
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 w-full max-w-6xl bg-white rounded-[40px] p-6 shadow-[0_40px_100px_-20px_rgba(43,27,18,0.15)] flex flex-wrap lg:flex-nowrap items-center gap-6 border border-[#ddc7bb]/10"
      >
        <div
          className="relative flex-1 min-w-[220px]"
          onClick={(e) => toggleDropdown(e, "loc")}
        >
          <div className="flex items-center gap-4 p-4 hover:bg-[#fef7f2] rounded-3xl cursor-pointer transition-all">
            <div className="bg-[#ddc7bb]/20 p-3 rounded-2xl text-[#2B1B12]">
              <MapPin size={24} />
            </div>
            <div className="flex-1">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#ddc7bb] mb-1">
                Location
              </h4>
              <p className="text-[#2B1B12] font-bold text-lg flex items-center justify-between">
                {selectedLoc}{" "}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${activeDropdown === "loc" ? "rotate-180" : ""}`}
                />
              </p>
            </div>
          </div>
          <Dropdown
            isOpen={activeDropdown === "loc"}
            items={locations}
            onSelect={setSelectedLoc}
          />
        </div>

        <div className="hidden lg:block w-[1px] h-12 bg-[#ddc7bb]/30" />

        <div
          className="relative flex-1 min-w-[220px]"
          onClick={(e) => toggleDropdown(e, "type")}
        >
          <div className="flex items-center gap-4 p-4 hover:bg-[#fef7f2] rounded-3xl cursor-pointer transition-all">
            <div className="bg-[#ddc7bb]/20 p-3 rounded-2xl text-[#2B1B12]">
              <Home size={24} />
            </div>
            <div className="flex-1">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#ddc7bb] mb-1">
                Property Type
              </h4>
              <p className="text-[#2B1B12] font-bold text-lg flex items-center justify-between">
                {selectedType}{" "}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${activeDropdown === "type" ? "rotate-180" : ""}`}
                />
              </p>
            </div>
          </div>
          <Dropdown
            isOpen={activeDropdown === "type"}
            items={propertyTypes}
            onSelect={setSelectedType}
          />
        </div>

        <div className="hidden lg:block w-[1px] h-12 bg-[#ddc7bb]/30" />
        <div
          className="relative flex-1 min-w-[220px]"
          onClick={(e) => toggleDropdown(e, "price")}
        >
          <div className="flex items-center gap-4 p-4 hover:bg-[#fef7f2] rounded-3xl cursor-pointer transition-all">
            <div className="bg-[#ddc7bb]/20 p-3 rounded-2xl text-[#2B1B12]">
              <Banknote size={24} />
            </div>
            <div className="flex-1">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#ddc7bb] mb-1">
                Price Range
              </h4>
              <p className="text-[#2B1B12] font-bold text-lg flex items-center justify-between">
                {selectedPrice}{" "}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${activeDropdown === "price" ? "rotate-180" : ""}`}
                />
              </p>
            </div>
          </div>
          <Dropdown
            isOpen={activeDropdown === "price"}
            items={priceRanges}
            onSelect={setSelectedPrice}
          />
        </div>

        <motion.button
          {...fadeln(0.7)}
          whileHover={{
            backgroundColor: "#ddc7bb",
            color: "#2B1B12",
            scale: 1.05,
          }}
          className="bg-[#2B1B12] text-[#fef7f2] px-10 py-4 rounded-[40px] text-[12px] uppercase tracking-[0.25em] font-black shadow-lg transition-all"
        >
          Sign Up
        </motion.button>
      </motion.div>
    </section>
  );
};

const Dropdown = ({ isOpen, items, onSelect }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="absolute top-full left-0 w-full mt-4 bg-white shadow-2xl rounded-2xl p-4 z-[50] border border-[#ddc7bb]/20"
      >
        {items.map((item) => (
          <div
            key={item}
            onClick={() => onSelect(item)}
            className="p-3 hover:bg-[#fef7f2] rounded-xl text-[#2B1B12] font-medium cursor-pointer transition-colors"
          >
            {item}
          </div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

export default Intro;
