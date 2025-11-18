import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden" id="home">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#010407]" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for mood (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(12,99,231,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,192,3,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_70%_20%,rgba(12,99,231,0.15),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[#EFF5FF]/80">
          Not grammar-first • Expression-first • AI-powered
        </span>
        <h1 className="max-w-5xl text-balance text-4xl font-semibold tracking-tight text-[#EFF5FF] sm:text-6xl" style={{ fontFamily: 'Work Sans, var(--font-sans)' }}>
          Own English. Don’t just learn it.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base text-[#EFF5FF]/80 sm:text-lg">
          Irrelevant is a new standard for language learning. We break the rules so you can break through—into clarity, confidence, and connection.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-[#FFC003] px-6 py-3 text-[#010407] font-semibold shadow-[0_20px_40px_-12px_rgba(255,192,3,0.45)] hover:shadow-[0_24px_50px_-12px_rgba(255,192,3,0.6)]">
            Start your shift
          </a>
          <a href="#method" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white/90">
            How it works
          </a>
        </div>
      </div>
    </section>
  )
}
