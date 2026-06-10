import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Layout, Cpu, Zap, Blocks, Server, RefreshCw } from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    icon: <Code2 className="w-8 h-8 text-cyan-400" />,
    items: ["Java", "Python", "C", "JavaScript", "TypeScript"],
  },
  {
    category: "Web & Frontend",
    icon: <Layout className="w-8 h-8 text-purple-400" />,
    items: ["React", "Angular", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend & Databases",
    icon: <Database className="w-8 h-8 text-pink-400" />,
    items: ["Spring Boot", "Node.js", "Express", "Flask", "MySQL", "RESTful APIs"],
  },
  {
    category: "AI, Tools & Core CS",
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    items: ["TensorFlow", "Unity (AR/VR)", "Git & GitHub", "DSA & OOP", "DBMS & Networks"],
  },
];

const frameworkShowcase = {
  react: {
    title: "React & MERN Architecture",
    tagline: "High-performance, hooks-driven, client-heavy reactive UI development.",
    color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
    accentColor: "#22d3ee",
    features: [
      { name: "Hooks & Composition", desc: "Custom hooks for sharing stateful logic cleanly (e.g. custom authentication, theme providers)." },
      { name: "State Management", desc: "Using React Context API, TanStack Query, and Zustand for optimized renders and data caching." },
      { name: "Fullstack Ecosystem", desc: "MERN Stack integration using Node/Express backends, JWT security, and RESTful CRUD APIs." },
      { name: "Modern Bundlers", desc: "Vite and TypeScript with lazy loading, code-splitting, and route-based optimization." }
    ],
    capabilities: [
      {
        title: "Real-time Sync Engines",
        detail: "Implemented asynchronous sync flows in the Resume Builder, enabling instant template renders with sub-10ms DOM refresh rates."
      },
      {
        title: "Secure Auth & Session Guards",
        detail: "Designed cookie-based token validation chains using JSON Web Tokens (JWT) and custom Express middlewares to secure user endpoints."
      },
      {
        title: "Dynamic PDF Rasterization",
        detail: "Configured client-side PDF generation algorithms to compile complicated CSS structures into clean, printer-ready documents."
      }
    ]
  },
  angular: {
    title: "Angular Enterprise Architecture",
    tagline: "Highly structured, strongly-typed, component-based enterprise platform engineering.",
    color: "text-red-400 border-red-500/20 bg-red-500/5",
    accentColor: "#f87171",
    features: [
      { name: "Reactive Programming", desc: "Leveraging RxJS Observables, Streams, and Angular Signals for fine-grained reactivity." },
      { name: "Dependency Injection", desc: "Built-in hierarchical DI container for modular code, singletons, and service-based architecture." },
      { name: "Structured Styling", desc: "Encapsulated styling (ShadowDOM or Emulated) ensuring modular UI blocks without side effects." },
      { name: "Enterprise Modular Flow", desc: "Strict MVC/MVVM layout with TypeScript decorators, Standalone Components, and guards." }
    ],
    capabilities: [
      {
        title: "RxJS Stream Management",
        detail: "Engineered observable query streams using operators like switchMap and debounceTime to optimize database server hits by 40%."
      },
      {
        title: "Hierarchical Dependency Injection",
        detail: "Leveraged Angular's DI container to decouple business logic from UI components, creating clean, testable services."
      },
      {
        title: "Modular Scaling & Guards",
        detail: "Designed strict route authentication guards and lazy-loaded modules, minimizing initial page load weight."
      }
    ]
  }
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"react" | "angular">("react");

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
            A comprehensive list of programming languages, frameworks, and technologies I use to build enterprise applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
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

        {/* Framework Deep Dive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-white/10 rounded-3xl p-6 md:p-10 bg-secondary/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/5">
            <div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">Advanced Showcase</span>
              <h3 className="text-2xl md:text-3xl font-bold font-display">Modern Framework Expertise</h3>
            </div>
            
            <div className="flex bg-background/80 p-1.5 rounded-xl border border-white/15 w-fit">
              <button
                onClick={() => setActiveTab("react")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  activeTab === "react" ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Blocks className="w-4 h-4" /> React Stacks
              </button>
              <button
                onClick={() => setActiveTab("angular")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  activeTab === "angular" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <RefreshCw className="w-4 h-4" /> Angular Stacks
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === "react" ? -15 : 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === "react" ? 15 : -15 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-8 items-stretch"
            >
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className={`text-xl font-bold font-display flex items-center gap-2 mb-2 ${frameworkShowcase[activeTab].title.includes("React") ? "text-cyan-400" : "text-red-400"}`}>
                    {frameworkShowcase[activeTab].title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-6">{frameworkShowcase[activeTab].tagline}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {frameworkShowcase[activeTab].features.map((feat, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-white/5 bg-background/30 hover:border-white/10 transition-colors">
                        <span className="text-sm font-bold text-foreground block mb-1 flex items-center gap-1.5">
                          <Zap className={`w-3.5 h-3.5 ${activeTab === "react" ? "text-cyan-400" : "text-red-400"}`} />
                          {feat.name}
                        </span>
                        <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Capabilities Showcase */}
              <div className="relative rounded-2xl p-6 border border-white/10 bg-black/40 flex flex-col justify-between">
                <div>
                  <h5 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">
                    Developer Capabilities
                  </h5>
                  <div className="space-y-4">
                    {frameworkShowcase[activeTab].capabilities.map((cap, i) => (
                      <div key={i} className="flex gap-3 items-start border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                        <div className={`mt-1.5 w-2 h-2 rounded-full ${activeTab === 'react' ? 'bg-cyan-400' : 'bg-red-400'}`} />
                        <div>
                          <span className="text-sm font-bold text-foreground block">
                            {cap.title}
                          </span>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                            {cap.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Development Readiness</span>
                  <span className={`flex items-center gap-1.5 font-semibold ${activeTab === 'react' ? 'text-cyan-400' : 'text-red-400'}`}>
                    <span className={`w-2 h-2 rounded-full animate-pulse ${activeTab === 'react' ? 'bg-cyan-400' : 'bg-red-400'}`} />
                    Production Ready
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

