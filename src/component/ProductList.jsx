import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../CartSlice';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();

  const plants = [
    {
      category: "Aromatic Plants",
      items: [
        { name: "Lavender", image: "lavender.jpg", cost: "$15", description: "Calming scent." },
        { name: "Jasmine", image: "jasmine.jpg", cost: "$18", description: "Sweet fragrance." }
      ]
    },
    {
      category: "Medicinal Plants",
      items: [
        { name: "Aloe Vera", image: "aloe.jpg", cost: "$12", description: "Soothing gel." },
        { name: "Echinacea", image: "echinacea.jpg", cost: "$20", description: "Boosts immunity." }
      ]
    }
  ];

  return (
    <div className="product-grid">
      {plants.map(section => (
        <div key={section.category}>
          <h2>{section.category}</h2>
          <div className="cards">
            {section.items.map(plant => (
              <div className="plant-card" key={plant.name}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p><b>{plant.cost}</b></p>
                <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;