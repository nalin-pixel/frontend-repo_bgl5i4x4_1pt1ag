export default function Method() {
  const items = [
    {
      title: 'Break the rules',
      body: 'We ditch grammar-first lectures for expression-first training. Speak, feel, and sharpen understanding in motion.'
    },
    {
      title: 'Think in English',
      body: 'Stop translating. Start perceiving patterns, rhythm, and meaning directly through immersive drills.'
    },
    {
      title: 'AI that pushes you',
      body: 'Custom tools simulate realistic contexts, feedback, and miscommunication—so you learn to navigate the real thing.'
    },
  ]

  return (
    <section id="method" className="relative z-10 bg-[#010407] py-24 text-[#EFF5FF]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{ fontFamily: 'Geologica, var(--font-sans)' }}>
            The Method
          </h2>
          <p className="mt-4 text-[#EFF5FF]/75">
            Built to train perception and expression. Designed to build confidence under pressure. Crafted to make old methods irrelevant.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/[0.05]">
              <div className="mb-3 h-10 w-10 rounded-lg bg-gradient-to-tr from-[#0C63E7] to-[#FFC003] opacity-80" />
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-[#EFF5FF]/75">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
