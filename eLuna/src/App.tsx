import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Layout/Home/Home";
import Navbar from "./components/Layout/Navigation/Navbar";
import ItemView from "./components/Views/ItemView";
import ProductView from "./components/Views/ProductView/ProductView";

function App() {

  return (
    <Router>
      <Navbar />
      <div className="[ main-container ]">
        
        <Routes>
          <Route path="/" element={<>
            <Home />
            <ItemView />
          </>} />

          <Route path="/product/:id/:name" element={
            <ProductView 
            price={{ actual_price: 9000, discount_pct: 0.5 }} 
            name='Call of duty 2022'  
            type_path="electronics-storage-ssd"
            id={0}
            type='Game'
            description=""
            reviews={[]}
            images={['']}
            tags={[]}
            seller={{ id: 1, username: 'lol' }} 
            product_rating={{
              _1_stars: 1,
              _2_stars: 0,
              _3_stars: 0,
              _4_stars: 0,
              _5_stars: 14,
              rating: 4
            }}/>
          } />
        </Routes>

      </div>
    </Router>
  )
}

export default App;
