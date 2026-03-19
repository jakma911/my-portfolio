import Herosection from "./components/herosection";
import Navbar from "./components/navbar";
import Aboutme from "./components/aboutme";
import Skills from "./skill";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Herosection />
      <Aboutme />
      <Skills /> 
    </div>
  );
}

export default App;