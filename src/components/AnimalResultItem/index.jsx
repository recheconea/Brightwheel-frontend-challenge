import React from 'react';
import ImagePlaceholder from '../../assets/images/image-placeholder.jpg';

const AnimalResultItem = ({
  image, name, taxonomy, onClick, starred,
}) => (
  <div className={`result-item result-item--animal ${starred ? 'starred' : ''}`} onClick={onClick}>
    <div className="result-item--left">
      <img src={image || ImagePlaceholder} alt={name} />
    </div>
    <div className="result-item--right">
      <div className="result-item--right-name">{name}</div>
      <div className="result-item--right-scientific-name">{taxonomy && taxonomy.scientificName}</div>
    </div>
  </div>
);

export default AnimalResultItem;
