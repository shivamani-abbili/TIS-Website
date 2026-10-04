import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import Facilities from "./components/Facilities";
import WhyTIS from "./components/WhyTIS";
import Activities from "./components/Activities";
import Testimonials from "./components/Testimonials";
import AdmissionsCTA from "./components/AdmissionsCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Academics />

        <Facilities />

        <WhyTIS />

        <Activities />

        <Testimonials />

        <AdmissionsCTA />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;