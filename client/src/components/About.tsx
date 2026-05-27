import { GraduationCap, Lightbulb, Target, Users } from "lucide-react";
import Section from "./Section";

const About = () => {
  const items = [
    {
      icon: GraduationCap,
      title: "Education",
      text: "BS in Information Technology at STI College San Jose Del Monte (2023–2027).",
    },
    {
      icon: Target,
      title: "Career Goal",
      text: "Become a certified network administrator delivering resilient enterprise infrastructure.",
    },
    {
      icon: Lightbulb,
      title: "Tech Interests",
      text: "Networking, cloud infrastructure, cybersecurity, and modern system administration.",
    },
    {
      icon: Users,
      title: "Affiliation",
      text: "Active member of Intellitech — STI's IT student organization.",
    },
  ];

  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title="Engineer mindset, network-first focus"
      subtitle="A driven IT student building expertise across networks, systems, and the development tools that connect them. Detail-oriented, collaborative, and always learning."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="glass rounded-xl p-6 hover:border-primary/40 transition group"
          >
            <div className="flex items-start gap-4">
              <div className="size-11 grid place-items-center rounded-lg bg-primary/15 text-primary border border-primary/30 group-hover:scale-110 transition">
                <Icon className="size-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default About;
