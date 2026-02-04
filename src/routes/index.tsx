import { createFileRoute } from '@tanstack/react-router'
import {
  Contact,
  Footer,
  Header,
  Hero,
  Materials,
  Partners,
  Process,
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
        <Materials />
        <Timeline />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
