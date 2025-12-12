import { motion } from "framer-motion";
import { Code2, Database, Layout, Smartphone, Terminal, Cpu } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: <Code2 className="w-8 h-8 text-cyan-400" />,
    items: ["Python", "Java", "C Language", "JavaScript", "PHP"],
  },
  {
    category: "Frontend",
    icon: <Layout className="w-8 h-8 text-purple-400" />,
    items: ["HTML5", "CSS3", "React (Learning)", "Tailwind CSS"],
  },
  {
    category: "Backend & DB",
    icon: <Database className="w-8 h-8 text-pink-400" />,
    items: ["MySQL", "Flask", "Node.js (Basic)"],
  },
  {
    category: "Technologies",
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    items: ["Unity Hub (AR)", "Machine Learning", "Data Analytics"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-colors group"
            >
              <div className="mb-4 p-3 bg-background/50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
