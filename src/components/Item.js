import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => (
  <div className="card item">
    <Link to={`/item/${item.id}`}>
      <img src={item.img} alt={item.title} className="item-img" />
      <div className="p-2">
        <h3>{item.title}</h3>
        <p>${item.price.toLocaleString('es-AR')}</p>
      </div>
    </Link>
  </div>
);

export default Item;
