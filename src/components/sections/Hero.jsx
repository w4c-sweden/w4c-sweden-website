import Button from "../ui/Button";
import { Eyebrow, Heading, Text } from "../ui/Typography";

export default function Hero() {
  return (
    <section className="bg-navy text-white rounded-b-3xl sm:rounded-b-[48px] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Eyebrow light>
            Ett svenskt nätverk för kvinnor i cybersäkerhet
          </Eyebrow>
          <Heading level={1}>Du hör hemma i cybersäkerhet.</Heading>
          <Text variant="lead" className="mb-8 max-w-xl">
            Oavsett om du precis tagit din första roll eller byter bana från ett
            helt annat yrke – här hittar du människor, kunskap och mod att ta
            nästa steg.
          </Text>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button href="#bli" variant="red">
              Gå med i nätverket
            </Button>
            <Button href="#vag" variant="ghost">
              Hitta din väg in
            </Button>
          </div>
        </div>

        {/* Lightweight SVG network illustration */}
        <div className="lg:col-span-5 flex justify-center">
          <svg
            className="w-full max-w-[340px] aspect-square"
            viewBox="0 0 400 400"
            role="img"
            aria-label="Nätverksgraf"
          >
            <g stroke="#7FA6E8" strokeWidth="1.5" opacity="0.6">
              <line x1="200" y1="200" x2="90" y2="110" />
              <line x1="200" y1="200" x2="310" y2="95" />
              <line x1="200" y1="200" x2="330" y2="250" />
              <line x1="200" y1="200" x2="110" y2="300" />
              <line x1="90" y1="110" x2="310" y2="95" />
              <line x1="330" y1="250" x2="310" y2="95" />
              <line x1="110" y1="300" x2="330" y2="250" />
              <line x1="90" y1="110" x2="110" y2="300" />
              <line x1="200" y1="200" x2="200" y2="50" />
              <line x1="200" y1="50" x2="90" y2="110" />
              <line x1="200" y1="50" x2="310" y2="95" />
            </g>
            <circle cx="200" cy="200" r="34" fill="#D4384E" />
            <circle cx="90" cy="110" r="20" fill="#2F5DA8" />
            <circle cx="310" cy="95" r="24" fill="#7FA6E8" />
            <circle cx="330" cy="250" r="18" fill="#D4384E" opacity="0.85" />
            <circle cx="110" cy="300" r="26" fill="#2F5DA8" />
            <circle cx="200" cy="50" r="14" fill="#ffffff" />
          </svg>
        </div>
      </div>
    </section>
  );
}
