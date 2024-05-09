import { Route, Routes } from "react-router-dom";
import  "./App.scss";
import MainPage from "./pages/MainPage/MainPage";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import AllSalesPage from "./pages/AllSalesPage/AllSalesPage";
import CartPage from "./pages/CartPage/CartPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import FavoriteItemPage from "./pages/FavoriteItemPage/FavoriteItemPage";
import SingleCategoryPage from "./pages/SingleCategoryPage/SingleCategoryPage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NavMenu from "./components/NavMenu/NavMenu";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <NavMenu/>
      <div className="container">
        {/* Коллеги внимательно это общий контейнер с размерами как и отступом по бокам  ТОЛЬКО для наших section и footer */}
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
        <Footer />
      </div>
    </>
  );
}

export default App;
