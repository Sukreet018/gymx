import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Features from "../components/sections/Features";
import Gallery from "../components/sections/Gallery";
import Hero from "../components/sections/Hero";
// import Reviews from "../components/sections/Reviews";
import Trainers from "../components/sections/Trainers";

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Trainers />
        <Gallery />
        {/*<Reviews />*/}
      </main>

      <Footer />
    </>
  );
}

export default HomePage;