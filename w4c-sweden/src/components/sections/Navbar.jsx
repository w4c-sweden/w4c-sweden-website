import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-bg-dark/95 backdrop-blur-sm border-b border-line-dark z-20">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        <a
          href="#"
          className="font-heading font-bold text-xl text-blue tracking-tight"
        >
          WOMEN<span className="text-red">4</span>CYBER
          <span className="block text-[10px] tracking-widest text-red-light font-body">
            SWEDEN
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-text-main">
          <a href="#om" className="hover:text-blue transition-colors">
            Om oss
          </a>
          <a href="#vag" className="hover:text-blue transition-colors">
            Din väg in
          </a>
          <a href="#event" className="hover:text-blue transition-colors">
            Event
          </a>
          <a href="#mentor" className="hover:text-blue transition-colors">
            Mentorskap
          </a>
        </nav>

        <div className="hidden md:block">
          <Button href="#bli" variant="red" className="px-5 py-2 text-sm">
            Bli medlem
          </Button>
        </div>
      </div>
    </header>
  );
}
