import Hero from './components/Hero'
import LogoCloud from './components/LogoCloud'
import ValueProps from './components/ValueProps'
import Audiences from './components/Audiences'
import Services from './components/Services'
import Cases from './components/Cases'
import Process from './components/Process'
import About from './components/About'
import Insights from './components/Insights'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoCloud />
      <ValueProps />
      <Audiences />
      <Services />
      <Cases />
      <Process />
      <About />
      <Insights />
      <ContactForm />
      <Footer />
    </main>
  )
}
