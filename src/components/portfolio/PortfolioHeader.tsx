import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Mail, Menu } from "lucide-react";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function PortfolioHeader({
  name,
  role,
  email,
  onCopyEmail,
}: {
  name: string;
  role: string;
  email: string;
  onCopyEmail: () => void;
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <header className="portfolio-header">
      <div className="container portfolio-header__inner">
        <div className="flex min-w-0 items-center gap-4">
          <div className="grid h-9 w-9 place-items-center rounded-full border bg-background text-xs font-semibold tracking-[0.25em]">
            {initials}
          </div>
          <div className="min-w-0">
            <p className="portfolio-header__name truncate">{name}</p>
            <p className="portfolio-header__role truncate">{role}</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} className="portfolio-navlink" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Mobile nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[20rem]">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>

                <div className="mt-6 grid gap-2">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a className="portfolio-navlink" href={link.href}>
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>

                <div className="mt-8 grid gap-2">
                  <SheetClose asChild>
                    <Button asChild>
                      <a href="#contact">Let’s talk</a>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Let’s talk</a>
          </Button>
          <Button variant="outline" size="sm" onClick={onCopyEmail} aria-label={`Copy email ${email}`}>
            <Mail className="mr-0 h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Copy</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
