import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Projects from '../pages/Projects/Projects'
import ProjectDetails from '../pages/ProjectDetails/ProjectDetails'
import Skills from '../pages/Skills/Skills'
import Experience from '../pages/Experience/Experience'
import Recommendations from '../pages/Recommendations/Recommendations'
import Certifications from '../pages/Certifications/Certifications'
import Blogs from '../pages/Blogs/Blogs'
import Leadership from '../pages/Leadership/Leadership'
import CaseStudies from '../pages/CaseStudies/CaseStudies'
import Contact from '../pages/Contact/Contact'
import NotFound from '../pages/NotFound/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
        <Route path="skills" element={<Skills />} />
        <Route path="experience" element={<Experience />} />
        <Route path="recommendations" element={<Recommendations />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
