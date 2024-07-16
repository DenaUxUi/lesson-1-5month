import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/style.css';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
