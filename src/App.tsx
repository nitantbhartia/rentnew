import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Properties } from './pages/Properties';
import { Applications } from './pages/Applications';
import { Screening } from './pages/Screening';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/screening" element={<Screening />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;