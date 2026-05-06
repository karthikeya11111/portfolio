import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Dynamic Resume Builder Platform",
    description: "Enterprise-grade resume automation platform with secure authentication and scalable APIs. Reduced manual effort by 60% through real-time preview and multi-template PDF export.",
    tags: ["MERN Stack", "Tailwind CSS", "JWT", "REST API"],
    image: "https://images.unsplash.com/photo-1633536726481-465c3676851d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AR App for Cultural Heritage Preservation",
    description: "Designed AR mobile app to enhance cultural tourism, showcasing monuments and artifacts. Usability testing with 50+ participants showed 92% improved engagement and learning outcomes.",
    tags: ["Unity", "AR Foundation", "C#", "3D Modeling"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Farmer to Consumer AI Platform",
    description: "AI-powered marketplace improving supply chain efficiency. Implemented ML models for food detection, price prediction, crop recommendation (85% accuracy). Scaled backend to support 1,000+ concurrent users.",
    tags: ["Python", "Flask", "TensorFlow", "MySQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground">A selection of my recent work and experiments.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
            >
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
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="w-full border-white/10 hover:bg-white/5">
                    <Github className="w-4 h-4 mr-2" /> Code
                  </Button>
                  <Button size="sm" className="w-full bg-primary/20 text-primary hover:bg-primary/30 border border-primary/20">
                    <ExternalLink className="w-4 h-4 mr-2" /> Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
