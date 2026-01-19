import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HeroPortrait } from "@/components/portfolio/HeroPortrait";
import { PortfolioHeader } from "@/components/portfolio/PortfolioHeader";
import { Reveal } from "@/components/motion/Reveal";
import { portfolio } from "@/content/portfolio";
import portraitPng from "@/assets/portrait.png";
import portrait512Webp from "@/assets/portrait-512.webp";
import portrait768Webp from "@/assets/portrait-768.webp";
import { ArrowUpRight, Download } from "lucide-react";
import { toast } from "sonner";

function copyToClipboard(value: string, label: string) {
  navigator.clipboard
    ?.writeText(value)
    .then(() => toast.success(`${label} copied`))
    .catch(() => toast.error(`Couldn't copy ${label.toLowerCase()}`));
}

function prefetchDocument(href: string) {
  if (typeof document === "undefined") return;

  const id = `prefetch:${href}`;
  if (document.getElementById(id)) return;

  const link = document.createElement("link");
  link.id = id;
  link.rel = "prefetch";
  link.as = "document";
  link.href = href;
  document.head.appendChild(link);
}

export function PortfolioHome() {
  const { person, hero, featuredProjects, experience, education, certifications, about } =
    portfolio;

  return (
    <div className="min-h-screen bg-background text-foreground editorial-grid-bg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-foreground focus:shadow"
      >
        Skip to content
      </a>

      <PortfolioHeader
        name={person.name}
        role={person.role}
        email={person.email}
        onCopyEmail={() => copyToClipboard(person.email, "Email")}
      />

      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-8 top-10 hidden select-none text-8xl font-semibold tracking-[-0.06em] text-muted-foreground/10 md:block"
          >
            BUILD
          </div>
          <div className="container">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-8">
                <p className="text-sm font-medium tracking-[0.25em] text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-700">
                  PORTFOLIO
                </p>
                <h1 className="mt-4 text-left text-4xl leading-[1.05] md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-3 duration-700">
                  {hero.headline}
                </h1>
                <p className="mt-6 max-w-2xl text-left text-lg text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                  {hero.subhead}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild>
                    <a href="#work">View featured work</a>
                  </Button>
                  <Button variant="secondary" asChild>
                    <a
                      href={person.resumeHref}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => prefetchDocument(person.resumeHref)}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download resume
                    </a>
                  </Button>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  {about.skills.slice(0, 10).map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>

              <aside className="md:col-span-4">
                <div className="grid gap-6">
                  <HeroPortrait
                    name={person.name}
                    image={{
                      src: portraitPng,
                      webpSrcSet: `${portrait512Webp} 512w, ${portrait768Webp} 768w`,
                      sizes: "(min-width: 768px) 20rem, 16rem",
                      alt: `${person.name} portrait`,
                    }}
                    caption={`Building reliable AI products—measured, fast, and human-centered.`}
                  />

                  <Card className="p-6 text-left hover-scale animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <p className="text-sm text-muted-foreground">Currently</p>
                    <p className="mt-2 text-base font-semibold">
                      {experience[0]?.role} @ {experience[0]?.company}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {experience[0]?.period}
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground">Based</p>
                    <p className="mt-2 text-sm">{person.location}</p>

                    <div className="mt-6 grid gap-2">
                      <Button variant="outline" asChild className="justify-between">
                        <a href={person.linkedin} target="_blank" rel="noreferrer">
                          LinkedIn <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="justify-between">
                        <a href={person.github} target="_blank" rel="noreferrer">
                          GitHub <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Work */}
        <Reveal asChild>
          <section id="work" className="border-t py-16 md:py-24">
            <div className="container">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-sm font-medium tracking-[0.25em] text-muted-foreground">
                    FEATURED
                  </p>
                  <h2 className="mt-3 text-3xl md:text-4xl">Selected work</h2>
                </div>
                <p className="hidden max-w-md text-right text-sm text-muted-foreground md:block">
                  A tight set of projects focused on retrieval quality, latency, and
                  real-world utility.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredProjects.map((p, idx) => (
                  <Reveal asChild key={p.title} delayMs={idx * 80}>
                    <Card className="group p-6 text-left hover-scale transition-shadow hover:shadow-lg">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold tracking-tight">
                            {p.title}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {p.subtitle}
                          </p>
                        </div>
                        {p.href && (
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noreferrer"
                            className="shrink-0 rounded-full p-2 hover:bg-muted transition-colors"
                            aria-label={`View ${p.title} on GitHub`}
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.stack.slice(0, 4).map((t) => (
                          <Badge key={t} variant="secondary" className="text-xs">
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                        {p.highlights.map((h) => (
                          <li key={h} className="relative pl-4">
                            <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-primary" />
                            {h}
                          </li>
                        ))}
                      </ul>

                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Experience */}
        <Reveal asChild>
          <section id="experience" className="border-t py-16 md:py-24">
            <div className="container">
              <div className="grid gap-10 md:grid-cols-12">
                <header className="md:col-span-4">
                  <p className="text-sm font-medium tracking-[0.25em] text-muted-foreground">
                    EXPERIENCE
                  </p>
                  <h2 className="mt-3 text-3xl md:text-4xl">Shipped in the real world</h2>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Roles, education, and certifications—organized as a timeline.
                  </p>
                </header>

                <div className="md:col-span-8">
                  <div className="relative pl-6">
                    <div className="absolute left-2 top-0 h-full w-px bg-border" />

                    <div className="space-y-6">
                      {experience.map((item, idx) => (
                        <div key={`${item.company}-${item.period}`} className="relative">
                          <div className="absolute left-0 top-6 h-4 w-4 rounded-full border bg-background" />
                          <Reveal asChild delayMs={idx * 60}>
                            <Card className="ml-4 p-6 text-left hover-scale">
                              <div className="flex flex-wrap items-baseline justify-between gap-3">
                                <div>
                                  <h3 className="text-xl font-semibold tracking-tight">
                                    {item.role}
                                  </h3>
                                  <p className="mt-1 text-sm text-muted-foreground">
                                    {item.company}
                                    {item.location ? ` · ${item.location}` : ""}
                                  </p>
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {item.period}
                                </Badge>
                              </div>

                              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                                {item.bullets.map((b) => (
                                  <li key={b} className="relative pl-4">
                                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-primary" />
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </Card>
                          </Reveal>
                        </div>
                      ))}

                      <div className="grid gap-6 md:grid-cols-2">
                        <Reveal asChild delayMs={80}>
                          <Card className="p-6 text-left">
                            <p className="text-sm font-medium tracking-[0.25em] text-muted-foreground">
                              EDUCATION
                            </p>
                            <div className="mt-4 space-y-4">
                              {education.map((e) => (
                                <div key={`${e.school}-${e.period}`}>
                                  <p className="text-base font-semibold">{e.school}</p>
                                  <p className="mt-1 text-sm text-muted-foreground">
                                    {e.degree}
                                  </p>
                                  <p className="mt-1 text-xs text-muted-foreground">
                                    {e.location ? `${e.location} · ` : ""}
                                    {e.period}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </Card>
                        </Reveal>

                        <Reveal asChild delayMs={140}>
                          <Card className="p-6 text-left">
                            <p className="text-sm font-medium tracking-[0.25em] text-muted-foreground">
                              CERTIFICATIONS
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                              {certifications.map((c) => (
                                <li key={c} className="flex gap-2">
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                  <span>{c}</span>
                                </li>
                              ))}
                            </ul>
                          </Card>
                        </Reveal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* About */}
        <Reveal asChild>
          <section id="about" className="border-t py-16 md:py-24">
            <div className="container">
              <div className="grid gap-10 md:grid-cols-12">
                <header className="md:col-span-4">
                  <p className="text-sm font-medium tracking-[0.25em] text-muted-foreground">
                    ABOUT
                  </p>
                  <h2 className="mt-3 text-3xl md:text-4xl">A little context</h2>
                </header>

                <div className="md:col-span-8">
                  <Reveal delayMs={40}>
                    <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                      {about.summary}
                    </p>
                  </Reveal>

                  <Reveal delayMs={120}>
                    <div className="mt-10">
                      <h3 className="text-sm font-semibold tracking-[0.2em] text-muted-foreground">
                        SKILLS
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {about.skills.map((s) => (
                          <Badge key={s} variant="outline" className="text-xs">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Contact */}
        <Reveal asChild>
          <section id="contact" className="border-t py-16 md:py-24">
            <div className="container">
              <Reveal asChild delayMs={60}>
                <Card className="p-8 md:p-12 hover-scale">
                  <div className="grid gap-10 md:grid-cols-12">
                    <div className="md:col-span-7">
                      <p className="text-sm font-medium tracking-[0.25em] text-muted-foreground">
                        CONTACT
                      </p>
                      <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                        Want to ship something ambitious?
                      </h2>
                      <p className="mt-4 max-w-xl text-muted-foreground">
                        I’m available for internships, collaborations, and AI product
                        builds. Send a short brief and the success metric you care
                        about.
                      </p>
                    </div>

                    <div className="md:col-span-5">
                      <div className="grid gap-3">
                        <Button asChild className="justify-between">
                          <a href={`mailto:${person.email}`}>
                            Email me <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="secondary"
                          className="justify-between"
                          onClick={() => copyToClipboard(person.email, "Email")}
                        >
                          Copy email <span className="text-xs">{person.email}</span>
                        </Button>
                        <Button variant="outline" asChild className="justify-between">
                          <a href={person.linkedin} target="_blank" rel="noreferrer">
                            LinkedIn <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="outline" asChild className="justify-between">
                          <a href={person.github} target="_blank" rel="noreferrer">
                            GitHub <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="outline" asChild className="justify-between">
                          <a href={person.resumeHref} target="_blank" rel="noreferrer">
                            Resume <Download className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>

                      <p className="mt-6 text-xs text-muted-foreground">
                        Prefer WhatsApp? {person.phone}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>

              <Reveal delayMs={140}>
                <footer className="mt-10 flex flex-col items-start justify-between gap-4 border-t pt-8 text-sm text-muted-foreground md:flex-row md:items-center">
                  <p className="text-left">
                    © {new Date().getFullYear()} {person.name}.
                  </p>
                  <div className="flex items-center gap-6">
                    <a className="story-link" href="#work">
                      Back to work
                    </a>
                    <a className="story-link" href="#main">
                      Top
                    </a>
                  </div>
                </footer>
              </Reveal>
            </div>
          </section>
        </Reveal>
      </main>
    </div>
  );
}
