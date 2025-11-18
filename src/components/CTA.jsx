export default function CTA() {
  return (
    <section id="cta" className="relative bg-[#010407] py-24 text-[#EFF5FF]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl" style={{ fontFamily: 'Geologica, var(--font-sans)' }}>
                Make the old way irrelevant
              </h3>
              <p className="mt-3 text-[#EFF5FF]/80">Join a cohort that trains expression, perception, and confidence—backed by AI tools and real conversations.</p>
            </div>
            <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <input type="email" required placeholder="Email" className="h-12 rounded-full border border-white/15 bg-[#010407] px-5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#0C63E7]" />
              <button className="h-12 rounded-full bg-[#FFC003] px-6 font-semibold text-[#010407] shadow-[0_16px_30px_-12px_rgba(255,192,3,0.45)]">Get early access</button>
              <p className="col-span-full text-xs text-white/60">By subscribing you agree to receive updates from Irrelevant.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
