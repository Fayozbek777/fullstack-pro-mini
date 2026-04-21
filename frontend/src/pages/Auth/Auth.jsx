import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Computer, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleForgotPassword = async () => {
    const email = prompt("Enter your email to reset password:");
    if (!email) return;

    try {
      await api.post("/forgot-password", {
        email,
        password: "dummy",
        username: "dummy",
      });
      alert("Check backend console for reset link!");
    } catch (err) {
      alert("Error sending reset link");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const endpoint = isLogin ? "/login" : "/register";

    try {
      const response = await api.post(endpoint, formData);
      const { access_token } = response.data;

      localStorage.setItem("token", access_token);

      // Генерируем событие, чтобы Navbar переключился на "Profile"
      window.dispatchEvent(new Event("storage"));

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.detail || "Something went wrong. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: isLogin ? -50 : 50, filter: "blur(10px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: isLogin ? 50 : -50, filter: "blur(10px)" },
  };

  return (
    <div className="min-h-screen bg-[#fef7f2] flex items-center justify-center p-6 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#ddc7bb]/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#2B1B12]/5 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[1100px] bg-white rounded-[40px] shadow-[0_50px_100px_-20px_rgba(43,27,18,0.15)] flex overflow-hidden min-h-[650px] relative z-10"
      >
        {/* Left Side: Branding */}
        <div className="hidden lg:flex w-1/2 bg-[#2B1B12] relative flex-col justify-between p-12 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-[-20%] right-[-20%] w-full h-full bg-[#ddc7bb]/10 rounded-full blur-3xl"
          />

          <Link
            to="/"
            className="text-[#fef7f2] font-black text-2xl tracking-tighter z-10"
          >
            DWELLO<span className="text-[#ddc7bb]">.</span>
          </Link>

          <div className="z-10">
            <h2 className="text-[#fef7f2] text-5xl font-black leading-tight mb-6">
              {isLogin
                ? "Welcome Back to Luxury"
                : "Start Your Journey With Us"}
            </h2>
            <p className="text-[#fef7f2]/60 text-lg font-medium">
              Experience the future of real estate with our premium dashboard.
            </p>
          </div>

          <div className="text-[#fef7f2]/30 text-xs font-bold uppercase tracking-widest z-10">
            © 2026 Dwello Premium Systems
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center bg-white relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "register"}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-10 text-center lg:text-left">
                <h3 className="text-[#2B1B12] text-3xl font-black mb-2">
                  {isLogin ? "Sign In" : "Create Account"}
                </h3>
                <p className="text-[#2B1B12]/40 font-bold text-sm uppercase tracking-widest">
                  {isLogin
                    ? "Enter your details below"
                    : "Join our exclusive community"}
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-bold rounded-r-lg">
                  {error}
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                {!isLogin && (
                  <div className="relative group">
                    <User
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-[#2B1B12]/30 group-focus-within:text-[#ddc7bb] transition-colors"
                      size={20}
                    />
                    <input
                      name="username"
                      type="text"
                      required
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full bg-[#fef7f2] border-2 border-transparent focus:border-[#ddc7bb]/30 focus:bg-white rounded-[20px] py-4 pl-14 pr-6 outline-none transition-all font-bold text-[#2B1B12]"
                    />
                  </div>
                )}

                <div className="relative group">
                  <Mail
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#2B1B12]/30 group-focus-within:text-[#ddc7bb] transition-colors"
                    size={20}
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full bg-[#fef7f2] border-2 border-transparent focus:border-[#ddc7bb]/30 focus:bg-white rounded-[20px] py-4 pl-14 pr-6 outline-none transition-all font-bold text-[#2B1B12]"
                  />
                </div>

                <div className="relative group">
                  <Lock
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#2B1B12]/30 group-focus-within:text-[#ddc7bb] transition-colors"
                    size={20}
                  />
                  <input
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full bg-[#fef7f2] border-2 border-transparent focus:border-[#ddc7bb]/30 focus:bg-white rounded-[20px] py-4 pl-14 pr-6 outline-none transition-all font-bold text-[#2B1B12]"
                  />
                </div>

                {isLogin && (
                  <div className="text-right">
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-[10px] uppercase tracking-widest font-black text-[#2B1B12]/40 hover:text-[#ddc7bb] transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-[#2B1B12] text-[#fef7f2] py-5 rounded-[20px] font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-[#2B1B12]/20 hover:bg-[#ddc7bb] hover:text-[#2B1B12] transition-all duration-500 flex items-center justify-center gap-3 group disabled:opacity-70"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <>
                      {isLogin ? "Login Now" : "Register Now"}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>

              {/* Social Login */}
              <div className="mt-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px bg-[#2B1B12]/10 flex-1" />
                  <span className="text-[10px] font-black text-[#2B1B12]/20 uppercase tracking-widest">
                    Or continue with
                  </span>
                  <div className="h-px bg-[#2B1B12]/10 flex-1" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-3 py-4 border-2 border-[#fef7f2] rounded-2xl hover:border-[#ddc7bb]/50 transition-all font-bold text-sm text-[#2B1B12]">
                    <Mail size={18} /> Google
                  </button>
                  <button className="flex items-center justify-center gap-3 py-4 border-2 border-[#fef7f2] rounded-2xl hover:border-[#ddc7bb]/50 transition-all font-bold text-sm text-[#2B1B12]">
                    <Computer size={18} /> GitHub
                  </button>
                </div>
              </div>

              {/* Toggle Login/Register */}
              <div className="mt-12 text-center">
                <p className="text-[#2B1B12]/40 font-bold text-sm">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  <button
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setError("");
                    }}
                    className="ml-2 text-[#2B1B12] font-black border-b-2 border-[#ddc7bb] hover:text-[#ddc7bb] transition-all"
                  >
                    {isLogin ? "Create one" : "Login"}
                  </button>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
