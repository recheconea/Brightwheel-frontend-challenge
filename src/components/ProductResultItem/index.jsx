import React from 'react';
import ImagePlaceholder from '../../assets/images/image-placeholder.jpg';

const ProductResultItem = ({
  image, name, previewText, productCategory, onClick, starred,
}) => (
  <div className={`result-item result-item--product  ${starred ? 'starred' : ''}`} onClick={onClick}>
    <div className="result-item--left">
      <img src={image || ImagePlaceholder} alt="product" />
    </div>
    <div className="result-item result-item--right">
      <div className="result-item--right-taxonomy">{productCategory}</div>
      <div className="result-item--right-name">{name}</div>
      <div className="result-item--right-preview-text">{previewText}</div>
    </div>
  </div>
);

export default ProductResultItem;
