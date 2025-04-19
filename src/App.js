import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Catálogo" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<h2 className="center">Carrito (en construcción)</h2>} />
        <Route path="*" element={<h2 className="center">404 – Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
