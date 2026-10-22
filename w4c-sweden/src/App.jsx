export default function App() {
  return (
    <div className="min-h-screen bg-white text-text-main">
      {/* Hero sektion */}
      <header className="bg-navy text-white p-12 rounded-b-3xl">
        <span className="text-red-light text-xs font-bold uppercase tracking-widest block mb-2">
          Ett svenskt nätverk för kvinnor i cybersäkerhet
        </span>
        <h1 className="text-4xl font-bold mb-4">
          Du hör hemma i cybersäkerhet.
        </h1>
        <div className="flex gap-4 mt-6">
          <button className="bg-red hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full">
            Gå med i nätverket
          </button>
          <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10">
            Hitta din väg in
          </button>
        </div>
      </header>

      {/* Sektion med tint och kort */}
      <section className="bg-tint p-8">
        <div className="bg-white p-6 rounded-2xl border border-line shadow-sm max-w-sm">
          <div className="w-12 h-12 rounded-xl bg-blue text-white flex items-center justify-center font-bold mb-4">
            M
          </div>
          <h3 className="font-bold text-lg mb-1">Mentorskap</h3>
          <p className="text-muted text-sm">
            Bli matchad med någon som varit där du är nu.
          </p>
        </div>
      </section>
    </div>
  );
}
