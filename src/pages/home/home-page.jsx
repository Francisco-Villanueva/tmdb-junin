import { ProductList, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { AboutUsPage } from "./pages";
import { ProductDetailPage } from "../products";
export function HomePage() {
  return (
    <div className=" h-screen  flex flex-col  ">
      <Navbar />
      <div className="mx-auto  flex-grow   md:w-[80vw] overflow-auto   ">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
      </div>
    </div>
  );
}
