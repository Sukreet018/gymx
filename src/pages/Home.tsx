import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Contact from "../components/sections/Contact";
import Features from "../components/sections/Features";
import Gallery from "../components/sections/Gallery";
import Hero from "../components/sections/Hero";
import Reviews from "../components/sections/Reviews";
import Trainers from "../components/sections/Trainers";


function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Trainers />
        <Gallery />
        {/*<Pricing />*/}
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;