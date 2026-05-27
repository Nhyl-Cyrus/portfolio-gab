import {
  Computer,
  Database,
  ExternalLink,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";
import Section from "./Section";

const projects = [
  {
    icon: Network,
    title: "Enterprise LAN Simulation",
    overview:
      "Designed and simulated a multi-VLAN enterprise network with inter-VLAN routing, DHCP, and DNS using Cisco Packet Tracer.",
    tech: ["Cisco Packet Tracer", "VLAN", "DHCP", "OSPF"],
    role: "Network Architect & Implementer",
    features: [
      "Segmented departments via VLANs",
      "Redundant routing paths",
      "DHCP scope per subnet",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Home Lab Security Hardening",
    overview:
      "Configured a Windows/Linux home lab with firewall rules, access control, and endpoint hardening to study real-world security baselines.",
    tech: ["Windows Server", "Ubuntu", "pfSense", "Wireshark"],
    role: "Systems & Security Engineer",
    features: [
      "Firewall rule design",
      "User & group access control",
      "Traffic inspection with Wireshark",
    ],
  },
  {
    icon: Server,
    title: "Campus File & Print Server",
    overview:
      "Deployed a centralized file and print server for a classroom environment with shared folders, user permissions, and quotas.",
    tech: ["Windows Server", "Active Directory", "SMB"],
    role: "System Administrator",
    features: [
      "AD user provisioning",
      "Role-based shared folders",
      "Quota & audit policies",
    ],
  },
  {
    icon: Database,
    title: "Student Records Web App",
    overview:
      "Built a CRUD-based student records system to practice full-stack fundamentals — typed components, validation, and SQL queries.",
    tech: ["React", "TypeScript", "Tailwind", "SQL"],
    role: "Full-Stack Developer",
    features: [
      "Typed React components",
      "Form validation",
      "Relational schema design",
    ],
  },
];

const Projects = () => {
  return (
    <div>
      <Section
        id="projects"
        eyebrow="04 — Projects"
        title="Selected technical projects"
        subtitle="Hands-on work across networking, systems administration, security, and full-stack development."
      >
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map(
            ({ icon: Icon, title, overview, tech, role, features }) => (
              <article
                key={title}
                className="glass rounded-xl p-6 flex flex-col hover:border-primary/40 transition group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="size-11 grid place-items-center rounded-lg bg-primary/15 text-primary border border-primary/30">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition">
                    <span
                      className="size-8 grid place-items-center rounded-md glass"
                      aria-label="Repository"
                    >
                      <Computer className="size-4" />
                    </span>
                    <span
                      className="size-8 grid place-items-center rounded-md glass"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="size-4" />
                    </span>
                  </div>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {overview}
                </p>

                <div className="mb-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
                    Role
                  </p>
                  <p className="text-sm">{role}</p>
                </div>

                <div className="mb-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
                    Key Features
                  </p>
                  <ul className="text-sm space-y-1 list-disc list-inside marker:text-primary/60">
                    {features.map((f) => (
                      <li key={f} className="text-foreground/90">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-2 border-t border-border/60">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-1 rounded-md bg-secondary/60 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ),
          )}
        </div>
      </Section>
    </div>
  );
};

export default Projects;
