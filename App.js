import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Hola, Bienvenido/a!" />
    </>
  );
}

export default App;