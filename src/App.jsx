import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'

// Case-study pages are split out — most visitors never open one.
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'))

function RouteFallback() {
  return (
    <div className="grid min-h-[60vh] place-items-center" role="status" aria-label="Loading">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-brand-600" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route
            path="/"
            element={
              <main id="main">
                <Home />
              </main>
            }
          />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route
            path="*"
            element={
              <main id="main" className="grid min-h-[70vh] place-items-center px-6 text-center">
                <div>
                  <h1 className="text-4xl font-black">404</h1>
                  <p className="mt-3 text-slate-600 dark:text-slate-400">
                    This page doesn&apos;t exist.
                  </p>
                  <a href="/" className="btn-primary mt-8">
                    Back to portfolio
                  </a>
                </div>
              </main>
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}
