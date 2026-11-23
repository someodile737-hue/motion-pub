import {
  ArrowRight,
  Play,
  Sparkles,
  Video,
  Image as ImageIcon,
  Zap,
  Check,
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Des vidéos publicitaires",
    description: "Transformez vos images en vidéos promotionnelles attractives.",
  },
  {
    icon: Zap,
    title: "Simple et rapide",
    description: "Envoyez vos visuels et décrivez votre projet en quelques étapes.",
  },
  {
    icon: Sparkles,
    title: "Un rendu professionnel",
    description: "Donnez une nouvelle dimension à votre communication.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="text-2xl font-black tracking-tight">
          MOTION<span className="text-[#C5F467]">PUB</span>
        </a>

        <a
          href="#commander"
          className="rounded-full bg-[#C5F467] px-5 py-3 text-sm font-bold text-black"
        >
          Commander
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-32">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[#C5F467]">
            <Sparkles size={16} />
            La publicité vidéo simplifiée
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Vos images.
            <br />
            Votre marque.
            <br />
            <span className="text-[#C5F467]">En mouvement.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
            Transformez vos photos de produits et vos visuels en publicités
            vidéo captivantes pour faire grandir votre activité.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#commander"
              className="inline-flex items-center gap-2 rounded-full bg-[#C5F467] px-7 py-4 font-bold text-black"
            >
              Créer ma vidéo <ArrowRight size={18} />
            </a>

            <a
              href="#fonctionnement"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold"
            >
              <Play size={17} /> Découvrir
            </a>
          </div>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#24242b] to-[#111116] p-8 md:p-12">
          <div className="absolute right-8 top-8 rounded-full bg-[#C5F467] px-3 py-2 text-xs font-bold text-black">
            MOTION PUB
          </div>

          <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40">
            <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-3xl bg-[#C5F467] text-black">
              <Video size={48} />
            </div>
            <p className="text-2xl font-black">Votre publicité</p>
            <p className="mt-2 text-gray-400">Prête à prendre vie</p>
            <div className="mt-8 flex items-center gap-2 text-sm text-[#C5F467]">
              <ImageIcon size={17} />
              Image → Vidéo
            </div>
          </div>
        </div>
      </section>

      <section id="fonctionnement" className="bg-[#111116] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-black md:text-5xl">
            Pourquoi choisir Motion Pub ?
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                >
                  <Icon size={32} className="text-[#C5F467]" />
                  <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="commander" className="px-6 py-24 text-center">
        <h2 className="text-3xl font-black md:text-5xl">
          Prêt à faire bouger votre marque ?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-gray-400">
          Préparez vos images et donnez vie à votre prochaine publicité.
        </p>
        <a
          href="mailto:contact@motionpub.fr"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C5F467] px-8 py-4 font-bold text-black"
        >
          Nous contacter <ArrowRight size={18} />
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Motion Pub. Tous droits réservés.
      </footer>
    </main>
  );
}
