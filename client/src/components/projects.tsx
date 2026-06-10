import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Dynamic Resume Builder Platform",
    description: "Developed a full stack resume automation platform with secure authentication, real-time preview, and multi-template PDF export, reducing preparation effort by 60%.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "JWT", "REST APIs"],
    image: "https://images.unsplash.com/photo-1633536726481-465c3676851d?auto=format&fit=crop&q=80&w=800",
    codeLink: "https://github.com/karthikeya11111/project-resumemern",
    demoLink: "https://resumekaar-h146.vercel.app/"
  },
  {
    title: "Farmer to Consumer AI Platform",
    description: "Built a web platform connecting farmers and consumers directly to improve transparency. Integrated ML models for food detection, price prediction, and crop recommendation with ~85% accuracy. Designed MySQL schema supporting 1,000+ concurrent users.",
    tags: ["Python", "Flask", "TensorFlow", "MySQL", "ML Models", "REST APIs"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    codeLink: "https://github.com/karthikeya11111",
    demoLink: null
  },
  {
    title: "AR App for Cultural Heritage Preservation",
    description: "Created an AR mobile app overlaying interactive 3D models on monuments and artifacts, achieving 90% positive usability feedback from 50+ participants in testing sessions.",
    tags: ["Unity", "AR Foundation", "C#", "3D Modeling"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    codeLink: "https://github.com/karthikeya11111",
    demoLink: null
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Academic <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground">Recent research and development applications.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-secondary text-secondary-foreground border border-white/5 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                <div className="flex gap-3">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button size="sm" variant="outline" className="w-full border-white/10 hover:bg-white/5 cursor-pointer">
                      <Github className="w-4 h-4 mr-2" /> Code
                    </Button>
                  </a>
                  {project.demoLink ? (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button size="sm" className="w-full bg-primary/20 text-primary hover:bg-primary/30 border border-primary/20 cursor-pointer">
                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                      </Button>
                    </a>
                  ) : (
                    <Button size="sm" disabled className="w-full bg-white/5 text-muted-foreground border border-white/5 cursor-not-allowed">
                      Offline
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

