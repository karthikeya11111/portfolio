import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Let's work <br />
              <span className="text-gradient">together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 8341834232</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:karthikeyabarnala0@gmail.com" className="font-medium hover:text-primary transition-colors">
                    karthikeyabarnala0@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Vizianagaram, Andhra Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="John Doe" className="bg-background/50 border-white/10 focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="john@example.com" className="bg-background/50 border-white/10 focus:border-primary/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Project Inquiry" className="bg-background/50 border-white/10 focus:border-primary/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  className="bg-background/50 border-white/10 focus:border-primary/50 min-h-[150px]" 
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                <Send className="w-4 h-4 mr-2" /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
