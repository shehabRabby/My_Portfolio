import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
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
        "xseSXJnbUvHNbeoG9"
      )
      .then(
        () => {
          // Success Toast
          toast.success("Message sent to Shehab! 🚀", {
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
          console.log("FAILED...", error.text);
          toast.error("Something went wrong. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <section className="min-h-screen bg-[#050505] py-28 px-6 relative overflow-hidden" id="contact">
      <Toaster position="bottom-right" />
      
      {/* Background Decorative Glows */}
      <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic">
              Let's <span className="text-purple-600">Connect.</span>
            </h2>
            <p className="text-gray-500 mt-6 max-w-xl text-lg font-medium">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email Me</p>
                <p className="text-xl font-bold text-white">shehabrabby764@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Location</p>
                <p className="text-xl font-bold text-white">Mirpur-1, Dhaka, Bangladesh</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl backdrop-blur-sm"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" // Matches {{name}} in EmailJS
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-600 transition-all placeholder:text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" // Matches {{email}} in EmailJS
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-600 transition-all placeholder:text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Message</label>
                <textarea 
                  name="message" // Matches {{message}} in EmailJS
                  rows="4" 
                  required
                  placeholder="What's on your mind?"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-600 transition-all resize-none placeholder:text-gray-700"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSending}
                type="submit" 
                className="w-full bg-purple-600 hover:bg-white hover:text-black text-white font-black py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50"
              >
                {isSending ? "SENDING..." : "SEND MAIL"}
                <FaPaperPlane className={`text-sm ${isSending ? 'animate-bounce' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'}`} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;