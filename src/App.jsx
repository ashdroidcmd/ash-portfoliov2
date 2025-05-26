import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Analytics />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
