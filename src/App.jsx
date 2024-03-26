import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import Layout from "./components/Layout/Layout"
import Men from "./pages/Men/Men"
import Women from "./pages/Women/Women"
import Accessories from "./pages/Accessories/Accessories"
import Jewelry from "./pages/Jewelry/Jewelry"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes >
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="accessories" element={<Accessories />} />
            <Route path="jewelry" element={<Jewelry />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}