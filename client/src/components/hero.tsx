import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/dark_abstract_cybernetic_background_with_neon_cyan_and_purple_lines.png";
import avatar from "@assets/generated_images/3d_stylized_developer_avatar.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-medium"
          >
            Available for hire
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Karthikeya</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg">
            A passionate <span className="text-foreground font-semibold">Full Stack Developer</span> & <span className="text-foreground font-semibold">AR Enthusiast</span> building scalable systems and solving real-world problems.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]">
              Contact Me
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
              View Projects
            </Button>
          </div>

          <div className="flex gap-6 text-muted-foreground">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:karthikeyabarnala0@gmail.com" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-96 h-96 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse" />
            <img 
              src={avatar} 
              alt="Karthikeya Barnala" 
              className="relative w-full h-full object-cover rounded-3xl border-2 border-white/10 shadow-2xl transform hover:rotate-2 transition-transform duration-500"
            />
            
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-xl border-l-4 border-l-cyan-400"
            >
              <span className="text-sm font-bold text-foreground">CGPA: 8.7</span>
              <p className="text-xs text-muted-foreground">Academic Excellence</p>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-xl border-l-4 border-l-primary"
            >
              <span className="text-sm font-bold text-foreground">AR & VR</span>
              <p className="text-xs text-muted-foreground">Unity Developer</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
