const products = [
  { id: '1', title: 'Auriculares', price: 50000, category: 'electronica', img: 'https://img.freepik.com/foto-gratis/auriculares-audio-escuchar_1203-7566.jpg?t=st=1745012017~exp=1745015617~hmac=050f2c30d5abc8930bdf96f55d904935e78d6689dcc9b7c179dc1e334a3b51fe&w=740' },
  { id: '2', title: 'Remera Oversize', price: 35000, category: 'ropa', img: 'https://img.freepik.com/fotos-premium/retrato-hermosa-adolescente-pie-contra-pared_1048944-24678545.jpg?w=740' },
  { id: '3', title: 'El Principito', price: 20000, category: 'libros', img: 'https://img.freepik.com/vector-premium/pancarta-nino-zorro-cuento-hadas-libro-o-cuento-antes-dormir-personaje-su-amigo_118813-17095.jpg?w=740' },
];

export const getProducts = () =>
  new Promise(res => setTimeout(() => res(products), 800));

export const getProductById = id =>
  new Promise(res => setTimeout(() => res(products.find(p => p.id === id)), 800));
