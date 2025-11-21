import Spline from '@splinetool/react-spline'
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-slate-950/70"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-black/5 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            Built on OneChain Testnet
          </div>

          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            OneRWA Marketplace
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-700">
            A decentralized marketplace for tokenized real-world assets with fractional ownership. Fast, low-cost, and purpose-built for compliance on OneChain.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#demo" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 transition-colors">
              Explore Marketplace
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 ring-1 ring-slate-900/10 hover:bg-slate-50 transition-colors">
              See Features
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-slate-700">
            <div className="rounded-xl bg-white/80 backdrop-blur p-4 ring-1 ring-black/5">
              <p className="font-semibold">Low Fees</p>
              <p className="text-slate-600">~0.01 OCT/tx</p>
            </div>
            <div className="rounded-xl bg-white/80 backdrop-blur p-4 ring-1 ring-black/5">
              <p className="font-semibold">Fast Finality</p>
              <p className="text-slate-600">3-5s</p>
            </div>
            <div className="rounded-xl bg-white/80 backdrop-blur p-4 ring-1 ring-black/5">
              <p className="font-semibold">Built-in KYC</p>
              <p className="text-slate-600">Compliance-ready</p>
            </div>
            <div className="rounded-xl bg-white/80 backdrop-blur p-4 ring-1 ring-black/5">
              <p className="font-semibold">Fractional Shares</p>
              <p className="text-slate-600">10k+ shares</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
