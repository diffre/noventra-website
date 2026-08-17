import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import FlagshipProduct from './components/FlagshipProduct'
import Portfolio from './components/Portfolio'
import TechStack from './components/TechStack'
import WhyNoventra from './components/WhyNoventra'
import DemoBooking from './components/DemoBooking'
import FAQ from './components/FAQ'
import QuoteForm from './components/QuoteForm'
import Contact from './components/Contact'
import Insights from './components/Insights'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <FlagshipProduct />
      <Portfolio />
      <TechStack />
      <WhyNoventra />
      <DemoBooking />
      <FAQ />
      <QuoteForm />
      <Contact />
      <Insights />
      <Footer />
    </div>
  )
}
