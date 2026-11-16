import { Eyebrow, Heading, Text } from "../ui/Typography";

const features = [
  {
    initial: "N",
    title: "Nätverk",
    desc: "Träffa kvinnor i branschen – från första jobbet till ledande roller.",
    color: "bg-red",
  },
  {
    initial: "M",
    title: "Mentorskap",
    desc: "Bli matchad med någon som varit där du är nu och vet vägen vidare.",
    color: "bg-blue",
  },
  {
    initial: "K",
    title: "Kunskap",
    desc: "Workshops, föredrag och resurser som gör branschens språk begripligt.",
    color: "bg-navy",
  },
];

export default function Features() {
  return (
    <section id="om" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow>Om Women4Cyber Sweden</Eyebrow>
        <Heading level={2}>Tre sätt att växa tillsammans</Heading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-card-dark border border-line rounded-2xl p-7 shadow-xs"
            >
              <div
                className={`w-12 h-12 rounded-xl ${item.color} text-white flex items-center justify-center font-heading font-bold text-xl mb-5`}
              >
                {item.initial}
              </div>
              <Heading level={3}>{item.title}</Heading>
              <Text variant="muted">{item.desc}</Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
