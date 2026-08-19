import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Jimmy Halvardsson — IFMGA Mountain Guide, Lyngen Alps Ski Touring",
      },
      {
        name: "description",
        content:
          "Ski touring in the Lyngen Alps with IFMGA-certified mountain guide Jimmy Halvardsson. Based in Tromsø, Norway. Guided weeks, avalanche courses and private guiding for winter 26/27.",
      },
      {
        property: "og:title",
        content: "Jimmy Halvardsson — IFMGA Mountain Guide, Lyngen Alps",
      },
      {
        property: "og:description",
        content:
          "Certified ski touring guiding in the Lyngen Alps and Tromsø region. Open weeks for winter 26/27.",
      },
    ],
  }),
  component: Index,
});

type Status = "open" | "limited" | "booked";

type Week = {
  id: string;
  label: string;
  dates: string;
  month: string;
  status: Status;
  program: string;
  price: string;
  spots: string;
  note: string;
};

const weeks: Week[] = [
  {
    id: "w1",
    label: "Week 51",
    dates: "14–20 Dec",
    month: "December",
    status: "open",
    program: "Early Season Ski Touring",
    price: "Price placeholder",
    spots: "4 spots left",
    note: "Short days, low-angle valley terrain and long light. A calm start to the season.",
  },
  {
    id: "w2",
    label: "Week 2",
    dates: "4–10 Jan",
    month: "January",
    status: "limited",
    program: "Polar Night Touring",
    price: "Price placeholder",
    spots: "2 spots left",
    note: "Blue-hour skiing near Tromsø, with headlamp starts and sheltered forest lines.",
  },
  {
    id: "w3",
    label: "Week 4",
    dates: "18–24 Jan",
    month: "January",
    status: "booked",
    program: "Avalanche Course — Level 1",
    price: "Price placeholder",
    spots: "Fully booked",
    note: "Companion rescue, snowpack observation and decision making in the field.",
  },
  {
    id: "w4",
    label: "Week 6",
    dates: "1–7 Feb",
    month: "February",
    status: "open",
    program: "Lyngen Ski Touring Week",
    price: "Price placeholder",
    spots: "5 spots left",
    note: "Classic fjord-to-summit descents from a fixed base in Lyngseidet.",
  },
  {
    id: "w5",
    label: "Week 8",
    dates: "15–21 Feb",
    month: "February",
    status: "limited",
    program: "Lyngen Ski Touring Week",
    price: "Price placeholder",
    spots: "1 spot left",
    note: "Stable mid-winter snow and returning daylight. Suited to confident intermediates.",
  },
  {
    id: "w6",
    label: "Week 10",
    dates: "1–7 Mar",
    month: "March",
    status: "booked",
    program: "Private Guiding — closed group",
    price: "Price placeholder",
    spots: "Fully booked",
    note: "Reserved for a returning private group. Ask about the following week.",
  },
  {
    id: "w7",
    label: "Week 12",
    dates: "15–21 Mar",
    month: "March",
    status: "open",
    program: "Lyngen Ski Touring Week",
    price: "Price placeholder",
    spots: "6 spots left",
    note: "Peak season. Long days, big summits and reliable spring snow cycles.",
  },
  {
    id: "w8",
    label: "Week 14",
    dates: "29 Mar–4 Apr",
    month: "March",
    status: "limited",
    program: "Summit & Sea Traverse",
    price: "Price placeholder",
    spots: "3 spots left",
    note: "Point-to-point touring with boat access to remote Lyngen valleys.",
  },
  {
    id: "w9",
    label: "Week 16",
    dates: "12–18 Apr",
    month: "April",
    status: "open",
    program: "Corn Snow Week",
    price: "Price placeholder",
    spots: "6 spots left",
    note: "Midnight-light ski touring and long spring corn descents to the fjord.",
  },
  {
    id: "w10",
    label: "Week 18",
    dates: "26 Apr–2 May",
    month: "April",
    status: "open",
    program: "Late Season Steep Skiing",
    price: "Price placeholder",
    spots: "4 spots left",
    note: "For experienced skiers comfortable on 40° terrain with rope work.",
  },
];

const statusLabel: Record<Status, string> = {
  open: "Open",
  limited: "Limited",
  booked: "Booked",
};

const months = ["December", "January", "February", "March", "April"];

