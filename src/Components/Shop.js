import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const items = await data.json();
    console.log(items);
    setItems(items);
  } 

  return (
    <div>
      <h1>Shop</h1>
      {items.map(item => (
        <div className='card' key={item.id}>
          <img className='card-image' src={item.image} alt={item.title} style={{ width: 100 }}/>
          <h1 className='card-title'>
            <Link to={`/shop/${item.id}`}>{item.title}</Link>
          </h1>
          <p className='card-description'>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Shop;
