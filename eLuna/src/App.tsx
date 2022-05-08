import ImageSlider from "./components/Interactibles/ImageSlider/ImageSlider";
import Home from "./components/Layout/Home/Home";
import Navbar from "./components/Layout/Navigation/Navbar";
import ItemView from "./components/Views/ItemView";

function App() {

  return (
    <>
      <Navbar />
      <div className="[ main-container ]">
        <Home />
        <ItemView />
      </div>
    </>
  )
}

export default App;
