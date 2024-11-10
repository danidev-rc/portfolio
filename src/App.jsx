import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='pt-20'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
