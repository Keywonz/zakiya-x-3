import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Variasi Animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 }, // Muncul dari kanan ke kiri
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-20">
      {/* Background 3D */}
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          
          {/* SISI KIRI: FOTO PROFIL */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Efek Cahaya/Glow di belakang foto */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/40 to-purple-600/40 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
              
              {/* Bingkai Foto */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4">
                <img 
                  src="/public/wonwoo cat.jpg" 
                  alt="Zakiya Profile"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary shadow-glow"
                />
              </div>

              {/* Floating Badge */}
              <motion.div 
                className="absolute -bottom-6 -left-6 glass px-5 py-3 rounded-2xl shadow-xl border border-white/10 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <p className="text-xs font-bold uppercase tracking-tighter">Available for Work</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* SISI KANAN: TEKS & CTA */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4">
               <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
               </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              <br />
              <span className="text-gradient">Zakiya Portofolio
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              Saya adalah seorang pengembang aplikasi web yang fokus pada estetika 
              dan performa. Mari membangun sesuatu yang luar biasa bersama-sama.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 h-12 text-base font-semibold transition-all hover:shadow-primary/25 hover:shadow-lg"
                onClick={() => scrollTo('#projects')}
              >
                Lihat Projek
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 h-12 text-base glass hover:bg-white/5"
                onClick={() => scrollTo('#contact')}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-6">
              {SocialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-foreground" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.button
          onClick={() => scrollTo('#about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}