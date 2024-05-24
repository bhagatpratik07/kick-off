import { Features } from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="bg-black text-white">
        <Hero />
        <Features />
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
