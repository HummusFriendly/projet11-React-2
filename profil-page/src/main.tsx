import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import necessary routing components
import App from "./App"; // Import your main App component
import Header from "./components/Header"; // Import Header component
import './index.css'; // Your styles

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/user/:userId" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
