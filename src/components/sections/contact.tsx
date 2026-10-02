"use client";

import { siteMetadata } from "@/lib/data";
import { Mail, MapPin, Phone, Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null!);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        toast.error("Please fill in all required fields.");
        return;
      }

      setLoading(true);

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        toast.error("Email service is not configured. Please contact directly.");
        setLoading(false);
        return;
      }

      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            to_name: "Tauqeer Khan",
            from_email: form.email,
            to_email: siteMetadata.email,
            message: form.message,
            phone: form.phone,
          },
          publicKey
        );

        toast.success("Thank you! I will reach out to you shortly.");
        setForm({ name: "", email: "", phone: "", message: "" });
      } catch (error) {
        console.error("EmailJS Error:", error);
        toast.error("Something went wrong. Please try again or email me directly.");
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-zinc-700" />
          <span className="text-zinc-500 uppercase tracking-widest text-sm">Get in Touch</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Contact Me
            </h2>
            <p className="text-zinc-400 font-light text-lg mb-12 max-w-md leading-relaxed">
              Have a project in mind, want to collaborate, or just want to say hello? I&apos;m always open to discussing new opportunities.
            </p>

            <div className="space-y-8">
              <a href={`mailto:${siteMetadata.email}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/5 text-zinc-400 group-hover:border-white/10 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1 uppercase tracking-wider font-medium">Email</p>
                  <p className="text-zinc-200 group-hover:text-white transition-colors">
                    {siteMetadata.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <a href={`tel:${siteMetadata.email}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/5 text-zinc-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm mb-1 uppercase tracking-wider font-medium">Phone</p>
                    <p className="text-zinc-200">{siteMetadata.phone}</p>
                  </div>
                </a>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/5 text-zinc-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1 uppercase tracking-wider font-medium">Location</p>
                  <p className="text-zinc-200">{siteMetadata.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/[0.02] p-8 md:p-10 rounded-2xl border border-white/5"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-400">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-zinc-400">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none placeholder:text-zinc-600"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-white text-zinc-950 py-4 rounded-xl font-medium tracking-wide hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div >
    </section >
  );
}
