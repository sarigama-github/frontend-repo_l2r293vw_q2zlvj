import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Workflow />

      <section id="demo" className="relative py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-slate-200 p-8 bg-gradient-to-br from-slate-50 to-white">
            <h3 className="text-2xl font-bold">Demo</h3>
            <p className="mt-2 text-slate-600">Connect your OneWallet on testnet and explore the marketplace in the full app. This landing page showcases the concept and flow.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/test" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 transition-colors">Check Backend Status</a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 ring-1 ring-slate-900/10 hover:bg-slate-50 transition-colors">Back to Features</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
