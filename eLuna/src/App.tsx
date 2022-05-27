import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Views/HomeView/Home/Home";
import Navbar from "./components/Layout/Navigation/Navbar";
import ProductView from "./components/Views/ProductView/ProductView";
import CartView from "./components/Views/CartView/CartView";
import SellerView from "./components/Views/SellerView/SellerView";
import SearchView from "./components/Views/SearchView/SearchView";
import PageNotFound from "./components/Layout/PageNotFound/PageNotFound";

function App() {

  return (
    <Router>
      <Navbar />
      <div className="[ main-container ]">
        
        <Routes>
          <Route path="/" element={<>
            <Home />
          </>} />

          <Route path="/product/:id/:name" element={<>
            <ProductView />
          </>} />

          <Route path="/cart" element={<>
            <CartView />
          </>} />

          <Route path="/search" element={<>
            <SearchView />
          </>} />

          <Route path="/seller/:id/:name/*" element={<>
            <SellerView />
          </>} />

          <Route path="*" element={
            <PageNotFound />
          } />
        </Routes>

      </div>
    </Router>
  )
}

export default App;
