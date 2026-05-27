import { Award, CalendarDays } from "lucide-react";
import Section from "./Section";

const items = [
  {
    date: "November 2025",
    title: "Tech Front 2025 Seminar",
    desc: "Industry seminar on emerging enterprise technology and IT trends.",
  },
  {
    date: "June 2024",
    title: "NSTP Training",
    desc: "National Service Training Program — leadership and civic engagement.",
  },
  {
    date: "May 2024",
    title: "NYC Seminar",
    desc: "National Youth Commission seminar for youth development and leadership.",
  },
  {
    date: "April 2024",
    title: "Procurement Management Webinar",
    desc: "Best practices in IT procurement and management.",
  },
];

const Certification = () => {
  return (
    <div>
      <Section
        id="certifications"
        eyebrow="03 — Training"
        title="Certifications, trainings & seminars"
        subtitle="Continuous learning across technology, leadership, and professional development."
      >
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="glass rounded-xl p-6 hover:border-primary/40 transition"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-accent mb-3">
                <CalendarDays className="size-3.5" />
                {it.date}
              </div>
              <div className="flex items-start gap-3">
                <Award className="size-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-display font-semibold mb-1">
                    {it.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Certification;
