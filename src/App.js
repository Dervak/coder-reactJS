import { Routes, Route, BrowserRouter } from "react-router-dom"
import Nav from './components/Nav'
import Page404 from "./components/Page404"
import ItemListContainer from './components/ItemListContainer'
import StoresMain from "./components/sections/StoresMain"
import ProductsMain from "./components/sections/ProductsMain"
import Main from './components/sections/Main'
import './App.css';
import { CartProvider } from "./components/CartProvider"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="dark:bg-[#282828] transition-all duration-500">
          <Nav />
          <section className="flex flex-col items-center justify-center min-h-screen">
            <ItemListContainer greetings="Marcos" />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/coder-reactJS" element={<Main />} />
              <Route path="/:category" element={<StoresMain />} />
              <Route path="/:category/:store" element={<ProductsMain />} />
              <Route path="/*" element={<Page404 />} />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
