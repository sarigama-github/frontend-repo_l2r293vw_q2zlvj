import { Shield, Wallet, Search, BarChart3, Sparkle, Zap } from 'lucide-react'

function Features() {
  const items = [
    { icon: Shield, title: 'Compliance-first', desc: 'OneChain-native compliance badges and verification.' },
    { icon: Wallet, title: 'OneWallet Support', desc: 'Connect and sign with OneWallet via Wallet Standard.' },
    { icon: Search, title: 'Smart Discovery', desc: 'Filter by asset type, location, APY, and price.' },
    { icon: BarChart3, title: 'Portfolio Analytics', desc: 'Track ROI, shares, and performance in real time.' },
    { icon: Zap, title: 'Instant Fractionalization', desc: 'Shares built into the PropertyNFT structure.' },
    { icon: Sparkle, title: 'Polished UI/UX', desc: 'Gradients, glass, and micro-interactions throughout.' },
  ]

  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Features</h2>
          <p className="mt-3 text-slate-600">Everything you need to launch a tokenized assets marketplace on OneChain testnet.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-cyan-400 to-fuchsia-500 grid place-items-center shadow-lg shadow-cyan-500/20">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
