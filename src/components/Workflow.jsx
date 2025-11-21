function Workflow() {
  return (
    <section id="workflow" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Workflow</h2>
          <p className="mt-3 text-slate-600">From deploy to invest in minutes on OneChain testnet.</p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 list-none counter-reset steps">
          {[ 
            ['Deploy Move package', 'one client publish --gas-budget 100000000'],
            ['Set env with Package ID', 'NEXT_PUBLIC_RWA_PACKAGE_ID=...'],
            ['Create Property NFT', 'create_property(...)'],
            ['Invest & Track', 'invest(...) → Investment NFT'],
          ].map(([title, subtitle], i) => (
            <li key={i} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-slate-900 text-white grid place-items-center font-semibold">
                {i+1}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{subtitle}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Workflow
