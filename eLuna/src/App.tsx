import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Views/HomeView/Home/Home";
import Navbar from "./components/Layout/Navigation/Navbar";
import ProductView from "./components/Views/ProductView/ProductView";
import CartView from "./components/Views/CartView/CartView";
import SellerView from "./components/Views/SellerView/SellerView";
import SearchView from "./components/Views/SearchView/SearchView";

function App() {

  return (
    <Router>
      <Navbar />
      <div className="[ main-container ]">
        
        <Routes>
          <Route path="/" element={<>
            <Home />
          </>} />

          <Route path="/cart" element={<>
            <CartView />
          </>} />

          <Route path="/search" element={<>
            <SearchView />
          </>} />

          <Route path="/seller/*" element={<>
            <SellerView />
          </>} />

          <Route path="/product/:id/:name" element={
            <ProductView 
            actual_price={9000} 
            discount_pct={0.49}
            name='Call of duty 2022'  
            type_path="electronics-storage-ssd"
            id={0}
            product_type='Game'
            description=""
            thumbnail=""
            reviews={[]}
            images={['']}
            tags={[]}
            seller={{ id: 1, username: 'lol', is_verified: true }} 
            rating={{
              _1_stars: 1,
              _2_stars: 7,
              _3_stars: 4,
              _4_stars: 2,
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
