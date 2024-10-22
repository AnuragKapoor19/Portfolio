import './App.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import MobileNav from './components/Mobile Nav/MobileNav';
import { useTheme } from './Context/ThemeContext';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Education/Education';
import Experience from './pages/Experience/Experience';
import Footer from './pages/Footer/Footer';
import Projects from './pages/Projects/Projects';
import Techstack from './pages/TechStack/Techstack';
import ScrollToTop from "react-scroll-to-top";
import { Toaster } from 'react-hot-toast';

function App() {
  const [theme] = useTheme()
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <div id={theme}>
        <MobileNav />
        <Layout />
        <About />
        <Education />
        <Techstack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop
        smooth
        style={{ border: "2px solid black", borderRadius: "50%" }} />
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path='/' element={<Layout />}></Route>
    //     <Route exact path='/' element={<About />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
