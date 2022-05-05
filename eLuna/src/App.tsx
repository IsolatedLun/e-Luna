import ImageSlider from "./components/Interactibles/ImageSlider/ImageSlider";
import Navbar from "./components/Layout/Navigation/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar />
      <ImageSlider imgUrls={[
        'https://www.familyzone.com/hubfs/Minecraft.jpg',
        'https://www.minecraft.net/content/dam/games/minecraft/marketplace/updates-catspandas_latest.jpg'
        ]} alt='shit' />
    </div>
  )
}

export default App;
