import Section from "./Section";

const timeline = [
  {
    date: "2023 – 2027",
    title: "BS Information Technology",
    org: "STI College San Jose Del Monte",
    text: "Tertiary studies focused on networking, programming, databases, and IT infrastructure.",
  },
  {
    date: "2023 – Present",
    title: "Member — Intellitech",
    org: "STI Student Organization",
    text: "Active participation in IT events, technical workshops, and collaborative tech projects.",
  },
  {
    date: "2021 – 2023",
    title: "Vocational / Technical",
    org: "Village Montessori School and Colleges",
    text: "Senior High School with technical-vocational specialization.",
  },
  {
    date: "2016 – 2021",
    title: "Junior High School",
    org: "San Manuel National High School",
    text: "Completed secondary education with focus on STEM-oriented subjects.",
  },
  {
    date: "2012 – 2016",
    title: "Elementary",
    org: "San Manuel Elementary School",
    text: "Primary education foundation.",
  },
];

const Experience = () => {
  return (
    <div>
      <Section
        id="experience"
        eyebrow="04 — Journey"
        title="Education & milestones"
        subtitle="A timeline of academic foundations and professional growth in technology."
      >
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/60 via-border to-transparent" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <div
                key={t.title}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 ? "md:[&>div:first-child]:col-start-2" : ""}`}
              >
                <div
                  className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left" : "md:text-right"}`}
                >
                  <div className="glass rounded-xl p-6 inline-block text-left">
                    <p className="font-mono text-xs text-accent mb-1">
                      {t.date}
                    </p>
                    <h3 className="font-display font-semibold text-lg">
                      {t.title}
                    </h3>
                    <p className="text-sm text-primary mb-2">{t.org}</p>
                    <p className="text-sm text-muted-foreground">{t.text}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-4 rounded-full bg-primary border-4 border-background glow-ring" />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Experience;
