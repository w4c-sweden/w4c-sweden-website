import { useAuth } from "../../context/AuthContext";
import { Eyebrow, Heading, Text } from "../ui/Typography";
import Button from "../ui/Button";

export default function MemberDashboard({ onBackToHome }) {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-line-dark">
        <div>
          <Eyebrow light>Medlemsportal</Eyebrow>
          <Heading level={1} className="text-left">
            Välkommen tillbaka, {user.firstName}
          </Heading>
          <Text variant="lead" className="max-w-2xl text-left">
            Här samlar vi kommande nätverksträffar, mentorskap och resurser för
            dig som är en del av Women4Cyber Sweden.
          </Text>
        </div>

        <div className="flex items-center gap-3">
          {onBackToHome && (
            <Button onClick={onBackToHome} variant="ghost" className="text-sm">
              Till startsidan
            </Button>
          )}
          <Button onClick={logout} variant="red" className="text-sm">
            Logga ut
          </Button>
        </div>
      </div>

      {/* Kort för medlemsinnehåll */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-card-dark border border-line-dark rounded-2xl p-6 space-y-3">
          <Heading level={3} className="text-white">
            Kommande event
          </Heading>
          <p className="text-sm text-muted">
            Anmäl dig till frukostseminarier, CTF-kvällar och nätverksträffar
            runt om i Sverige.
          </p>
          <a
            href="#event"
            onClick={onBackToHome}
            className="inline-block text-sm text-blue hover:underline font-medium pt-2"
          >
            Se kalendern →
          </a>
        </div>

        <div className="bg-card-dark border border-line-dark rounded-2xl p-6 space-y-3">
          <Heading level={3} className="text-white">
            Mentorskapsprogram
          </Heading>
          <p className="text-sm text-muted">
            Matcha med erfarna kvinnor inom cybersäkerhet eller anmäl dig som
            mentor.
          </p>
          <a
            href="#mentor"
            onClick={onBackToHome}
            className="inline-block text-sm text-blue hover:underline font-medium pt-2"
          >
            Läs mer om mentorskap →
          </a>
        </div>

        <div className="bg-card-dark border border-line-dark rounded-2xl p-6 space-y-3">
          <Heading level={3} className="text-white">
            Ditt medlemskap
          </Heading>
          <p className="text-sm text-muted">
            Status:{" "}
            <span className="text-emerald-400 font-medium">Aktiv medlem</span>
          </p>
          <p className="text-xs text-slate-400">
            Vi lagrar endast ditt förnamn och din e-postadress i enlighet med
            dataminimering.
          </p>
        </div>
      </div>
    </section>
  );
}
