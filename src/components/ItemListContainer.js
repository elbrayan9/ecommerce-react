import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../data/products';
import Item from './Item';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then(data =>
      setItems(categoryId ? data.filter(p => p.category === categoryId) : data)
    );
  }, [categoryId]);

  return (
    <main className="container">
      <h2 className="my-2">{greeting}</h2>
      <section className="items-grid">
        {items.map(i => <Item key={i.id} item={i} />)}
      </section>
    </main>
  );
};

export default ItemListContainer;
