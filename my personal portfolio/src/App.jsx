import Herosection from "./components/herosection";
import Navbar from "./components/navbar";
import Aboutme from "./components/aboutme";
import Skills from "./skill";
import Footer from "./components/footer";
import Project from "./project";
import Contact from "./components/contect";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Herosection />
      <Aboutme />
      <Skills /> 
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;