import { createFileRoute } from '@tanstack/react-router'
import {
  CTABand,
  Footer,
  Header,
  Hero,
  Markets,
  Materials,
  Process,
  SustainabilityBand,
  Testimonials,
  Timeline,
} from '../components'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Process />
        <Markets />
        <Materials />
        <SustainabilityBand />
        <Timeline />
        <Testimonials />
        <CTABand />
      </main>
      <Footer />
    </div>
  )
}
