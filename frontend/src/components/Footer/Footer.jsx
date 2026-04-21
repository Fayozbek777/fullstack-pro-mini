import React from "react";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitterx.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "About",
      links: ["Our Story", "Careers", "Our Team", "Resources"],
    },
    {
      title: "Support",
      links: ["FAQ", "Contact Us", "Help Center", "Terms of Service"],
    },
    {
      title: "Find Us",
      links: ["Events", "Locations", "Newsletter"],
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: instagram },
    { name: "Facebook", icon: facebook },
    { name: "Twitter (x)", icon: twitter },
  ];

  return (
    <footer className="bg-[#ddc7bb] pt-20 pb-10 px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-[#2B1B12]/10">
          <div className="lg:col-span-4 space-y-8">
            <img
              src={logo}
              alt="Dwello"
              className="h-10 w-auto object-contain"
            />
            <p className="text-[#2B1B12]/70 text-lg font-medium leading-relaxed max-w-xs">
              Bringing you closer to your dream home, one click at a time.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-6">
                <h4 className="text-[#2B1B12] font-black uppercase tracking-widest text-[11px]">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[#2B1B12]/60 hover:text-[#2B1B12] font-bold text-sm transition-colors tracking-tight"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-6">
              <h4 className="text-[#2B1B12] font-black uppercase tracking-widest text-[11px]">
                Our Social
              </h4>
              <ul className="space-y-4">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-[#2B1B12]/60 hover:text-[#2B1B12] font-bold text-sm transition-all group"
                    >
                      <div className="w-8 h-8 flex items-center justify-center bg-[#fef7f2]/50 rounded-lg group-hover:bg-[#fef7f2] transition-colors">
                        <img
                          src={social.icon}
                          alt={social.name}
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#2B1B12]/40 font-bold text-[10px] uppercase tracking-[0.3em]">
            © {currentYear} Dwello Real Estate. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a
              href="#"
              className="text-[#2B1B12]/40 hover:text-[#2B1B12] font-bold text-[10px] uppercase tracking-widest transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#2B1B12]/40 hover:text-[#2B1B12] font-bold text-[10px] uppercase tracking-widest transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
