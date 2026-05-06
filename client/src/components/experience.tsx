import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground">My academic journey and professional milestones.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-display flex items-center gap-3 mb-8">
              <GraduationCap className="text-cyan-400" /> Education
            </h3>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pl-8 border-l-2 border-primary/20 relative"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="mb-1 text-sm text-primary font-mono">2023 - 2027</div>
              <h4 className="text-xl font-bold">B.Tech in Computer Science</h4>
              <p className="text-muted-foreground mb-2">GMR Institute of Technology</p>
              <div className="inline-block px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">
                CGPA: 8.7
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="pl-8 border-l-2 border-border relative"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted-foreground" />
              <div className="mb-1 text-sm text-muted-foreground font-mono">2020 - 2022</div>
              <h4 className="text-lg font-bold">Intermediate (MPC)</h4>
              <p className="text-muted-foreground">Fiitjee Junior College</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pl-8 border-l-2 border-border relative"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted-foreground" />
              <div className="mb-1 text-sm text-muted-foreground font-mono">2020</div>
              <h4 className="text-lg font-bold">SSC</h4>
              <p className="text-muted-foreground">Sri Chaitanya School, Jaggampeta</p>
            </motion.div>
          </div>

          {/* Experience Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-display flex items-center gap-3 mb-8">
              <Briefcase className="text-purple-400" /> Experience
            </h3>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pl-8 border-l-2 border-primary/20 relative"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              <div className="mb-1 text-sm text-purple-400 font-mono">May 2025 - June 2025</div>
              <h4 className="text-xl font-bold">Summer Intern - AR Developer</h4>
              <p className="text-muted-foreground mb-4">CEMS, Visakhapatnam</p>
              <ul className="text-sm text-muted-foreground/80 space-y-2">
                <li>• Developed AR prototypes for educational institutions aligned with digital transformation</li>
                <li>• Collaborated with cross-functional teams to deliver consulting-style solutions</li>
                <li>• Conducted testing with 100+ students, improving engagement and learning outcomes</li>
              </ul>
            </motion.div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold font-display flex items-center gap-3 mb-8">
                <Award className="text-pink-400" /> Certifications
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2" />
                  <span>Coursera: Data Analytics (Enterprise Decision Making)</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2" />
                  <span>NPTEL: Ethical Hacking (Enterprise IT Security)</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2" />
                  <span>NPTEL: Joy of Computing Using Python</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2" />
                  <span>JNTUGV: Project Expo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
