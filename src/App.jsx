import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='pt-20'>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

