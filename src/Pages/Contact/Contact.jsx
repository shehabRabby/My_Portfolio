import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaFacebook, FaWhatsapp, FaEnvelope, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Integrated your actual EmailJS credentials
    emailjs
      .sendForm(
        "service_omh137q",       // Your Service ID
        "__ejs-test-mail-service__", // Your Template ID
        form.current,
        "XiHKZA3pBhk8ub03O"      // Your Public Key
      )
      .then(
        () => {
          toast.success("Message sent to Shehab successfully! 🚀", {
            style: {
              borderRadius: '10px',
              background: '#1a1a1a',
              color: '#fff',
              border: '1px solid #7c3aed'
            },
          });
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again.");
          setIsSending(false);
        }
      );
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/shehabalrabby",
      color: "hover:text-[#0077b5]",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/shehab.rabby.1",
      color: "hover:text-[#1877f2]",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/8801773562177",
      color: "hover:text-[#25d366]",
    },
  ];

  return (
    <section className="min-h-screen bg-[#050505] py-28 px-6 relative overflow-hidden" id="contact">
      {/* React Hot Toast Container */}
      <Toaster position="bottom-right" reverseOrder={false} />
      
      {/* Aesthetic Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic">
              Get In <span className="text-purple-600">Touch.</span>
            </h2>
            <p className="text-gray-500 mt-6 max-w-xl text-lg font-medium leading-relaxed">
              Ready to start a project? My setup is live and I'm ready to respond to your inquiries.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Functional Form with your EmailJS Setup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-600 transition-all placeholder:text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-600 transition-all placeholder:text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required
                  placeholder="Tell me everything..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-600 transition-all resize-none placeholder:text-gray-700"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSending}
                className="w-full bg-purple-600 hover:bg-white hover:text-black text-white font-black py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50"
              >
                {isSending ? "TRANSMITTING..." : "SEND MESSAGE"}
                <FaPaperPlane className={`text-sm ${isSending ? 'animate-ping' : 'group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500'}`} />
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Direct Links */}
          <div className="space-y-12 h-full flex flex-col justify-center">
            
            <div className="space-y-8">
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-lg shadow-purple-900/10">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Email</p>
                  <a href="mailto:shehabrabby764@gmail.com" className="text-xl md:text-2xl font-bold text-white hover:text-purple-500 transition-colors">
                    shehabrabby764@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-lg shadow-purple-900/10">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Base</p>
                  <p className="text-xl md:text-2xl font-bold text-white">Dhaka, Bangladesh</p>
                </div>
              </motion.div>
            </div>

            {/* Large Social Icons */}
            <div className="pt-12 border-t border-white/5">
               <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-8">Follow My Journey</p>
               <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-2xl text-gray-400 transition-all ${social.color} hover:border-current`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;