import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductById } from '../data/products';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductById(itemId).then(setItem);
  }, [itemId]);

  if (!item) return <p className="center">Cargando…</p>;

  return (
    <main className="container center">
      <div className="card" style={{ maxWidth:'340px' }}>
        <img src={item.img} alt={item.title}
             style={{ width:'100%', height:'240px', objectFit:'cover' }} />
        <div className="p-2">
          <h2>{item.title}</h2>
          <p>Precio: ${item.price.toLocaleString('es-AR')}</p>
          <Link to="/" className="btn">Volver</Link>
        </div>
      </div>
    </main>
  );
};

export default ItemDetailContainer;
