export default function Why() {
  const stats = [
    { k: '92%', d: 'reported speaking with more confidence in 30 days' },
    { k: '4x', d: 'faster improvement in comprehension vs. textbook study' },
    { k: '85%', d: 'used English in real conversations after week one' },
  ]

  return (
    <section id="why" className="relative bg-[#010407] py-24 text-[#EFF5FF]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(12,99,231,0.15),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{ fontFamily: 'Geologica, var(--font-sans)' }}>
              The old way is irrelevant
            </h2>
            <p className="mt-4 max-w-xl text-[#EFF5FF]/75">
              Grammar has its place. But confidence comes from clarity and connection. We train you to handle messy, real conversation—where rules bend and meaning matters.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                <div className="text-2xl font-semibold text-[#FFC003]">{s.k}</div>
                <div className="mt-2 text-xs text-[#EFF5FF]/70">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
