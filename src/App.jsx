import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  HomePage,
  RegisterPage,
  LoginPage,
  ProductPage,
  UserPage,
  NotFoundPage,
} from "./pages";
import { MainProvider } from "./components";

function App() {
  return (
    <main className="bg-[#f1f1f1] min-h-screen  ">
      <MainProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home/*" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductPage />} />

          <Route path="/users" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainProvider>
    </main>
  );
}

export default App;
