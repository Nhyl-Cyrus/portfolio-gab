import { Code2, Network, Server, Shield } from "lucide-react";
import Section from "./Section";

const groups = [
  {
    icon: Network,
    title: "Networking",
    skills: [
      { name: "TCP/IP Fundamentals", level: 80 },
      { name: "Routing & Switching", level: 70 },
      { name: "LAN / WAN Configuration", level: 72 },
      { name: "Network Troubleshooting", level: 75 },
    ],
  },
  {
    icon: Server,
    title: "Systems & Infrastructure",
    skills: [
      { name: "Windows / Linux Admin", level: 75 },
      { name: "Hardware & Setup", level: 82 },
      { name: "Server Management", level: 65 },
      { name: "Technical Support", level: 85 },
    ],
  },
  {
    icon: Shield,
    title: "Security",
    skills: [
      { name: "Cybersecurity Basics", level: 70 },
      { name: "Access Control", level: 68 },
      { name: "Network Protection", level: 65 },
      { name: "Endpoint Hardening", level: 60 },
    ],
  },
  {
    icon: Code2,
    title: "Development & Tools",
    skills: [
      { name: "Python", level: 50 },
      { name: "Java", level: 50 },
      { name: "C#", level: 50 },
      { name: "SQL", level: 50 },
      { name: "HTML / CSS", level: 50 },
    ],
  },
];

const Skills = () => {
  return (
    <div>
      <Section
        id="skills"
        eyebrow="02 — Skills"
        title="Technical capability stack"
        subtitle="A balanced foundation across networking, systems, security, and development — the four pillars of modern IT."
      >
        <div className="grid md:grid-cols-2 gap-5">
          {groups.map(({ icon: Icon, title, skills }) => (
            <div key={title} className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="size-10 grid place-items-center rounded-lg bg-primary/15 text-primary border border-primary/30">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display font-semibold text-lg">{title}</h3>
              </div>
              <div className="space-y-4">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground/90">{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {s.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-primary to-accent rounded-full transition-all"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Skills;
