import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle, Code, Heart, Rocket, Sparkles, Trophy, Zap } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Navbar */}
      <div className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-200 sticky top-0 z-50 px-4 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-lg border border-base-200"
            >
              <li>
                <a className="rounded-lg">About</a>
              </li>
              <li>
                <a className="rounded-lg">Timeline</a>
              </li>
              <li>
                <a className="rounded-lg">Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost gap-2 text-xl font-bold tracking-tight hover:bg-transparent hover:text-primary transition-colors">
            <Rocket className="w-5 h-5 text-primary" />
            Kian
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1">
            <li>
              <a className="rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a className="rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                Timeline
              </a>
            </li>
            <li>
              <a className="rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary btn-sm rounded-full px-6 shadow-md hover:shadow-lg transition-shadow">
            Get Started
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-[70vh] bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--p)/0.1),transparent_50%)]" />
        <div className="hero-content text-center py-20 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              Welcome to the future
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Build Something{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-base-content/70 max-w-2xl mx-auto leading-relaxed">
              Building the future, one milestone at a time. Experience innovation through our
              journey of excellence and continuous growth.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="btn btn-primary btn-lg rounded-full px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 gap-2">
                <Sparkles className="w-5 h-5" />
                Explore Journey
              </button>
              <button className="btn btn-ghost btn-lg rounded-full px-8 border-2 border-base-content/20 hover:border-primary hover:text-primary transition-all duration-300 gap-2">
                <Code className="w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-base-200/30 py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Journey So Far</h2>
            <p className="text-lg text-base-content/60 max-w-xl mx-auto">
              Key milestones that shaped our path to success
            </p>
          </div>

          <ul className="timeline timeline-vertical timeline-snap-icon max-w-5xl mx-auto">
            <li className="items-center min-h-[200px]">
              <div className="timeline-start text-end max-w-xs">
                <time className="font-mono text-xs text-primary font-semibold tracking-wider">
                  JANUARY 2024
                </time>
                <div className="text-xl font-bold mt-1 mb-2">Project Inception</div>
                <div className="text-base-content/60 text-sm leading-relaxed">
                  The idea was born. We gathered a talented team and set ambitious goals to create
                  something extraordinary.
                </div>
              </div>
              <div className="timeline-middle">
                <div className="bg-primary text-primary-content rounded-full p-3 shadow-lg ring-4 ring-primary/20">
                  <Rocket className="w-5 h-5" />
                </div>
              </div>
              <div className="timeline-end">
                <div className="card bg-base-100 shadow-lg overflow-hidden w-72 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                      alt="Team collaboration"
                      className="w-full h-44 object-cover"
                    />
                  </figure>
                </div>
              </div>
              <hr className="bg-primary/40" />
            </li>

            <li className="items-center min-h-[200px]">
              <hr className="bg-primary/40" />
              <div className="timeline-start">
                <div className="card bg-base-100 shadow-lg overflow-hidden w-72 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
                      alt="Development in progress"
                      className="w-full h-44 object-cover"
                    />
                  </figure>
                </div>
              </div>
              <div className="timeline-middle">
                <div className="bg-primary text-primary-content rounded-full p-3 shadow-lg ring-4 ring-primary/20">
                  <Code className="w-5 h-5" />
                </div>
              </div>
              <div className="timeline-end max-w-xs">
                <time className="font-mono text-xs text-primary font-semibold tracking-wider">
                  MARCH 2024
                </time>
                <div className="text-xl font-bold mt-1 mb-2">Development Phase</div>
                <div className="text-base-content/60 text-sm leading-relaxed">
                  Rapid prototyping and iterative development. Our team worked tirelessly to bring
                  the vision to life with cutting-edge technology.
                </div>
              </div>
              <hr className="bg-primary/40" />
            </li>

            <li className="items-center min-h-[200px]">
              <hr className="bg-primary/40" />
              <div className="timeline-start text-end max-w-xs">
                <time className="font-mono text-xs text-primary font-semibold tracking-wider">
                  JUNE 2024
                </time>
                <div className="text-xl font-bold mt-1 mb-2">Beta Launch</div>
                <div className="text-base-content/60 text-sm leading-relaxed">
                  Successfully launched our beta version to early adopters. Received overwhelming
                  positive feedback and valuable insights.
                </div>
              </div>
              <div className="timeline-middle">
                <div className="bg-primary text-primary-content rounded-full p-3 shadow-lg ring-4 ring-primary/20">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <div className="timeline-end">
                <div className="card bg-base-100 shadow-lg overflow-hidden w-72 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
                      alt="Product launch"
                      className="w-full h-44 object-cover"
                    />
                  </figure>
                </div>
              </div>
              <hr className="bg-primary/40" />
            </li>

            <li className="items-center min-h-[200px]">
              <hr className="bg-primary/40" />
              <div className="timeline-start">
                <div className="card bg-base-100 shadow-lg overflow-hidden w-72 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <figure>
                    <video
                      className="w-full h-44 object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
                    >
                      <source
                        src="https://cdn.pixabay.com/video/2022/12/11/143200-779636292_large.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </figure>
                </div>
              </div>
              <div className="timeline-middle">
                <div className="bg-primary text-primary-content rounded-full p-3 shadow-lg ring-4 ring-primary/20">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
              <div className="timeline-end max-w-xs">
                <time className="font-mono text-xs text-primary font-semibold tracking-wider">
                  SEPTEMBER 2024
                </time>
                <div className="text-xl font-bold mt-1 mb-2">Official Release</div>
                <div className="text-base-content/60 text-sm leading-relaxed">
                  Launched version 1.0 to the public. Achieved 10,000+ users in the first month and
                  maintained 99.9% uptime.
                </div>
              </div>
              <hr className="bg-primary/40" />
            </li>

            <li className="items-center min-h-[200px]">
              <hr className="bg-primary/40" />
              <div className="timeline-start text-end max-w-xs">
                <time className="font-mono text-xs text-primary font-semibold tracking-wider">
                  DECEMBER 2024
                </time>
                <div className="text-xl font-bold mt-1 mb-2">Major Update</div>
                <div className="text-base-content/60 text-sm leading-relaxed">
                  Released version 2.0 with AI-powered features, enhanced performance, and a
                  completely redesigned user interface.
                </div>
              </div>
              <div className="timeline-middle">
                <div className="bg-primary text-primary-content rounded-full p-3 shadow-lg ring-4 ring-primary/20">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
              <div className="timeline-end">
                <div className="card bg-base-100 shadow-lg overflow-hidden w-72 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"
                      alt="AI technology"
                      className="w-full h-44 object-cover"
                    />
                  </figure>
                </div>
              </div>
              <hr className="bg-primary/40" />
            </li>

            <li className="items-center min-h-[200px]">
              <hr className="bg-primary/40" />
              <div className="timeline-start">
                <div className="card bg-base-100 shadow-lg overflow-hidden w-72 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80"
                      alt="Award ceremony"
                      className="w-full h-44 object-cover"
                    />
                  </figure>
                </div>
              </div>
              <div className="timeline-middle">
                <div className="bg-primary text-primary-content rounded-full p-3 shadow-lg ring-4 ring-primary/20">
                  <Trophy className="w-5 h-5" />
                </div>
              </div>
              <div className="timeline-end max-w-xs">
                <time className="font-mono text-xs text-primary font-semibold tracking-wider">
                  FEBRUARY 2025
                </time>
                <div className="text-xl font-bold mt-1 mb-2">Industry Recognition</div>
                <div className="text-base-content/60 text-sm leading-relaxed">
                  Won "Best Innovation Award" and reached 100,000+ active users. Featured in major
                  tech publications worldwide.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center bg-base-200 text-base-content p-10">
        <aside>
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">Kian</span>
          </div>
          <p className="text-base-content/60">
            Building the future, one milestone at a time.
          </p>
          <p className="text-base-content/40 text-sm mt-4">
            Made with <Heart className="w-4 h-4 inline text-error" /> in 2025
          </p>
        </aside>
      </footer>
    </div>
  )
}
