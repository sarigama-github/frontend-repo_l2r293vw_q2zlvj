import { useState } from 'react'
import { Menu, X, Wallet, Sparkles } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-cyan-400 to-fuchsia-500 grid place-items-center shadow-lg shadow-cyan-500/20">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-white tracking-tight">OneRWA</p>
            <p className="text-[11px] text-cyan-200/80">Marketplace on OneChain</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-cyan-100/90 hover:text-white transition-colors">Features</a>
          <a href="#workflow" className="text-cyan-100/90 hover:text-white transition-colors">Workflow</a>
          <a href="#demo" className="text-cyan-100/90 hover:text-white transition-colors">Demo</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors border border-white/10">
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur-md p-4 space-y-3">
          <a href="#features" className="block text-cyan-100/90">Features</a>
          <a href="#workflow" className="block text-cyan-100/90">Workflow</a>
          <a href="#demo" className="block text-cyan-100/90">Demo</a>
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors border border-white/10">
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </button>
        </div>
      )}
    </header>
  )
}

export default Navbar
