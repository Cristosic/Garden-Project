import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from "./pages/MainPage/MainPage"; 
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage"; 
import AllSalesPage from "./pages/AllSalesPage/AllSalesPage"; 
import CartPage from "./pages/CartPage/CartPage"; 
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage"; 
import FavoriteItemPage from "./pages/FavoriteItemPage/FavoriteItemPage"; 
import SingleCategoryPage from "./pages/SingleCategoryPage/SingleCategoryPage"; 
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage"; 
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"; 

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/sales" element={<AllSalesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/favorites" element={<FavoriteItemPage />} />
        <Route path="/singleCategory" element={<SingleCategoryPage />} />
        <Route path="/singleProduct" element={<SingleProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}


export default App
