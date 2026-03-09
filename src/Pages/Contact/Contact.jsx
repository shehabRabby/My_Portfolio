import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_kfra84w",
        "template_pi5cf7e",
        form.current,
        "xseSXJnbUvHNbeoG9",
      )
      .then(
        () => {
          toast.success("Message sent to Shehab! 🚀", {
            style: {
              borderRadius: "12px",
              background: "#0a0a0a",
              color: "#fff",
              border: "1px solid #7c3aed",
              padding: "16px",
            },
          });
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Something went wrong. Please try again.");
          setIsSending(false);
        },
      );
  };

  // CONTACT DATA ARRAY
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email Me",
      value: "shehabrabby764@gmail.com",
      link: "mailto:shehabrabby764@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Call Me",
      value: "01773562177",
      link: "tel:01773562177",
    },
    {
      icon: <FaTelegramPlane />,
      label: "Telegram",
      value: "@Shehab00999",
      link: "https://t.me/Shehab00999",
    },
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      value: "Shehab Al Rabby",
      link: "https://www.facebook.com/share/1WWyXMPw91/",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Mirpur-1, Dhaka, BD",
      link: "#",
    },
  ];

  return (
    <section
      className="min-h-screen bg-[#050505] py-32 px-6 relative overflow-hidden"
      id="contact"
    >
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-6xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-[0.85]">
              Let's{" "}
              <span className="text-purple-600 opacity-90 block md:inline">
                Connect.
              </span>
            </h2>
            <div className="h-2 w-32 bg-purple-600 mt-10 rounded-full shadow-[0_0_20px_rgba(124,58,237,0.5)]" />
            <p className="text-gray-400 mt-10 max-w-2xl text-lg md:text-xl font-medium leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach
              out. I'm always open to discussing new opportunities.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            {contactInfo.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="block group relative p-6 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-purple-500/40 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-xl text-purple-500 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-purple-500 uppercase tracking-[0.3em] mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-base md:text-lg font-bold text-white tracking-tight">
                      {item.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-7 bg-[#0a0a0a]/40 border border-white/10 p-8 md:p-14 rounded-[3.5rem] backdrop-blur-2xl relative shadow-2xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-gray-800"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-gray-800"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="What's on your mind?"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.05] transition-all duration-300 resize-none placeholder:text-gray-800"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSending}
                type="submit"
                className="w-full bg-purple-600 hover:bg-white hover:text-black text-white font-black py-6 rounded-2xl transition-all duration-500 flex items-center justify-center gap-4 group disabled:opacity-50 relative overflow-hidden"
              >
                <span className="relative z-10 tracking-[0.2em] uppercase text-sm">
                  {isSending ? "ESTABLISHING CONNECTION..." : "SEND"}
                </span>
                <FaPaperPlane
                  className={`relative z-10 text-sm transition-transform duration-500 ${isSending ? "animate-pulse" : "group-hover:translate-x-3 group-hover:-translate-y-3"}`}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
