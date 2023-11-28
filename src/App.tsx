import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import { Navbar } from "./components/Navbar";
import { ProductSlagPage } from "./pages/ProductSlugPage";
import { ErrorPage } from "./pages/ErrorPage";
import { LoginPage } from "./pages/LoginPage";
import { UserContextProvider } from "./contexts/UserContext";
import { CartContextsProvider } from "./contexts/CartContexts";
import { CartPage } from "./pages/CartPage";

function App() {
  return (
    <>
      <CartContextsProvider>
        <UserContextProvider>
          <header>
            <Navbar />
          </header>
          <div className=" p-5 max-w-5xl  m-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/product/:slug" element={<ProductSlagPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </UserContextProvider>
      </CartContextsProvider>
    </>
  );
}
export default App;
