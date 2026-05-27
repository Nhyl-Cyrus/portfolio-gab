import {
  CircleUserRound,
  Computer,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import Section from "./Section";

const Contacts = () => {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <Section
        id="contact"
        eyebrow="05 — Contact"
        title="Let's build something reliable"
        subtitle="Open to internships, IT support roles, and networking opportunities. Reach out anytime."
      >
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "Markgabyoldi@gmail.com",
                href: "mailto:Markgabyoldi@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+63 994 468 7127",
                href: "tel:+639944687127",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "San Jose del Monte, Bulacan, PH",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/50 transition"
              >
                <div className="size-11 grid place-items-center rounded-lg bg-primary/15 text-primary border border-primary/30">
                  <Icon className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-muted-foreground">
                    {label}
                  </p>
                  <p className="font-medium text-sm">{value}</p>
                </div>
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="size-11 grid place-items-center rounded-lg glass hover:text-primary hover:border-primary/50 transition"
              >
                <CircleUserRound className="size-5" />
              </a>
              <a
                href="#"
                className="size-11 grid place-items-center rounded-lg glass hover:text-primary hover:border-primary/50 transition"
              >
                <Computer className="size-5" />
              </a>
            </div>
          </div>

          <form
            className="lg:col-span-3 glass rounded-xl p-6 md:p-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase text-muted-foreground mb-1.5 block">
                  Name
                </label>
                <input
                  required
                  className="w-full px-4 py-2.5 rounded-md bg-input border border-border focus:border-primary focus:outline-none transition"
                />
              </div>
              <div>
                <label className="text-xs font-mono uppercase text-muted-foreground mb-1.5 block">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-2.5 rounded-md bg-input border border-border focus:border-primary focus:outline-none transition"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono uppercase text-muted-foreground mb-1.5 block">
                Message
              </label>
              <textarea
                required
                rows={6}
                className="w-full px-4 py-2.5 rounded-md bg-input border border-border focus:border-primary focus:outline-none transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow-ring"
            >
              {sent ? (
                "Message sent ✓"
              ) : (
                <>
                  Send message <Send className="size-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
};

export default Contacts;
