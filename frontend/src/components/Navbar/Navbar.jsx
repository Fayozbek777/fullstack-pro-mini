import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, LogOut } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Проверка авторизации при загрузке
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsAuth(!!token);
    };

    checkAuth();

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    // Слушаем изменения в localStorage (например, после логина)
    window.addEventListener("storage", checkAuth);

    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", checkAuth);
    };
  }, [isOpen]);

  // Функция для выхода
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    navigate("/");
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Service", href: "#" },
    { name: "Agents", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const fadeln = (delay) => ({
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: "easeOut" },
  });

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-in-out px-8 py-6 ${
          scrolled || isOpen ? "bg-[#fef7f2] shadow-xl py-4" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between relative z-[1001]">
          <div data-aos="fade-right" data-aos-duration="800">
            <Link to="/">
              <motion.img
                src={logo}
                alt="logo"
                className="h-12 w-auto object-contain cursor-pointer"
                whileHover={{ scale: 1.05 }}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-14">
            <ul className="flex space-x-10">
              {navLinks.map((link, i) => (
                <motion.li key={link.name} {...fadeln(0.1 * i)}>
                  <a
                    href={link.href}
                    className="text-[#2B1B12] text-[18px] uppercase tracking-[0.2em] font-bold hover:text-[#ddc7bb] transition-all duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#ddc7bb] transition-all duration-500 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center space-x-8 text-[#2B1B12]">
              <motion.div {...fadeln(0.5)} whileHover={{ scale: 1.1 }}>
                <Search
                  size={28}
                  strokeWidth={1.5}
                  className="cursor-pointer hover:text-[#ddc7bb]"
                />
              </motion.div>

              {/* Если авторизован, иконка юзера может вести в профиль */}
              <motion.div
                {...fadeln(0.6)}
                whileHover={{ scale: 1.1 }}
                onClick={() => isAuth && navigate("/profile")}
              >
                <User
                  size={28}
                  strokeWidth={1.5}
                  className="cursor-pointer hover:text-[#ddc7bb]"
                />
              </motion.div>

              <div className="flex items-center gap-4">
                <AnimatePresence mode="wait">
                  {isAuth ? (
                    <motion.div
                      key="profile-area"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center gap-4"
                    >
                      <Link to="/profile">
                        <motion.button
                          whileHover={{
                            backgroundColor: "#ddc7bb",
                            color: "#2B1B12",
                            scale: 1.05,
                          }}
                          className="bg-[#2B1B12] text-[#fef7f2] px-10 py-4 rounded-[40px] text-[12px] uppercase tracking-[0.25em] font-black shadow-lg transition-all"
                        >
                          Profile
                        </motion.button>
                      </Link>

                      {/* Кнопка выхода для удобства */}
                      <motion.button
                        onClick={handleLogout}
                        whileHover={{ scale: 1.1, color: "#ef4444" }}
                        className="text-[#2B1B12]/50 transition-colors"
                        title="Logout"
                      >
                        <LogOut size={20} />
                      </motion.button>
                    </motion.div>
                  ) : (
                    <Link key="auth-link" to="/authentication">
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
                    </Link>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
