import { useEffect } from 'react';
import './App.css';
import GlobalStyle from './Globals/GlobalStyle';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact/:type' element={<Contacts />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
