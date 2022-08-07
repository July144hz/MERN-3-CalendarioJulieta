import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";

import MyProvider from './context/MyProvider'

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
