

import logoText from './assets/images/logo-text.png'
import bannerStack from './assets/images/banner-stack.png'

function App() {
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="mx-auto hidden max-w-7xl items-center justify-between px-6 py-4 lg:flex">
          <a href="#home">
            <img src={logoText} alt="Dev Stack" className="h-9 w-auto" />
          </a>

          
          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#home" className="hover:text-pink-500">Home</a>
            <a href="#technologies" className="hover:text-pink-500">Technologies</a>
            <a href="#projects" className="hover:text-pink-500">Projects</a>
            <a href="#about" className="hover:text-pink-500">About</a>
            <a href="#contact" className="hover:text-pink-500">Contact</a>
          </div>

          
          <div className="flex items-center gap-3">
            <button className="text-sm font-semibold text-gray-700 hover:text-pink-500">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center px-3 py-3 lg:hidden">
          <button
            type="button"
            aria-label="Open navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <a href="#home">
            <img src={logoText} alt="Dev Stack" className="h-6 w-auto sm:h-7" />
          </a>

          <div className="flex items-center justify-end gap-1.5 sm:gap-3">
            <button className="whitespace-nowrap text-xs font-semibold text-gray-700 hover:text-pink-500 sm:text-sm">
              Sign In
            </button>

            <button className="whitespace-nowrap rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-3 py-2 text-xs font-semibold text-white sm:px-5 sm:text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
          {/* Hero text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Build Your Next Project{' '}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                with the Right Stack
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
              Explore frontend, backend, database, and tooling options. Compare them side by side and build the stack that fits your next project.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#technologies"
                className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-pink-400 hover:text-pink-500"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={bannerStack}
              alt="A colorful illustration of a development technology stack"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
