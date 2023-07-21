import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout.tsx'
import { Projects } from './pages/PageProjects/Projects.tsx'
import { ContactMe } from './pages/PageContactMe/index.tsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Route>
    </Routes>
  )
}
