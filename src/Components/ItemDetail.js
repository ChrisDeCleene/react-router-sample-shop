import React, {useState, useEffect} from 'react';
import './App.css';

function ItemDetail({match}) {

  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
    const item = await fetchItem.json();

    console.log(item);
    setItem(item);
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <h2>{`$${item.price}`}</h2>
    </div>
  );
}

export default ItemDetail;