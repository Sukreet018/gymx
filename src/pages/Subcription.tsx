import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Contact from "../components/sections/Contact";
import Pricing from "../components/sections/Pricing";

function Subscription() {
  return (
    <>
      <Navbar />
      <main>
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Subscription;
