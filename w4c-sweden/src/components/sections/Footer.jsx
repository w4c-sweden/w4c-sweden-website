import { Heading } from "../ui/Typography";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-line-dark text-muted py-14 text-sm mt-auto text-left">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Kolumn 1: Logotyp & beskrivning */}
        <div className="md:col-span-2 space-y-3">
          <a
            href="#"
            className="font-heading font-bold text-xl text-white tracking-tight inline-block"
          >
            WOMEN<span className="text-red">4</span>CYBER
            <span className="block text-[10px] tracking-widest text-red-light font-body">
              SWEDEN
            </span>
          </a>
          <p className="text-slate-300 max-w-sm">
            Part of the European Cyber Security Organisation.
          </p>
        </div>

        {/* Kolumn 2: Navigation */}
        <div className="space-y-3">
          <Heading level={3} className="text-white text-base mb-2">
            Utforska
          </Heading>
          <ul className="space-y-2">
            <li>
              <a href="#om" className="hover:text-white transition-colors">
                Om oss
              </a>
            </li>
            <li>
              <a href="#vag" className="hover:text-white transition-colors">
                Din väg in
              </a>
            </li>
            <li>
              <a href="#event" className="hover:text-white transition-colors">
                Event
              </a>
            </li>
            <li>
              <a href="#mentor" className="hover:text-white transition-colors">
                Mentorskap
              </a>
            </li>
          </ul>
        </div>

        {/* Kolumn 3: Kontakt & externa länkar */}
        <div className="space-y-3">
          <Heading level={3} className="text-white text-base mb-2">
            Kontakt
          </Heading>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:info@women4cyber.se"
                className="hover:text-white transition-colors"
              >
                info@women4cyber.se
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/women4cyber-sweden/posts/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
