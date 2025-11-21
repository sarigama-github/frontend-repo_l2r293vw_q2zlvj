function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="text-white font-semibold">OneRWA</h4>
          <p className="mt-2 text-slate-400 text-sm">Marketplace for tokenized real-world assets on OneChain testnet.</p>
        </div>
        <div>
          <h5 className="text-white font-semibold">Docs</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-white" href="#features">Features</a></li>
            <li><a className="hover:text-white" href="#workflow">Workflow</a></li>
            <li><a className="hover:text-white" href="#demo">Demo</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold">OneChain</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-white" href="https://docs.onechain.network" target="_blank" rel="noreferrer">Docs</a></li>
            <li><a className="hover:text-white" href="https://onescan.cc/testnet/home" target="_blank" rel="noreferrer">Explorer</a></li>
            <li><a className="hover:text-white" href="https://faucet-testnet.onelabs.cc" target="_blank" rel="noreferrer">Faucet</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold">Legal</h5>
          <p className="mt-3 text-slate-400 text-xs">For demo and educational purposes only. Not audited. Do not use with real funds.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-slate-400">MIT © Contributors</div>
      </div>
    </footer>
  )
}

export default Footer
