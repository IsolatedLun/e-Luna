import ImageSlider from "./components/Interactibles/ImageSlider/ImageSlider";
import Home from "./components/Layout/Home/Home";
import Navbar from "./components/Layout/Navigation/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <div className="[ main-container ]">
        <Home />
      </div>
    </>
  )
}

export default App;
