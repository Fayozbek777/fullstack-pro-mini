import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, Mail, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const Help = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: form.current.user_email.value.split("@")[0],
      message: "User requested help/callback via footer form.",
      title: "New Support Request",
      user_email: form.current.user_email.value,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          setLoading(false);
          console.error("FAILED...", error);
        },
      );
  };

  const features = ["Chat live with our support team", "Browse our FAQ"];

  return (
    <section className="py-24 px-8 bg-brand-cream">
      <div
        className="max-w-[1200px] mx-auto bg-brand-coffee rounded-[60px] p-12 lg:p-20 relative overflow-hidden shadow-2xl"
        data-aos="zoom-in-up"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-sand/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-sand/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 space-y-8">
            <h1 className="text-brand-cream text-4xl lg:text-6xl font-black tracking-tighter leading-tight">
              Do You Have Any Questions? <br />
              <span className="text-brand-sand">Get Help From Us</span>
            </h1>

            <div className="space-y-4">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-brand-cream/80"
                >
                  <CheckCircle2 className="text-brand-sand" size={24} />
                  <span className="text-lg font-medium tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[450px]">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-brand-cream/5 backdrop-blur-md p-2 rounded-[30px] border border-brand-cream/10 flex items-center shadow-inner"
            >
              <div className="pl-6 text-brand-sand">
                <Mail size={20} />
              </div>
              <input
                required
                name="user_email"
                type="email"
                placeholder="Enter your email address..."
                className="w-full bg-transparent py-5 px-4 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none font-medium"
              />
              <button
                disabled={loading || sent}
                className={`px-10 py-4 rounded-[22px] font-black uppercase tracking-widest text-xs transition-all flex items-center gap-2 
                  ${sent ? "bg-green-500 text-white" : "bg-brand-sand text-brand-coffee hover:bg-white"}`}
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : sent ? (
                  "Sent"
                ) : (
                  "Submit"
                )}
              </button>
            </form>
            <p className="mt-4 text-brand-cream/30 text-xs text-center tracking-widest uppercase font-bold">
              We'll respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
