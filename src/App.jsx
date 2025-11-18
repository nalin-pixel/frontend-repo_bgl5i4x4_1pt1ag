import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Method from './components/Method'
import Why from './components/Why'
import Tools from './components/Tools'
import CTA from './components/CTA'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-[#010407] text-[#EFF5FF]">
      <Navbar />
      <main>
        <Hero />
        <Method />
        <Why />
        <Tools />
        <CTA />
        <footer className="border-t border-white/10 bg-[#010407] py-10 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Irrelevant. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