const navLinks = [
  { href: "#season", label: "Winter 26/27" },
  { href: "#programs", label: "Programs" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const programs = [
  {
    name: "Ski Touring Week",
    price: "Price placeholder / week",
    body: "Six days of guided touring from a single base in Lyngen. Transport, route choice and snow assessment handled; you ski.",
    meta: "Max 6 skiers",
  },
  {
    name: "Avalanche Course",
    price: "Price placeholder / course",
    body: "Three field-heavy days on snowpack, terrain and companion rescue, taught to Norwegian standards in real touring terrain.",
    meta: "Max 6 participants",
  },
  {
    name: "Private Guiding",
    price: "Price placeholder / day",
    body: "One day or ten, shaped around your group — first summits, steep objectives, or ski mountaineering projects.",
    meta: "1–4 skiers",
  },
];

const credentials = [
  ["IFMGA / UIAGM certified", "2014"],
  ["Avalanche training", "Level 3, Norwegian standard"],
  ["Medical", "Wilderness First Responder, renewed annually"],
  ["Seasons guided", "18 winters in Troms and Lyngen"],
];

function Index() {
  const [selected, setSelected] = useState<Week>(weeks[3]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#top" className="font-display text-sm font-semibold tracking-tight sm:text-base">
            Jimmy Halvardsson
          </a>
          <nav className="flex items-center gap-4 overflow-x-auto text-xs font-medium sm:gap-7 sm:text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="whitespace-nowrap text-muted-foreground transition-colors hover:text-fjord"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
          <p className="eyebrow">Tromsø · Lyngen Alps · 69°N</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] font-semibold sm:text-6xl">
            Ski touring in the Lyngen Alps with a certified mountain guide
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            I'm Jimmy Halvardsson, an IFMGA-certified mountain guide based in Tromsø. I guide small
            groups on the fjord-to-summit lines of Lyngen and the Troms coast, from polar night to
            late spring corn.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#season"
              className="inline-flex items-center rounded-sm bg-ember px-6 py-3 font-display text-sm font-semibold text-ember-foreground transition-opacity hover:opacity-90"
            >
              See open weeks
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-sm border border-fjord px-6 py-3 font-display text-sm font-semibold text-fjord transition-colors hover:bg-fjord-soft"
            >
              Get in touch
            </a>
          </div>
          <ul className="mt-12 flex flex-wrap gap-2">
            {["IFMGA certified", "Based in Tromsø / Lyngen", "EN / SE / NO spoken"].map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-border bg-card px-4 py-1.5 font-display text-xs font-medium tracking-wide text-muted-foreground"
              >
                {chip}
              </li>
            ))}
          </ul>
        </section>

        {/* Season */}
        <section id="season" className="border-t border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <p className="eyebrow">Winter 26/27</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Season calendar</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              December through April, week by week. Select a week to see the program, price and
              remaining places. Dates are placeholders while the season is being finalised.
            </p>

            <div className="mt-10 flex flex-wrap gap-5 font-display text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-ember" /> Open
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-fjord" /> Limited
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-border" /> Booked
              </span>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
              <div className="space-y-8">
                {months.map((month) => {
                  const monthWeeks = weeks.filter((w) => w.month === month);
                  if (!monthWeeks.length) return null;
                  return (
                    <div key={month}>
                      <h3 className="font-display text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                        {month}
                      </h3>
                      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {monthWeeks.map((w) => {
                          const isActive = selected.id === w.id;
                          const accent =
                            w.status === "open"
                              ? "border-ember/50 hover:border-ember"
                              : w.status === "limited"
                                ? "border-fjord/40 hover:border-fjord"
                                : "border-border";
                          return (
                            <button
                              key={w.id}
                              type="button"
                              onClick={() => setSelected(w)}
                              aria-pressed={isActive}
                              className={`rounded-sm border bg-background p-4 text-left transition-all ${accent} ${
                                isActive ? "ring-1 ring-fjord ring-offset-2 ring-offset-card" : ""
                              } ${w.status === "booked" ? "opacity-60" : ""}`}
                            >
                              <span className="block font-display text-[0.7rem] tracking-wide text-muted-foreground">
                                {w.label}
                              </span>
                              <span
                                className={`mt-1 block font-display text-base font-semibold ${
                                  w.status === "booked"
                                    ? "text-muted-foreground line-through decoration-1"
                                    : ""
                                }`}
                              >
                                {w.dates}
                              </span>
                              <span
                                className={`mt-3 inline-block font-display text-[0.7rem] font-semibold tracking-wide ${
                                  w.status === "open"
                                    ? "text-ember"
                                    : w.status === "limited"
                                      ? "text-fjord"
                                      : "text-muted-foreground"
                                }`}
                              >
                                {statusLabel[w.status]}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-sm border border-border bg-background p-6">
                  <p className="font-display text-[0.7rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    {selected.label} · {selected.dates}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{selected.program}</h3>
                  <dl className="mt-6 space-y-3 text-sm">
                    <div className="flex justify-between gap-4 border-t border-border pt-3">
                      <dt className="font-display text-muted-foreground">Price</dt>
                      <dd>{selected.price}</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-t border-border pt-3">
                      <dt className="font-display text-muted-foreground">Availability</dt>
                      <dd
                        className={
                          selected.status === "open"
                            ? "text-ember"
                            : selected.status === "limited"
                              ? "text-fjord"
                              : "text-muted-foreground"
                        }
                      >
                        {selected.spots}
                      </dd>
                    </div>
                    <div className="border-t border-border pt-3">
                      <dt className="font-display text-muted-foreground">Note</dt>
                      <dd className="mt-1 text-muted-foreground">{selected.note}</dd>
                    </div>
                  </dl>
                  {selected.status === "booked" ? (
                    <p className="mt-6 font-display text-xs text-muted-foreground">
                      This week is full. Write to me and I'll suggest the closest alternative.
                    </p>
                  ) : (
                    <a
                      href="#contact"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-ember px-5 py-3 font-display text-sm font-semibold text-ember-foreground transition-opacity hover:opacity-90"
                    >
                      Enquire about this week
                    </a>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section id="programs" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <p className="eyebrow">Programs</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Three ways to ski together</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {programs.map((p) => (
                <article
                  key={p.name}
                  className="flex flex-col rounded-sm border border-border bg-card p-6"
                >
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 font-display text-sm font-semibold text-fjord">{p.price}</p>
                  <p className="mt-4 flex-1 text-muted-foreground">{p.body}</p>
                  <p className="mt-6 border-t border-border pt-4 font-display text-xs tracking-wide text-muted-foreground">
                    {p.meta}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border bg-card">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-start">
            <div
              className="flex aspect-4/5 items-end rounded-sm border border-border bg-fjord-soft p-6"
              role="img"
              aria-label="Portrait placeholder of Jimmy Halvardsson"
            >
              <span className="font-display text-xs tracking-[0.14em] text-fjord uppercase">
                Photo placeholder
              </span>
            </div>
            <div>
              <p className="eyebrow">About</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Eighteen winters at 69° north
              </h2>
              <p className="mt-6 text-muted-foreground">
                I grew up ski touring in northern Sweden and moved to Tromsø for the fjords. Most of
                my winters since have been spent in Lyngen — learning how its snowpack behaves, which
                aspects hold, and when to turn a group around.
              </p>
              <p className="mt-4 text-muted-foreground">
                I keep groups small and plans flexible. The objective is decided by the snow and the
                weather on the day, not by a brochure. Guiding is in English, Swedish or Norwegian.
              </p>
              <dl className="mt-10 divide-y divide-border border-t border-border">
                {credentials.map(([k, v]) => (
                  <div key={k} className="flex flex-wrap justify-between gap-2 py-3 text-sm">
                    <dt className="font-display font-medium">{k}</dt>
                    <dd className="text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Plan a week</h2>
              <p className="mt-6 text-muted-foreground">
                Tell me roughly when you'd like to come and who's coming. I answer every enquiry
                personally, usually within two days.
              </p>
              <a
                href="mailto:jimmy@halvardsson.no"
                className="mt-6 inline-block font-display text-sm font-semibold text-fjord underline decoration-1 underline-offset-4"
              >
                jimmy@halvardsson.no
              </a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-8 font-display text-xs tracking-wide text-muted-foreground sm:px-8">
          <span>Jimmy Halvardsson</span>
          <span>IFMGA Mountain Guide</span>
          <span>Tromsø, Norway</span>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  const fieldClass =
    "mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-fjord";
  const labelClass = "block font-display text-xs font-semibold tracking-wide text-muted-foreground";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-sm border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="sm:col-span-2">
          <span className={labelClass}>Name</span>
          <input required name="name" className={fieldClass} placeholder="Your name" />
        </label>
        <label>
          <span className={labelClass}>Dates</span>
          <input name="dates" className={fieldClass} placeholder="e.g. Week 12, March" />
        </label>
        <label>
          <span className={labelClass}>Group size</span>
          <input name="group" className={fieldClass} placeholder="e.g. 3 skiers" />
        </label>
        <label className="sm:col-span-2">
          <span className={labelClass}>Message</span>
          <textarea
            name="message"
            rows={5}
            className={fieldClass}
            placeholder="Experience level, objectives, questions…"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex items-center rounded-sm bg-ember px-6 py-3 font-display text-sm font-semibold text-ember-foreground transition-opacity hover:opacity-90"
      >
        Send enquiry
      </button>
      {sent && (
        <p className="mt-4 font-display text-xs text-fjord">
          Thanks — your enquiry is noted. I'll reply from jimmy@halvardsson.no.
        </p>
      )}
    </form>
  );
}
