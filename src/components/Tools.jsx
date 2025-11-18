export default function Tools() {
  const tools = [
    {
      title: 'Perception Drills',
      body: 'Train your ear to decode fast, messy, real speech with context-cued prompts.'
    },
    {
      title: 'Expression Coach',
      body: 'Skip the script. Generate, refine, and reframe your own words with instant feedback.'
    },
    {
      title: 'Miscommunication Simulator',
      body: 'Practice breakdowns safely: clarify, negotiate, and repair meaning under pressure.'
    },
    {
      title: 'Shadow & Flow',
      body: 'Mimic rhythm, intonation, and stress to build natural fluency and presence.'
    },
  ]

  return (
    <section id="tools" className="relative bg-[#010407] py-24 text-[#EFF5FF]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{ fontFamily: 'Geologica, var(--font-sans)' }}>
            Tools that expand what learning can be
          </h2>
          <p className="mt-4 text-[#EFF5FF]/75">Multiple custom-built AI experiences push beyond quizzes into reality.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((t) => (
            <div key={t.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 h-12 w-12 rounded-xl bg-gradient-to-tr from-[#0C63E7] to-[#FFC003] opacity-80" />
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-[#EFF5FF]/75">{t.body}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <button className="mt-4 text-sm text-[#0C63E7] hover:underline">See how it works</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
