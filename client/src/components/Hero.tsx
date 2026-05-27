import { ArrowRight, Cpu, Download, ShieldCheck, Wifi } from "lucide-react";
import profile from "../assets/pfp.png";

const Hero = () => {
  return (
    <div>
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 mask-[radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-accent mb-6">
              <span className="size-2 rounded-full bg-accent animate-pulse" />
              Available for IT & Networking Internships
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Mark Gabriel <span className="text-gradient">Yoldi</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-3 font-display">
              Aspiring Network & Systems Administrator
            </p>
            <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed">
              IT student at STI College San Jose Del Monte focused on computer
              networking, infrastructure, and cybersecurity fundamentals —
              building reliable systems and secure networks for tomorrow's
              enterprises.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow-ring"
              >
                Contact Me <ArrowRight className="size-4" />
              </a>
              <a
                href="#resume"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md glass hover:border-primary/50 transition font-medium"
              >
                <Download className="size-4" /> View Resume
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-md">
              {[
                { icon: Wifi, label: "Networking" },
                { icon: Cpu, label: "Systems" },
                { icon: ShieldCheck, label: "Security" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass rounded-lg p-3 flex flex-col items-center gap-2 text-center"
                >
                  <Icon className="size-5 text-primary" />
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto">
            <div className="absolute -inset-6 bg-linear-to-tr from-primary/40 via-accent/20 to-transparent blur-3xl rounded-full" />
            <div className="relative">
              <div className="absolute -top-4 -left-4 size-24 border-l-2 border-t-2 border-primary/60 rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 size-24 border-r-2 border-b-2 border-accent/60 rounded-br-2xl" />
              <img
                src={profile}
                alt="Mark Gabriel Yoldi"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl glow-ring border border-border"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 text-xs font-mono whitespace-nowrap">
                <span className="text-accent">●</span> System.Online()
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
