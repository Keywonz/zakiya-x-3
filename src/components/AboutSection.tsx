import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, Coffee, Rocket, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Selesai' },
    { icon: Video, value: '100+', label: 'Video Konten' },
    // { icon: Coffee, value: '1000+', label: 'Cangkir Kopi' },
    // { icon: Rocket, value: '5+', label: 'Tahun Pengalaman' },
  ];

  const accordionData = [
    {
      title: "Passionate Developer",
      content: "Saya adalah seorang Full Stack Web Developer dengan passion yang kuat dalam menciptakan solusi digital dan inovatif.",
      content2: "Dengan pengalaman lebih dari 5 tahun, saya telah membantu klien dalam mewujudkan ide ide mereka menjadi aplikasi web yang powerful. Saya selalu haus akan teknologi baru.",
      content3: "Saya fokus pada performa, keamanan, dan pengalaman pengguna (UX) yang luar biasa di setiap baris kode yang saya tulis.",
    },
    {
      title: "Visi & Misi",
      content: "Menciptakan ekosistem digital yang inklusif melalui kode yang bersih dan edukasi teknologi yang mudah diakses oleh semua kalangan."
    },
    {
      title: "Tech Stack Utama",
      content: "Berfokus pada modern stack seperti React, Next.js, Node.js, dan Tailwind CSS untuk performa aplikasi yang optimal."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block uppercase tracking-widest text-sm">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* KIRI: Visual/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-24"
          >
            <div className="relative group">
              <div className="aspect-square rounded-3xl overflow-hidden glass shadow-2xl relative z-10">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 flex items-center justify-center">
                  <motion.span 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-9xl"
                  >
                    👨‍💻
                  </motion.span>
                </div>
              </div>
              {/* Floating Card */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl shadow-card border border-white/20 z-20"
              >
                <p className="font-display font-bold text-3xl text-primary">5+ Tahun</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-tight">Pengalaman</p>
              </motion.div>
              {/* Decorative Background Element */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* KANAN: Text & Accordion */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-display text-2xl md:text-4xl font-bold leading-tight">
                Passionate Developer <br /> 
                <span className="text-primary">&amp; Content Creator</span>
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>

                </p>

                {/* --- ACCORDION START --- */}
                <div className="pt-4 space-y-3">
                  {accordionData.map((item, i) => (
                    <div key={i} className="border border-primary/10 rounded-xl overflow-hidden bg-white/5">
                      <button 
                        onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-primary/5 transition-colors"
                      >
                        <span className="font-semibold text-foreground">{item.title}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeAccordion === i ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeAccordion === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-4 pt-0 text-muted-foreground leading-relaxed">
                              {item.content}
                            </div>
                            <div className="p-4 pt-0 text-muted-foreground leading-relaxed">
                              {item.content2}
                            </div>
                            <div className="p-4 pt-0 text-muted-foreground leading-relaxed">
                              {item.content3}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
                {/* --- ACCORDION END --- */}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 glass rounded-2xl text-center border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}