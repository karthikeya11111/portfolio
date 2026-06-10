import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Shield, FileSpreadsheet, Binary, Presentation } from "lucide-react";

const certifications = [
  {
    title: "Data Analytics for Enterprise Decision Making",
    issuer: "Coursera",
    icon: <FileSpreadsheet className="w-5 h-5 text-cyan-400" />,
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
  },
  {
    title: "Ethical Hacking (Enterprise IT Security)",
    issuer: "NPTEL",
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    title: "Joy of Computing Using Python",
    issuer: "NPTEL",
    icon: <Binary className="w-5 h-5 text-pink-400" />,
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20"
  },
  {
    title: "Project Expo Participation",
    issuer: "JNTUGV",
    icon: <Presentation className="w-5 h-5 text-yellow-400" />,
    badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
  }
];

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
          <p className="text-muted-foreground">My academic journey, professional internships, and verified skills.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
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
              <h4 className="text-xl font-bold">B.Tech in Computer Science and Engineering</h4>
              <p className="text-muted-foreground mb-2">GMR Institute of Technology (GMRIT)</p>
              <div className="inline-block px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">
                CGPA: 8.66 / 10
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
              <p className="text-muted-foreground mb-2">FIITJEE Junior College</p>
              <div className="inline-block px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded border border-blue-500/20">
                Percentage: 86.5%
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pl-8 border-l-2 border-border relative"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted-foreground" />
              <div className="mb-1 text-sm text-muted-foreground font-mono">2021</div>
              <h4 className="text-lg font-bold">SSC</h4>
              <p className="text-muted-foreground mb-2">Sri Chaitanya School</p>
              <div className="inline-block px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">
                Percentage: 100%
              </div>
            </motion.div>
          </div>

          {/* Experience & Certifications Column */}
          <div className="space-y-8">
            <div>
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
                <h4 className="text-xl font-bold">Summer Intern</h4>
                <p className="text-muted-foreground mb-4">CEMS, Visakhapatnam</p>
                <ul className="text-sm text-muted-foreground/80 space-y-2">
                  <li>• Built AR prototypes for educational institutions aligned with digital learning requirements.</li>
                  <li>• Collaborated with cross-functional teams to deliver working prototypes within timelines.</li>
                  <li>• Conducted testing with 100+ students and educators, improving usability and interaction.</li>
                </ul>
              </motion.div>
            </div>

            <div className="pt-4">
              <h3 className="text-2xl font-bold font-display flex items-center gap-3 mb-6">
                <Award className="text-pink-400" /> Certifications
              </h3>
              
              <div className="grid gap-3">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-background/40 hover:border-primary/20 hover:bg-background/80 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <span className={`inline-block text-[10px] font-bold px-2 py-0.5 mt-1 rounded border ${cert.badgeColor}`}>
                        {cert.issuer}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

