import React from 'react';

const CompaniesResultItem = ({
  description, name, address, onClick, starred,
}) => (
  <div className={`result-item result-item--companies  ${starred ? 'starred' : ''}`} onClick={onClick}>
    <div className="result-item--left">
      <div className="result-item--left-address">
        <div className="address-line"><span>{address && address.address1}</span></div>
        <div className="address-line"><span>{address && address.address2}</span></div>
        <div className="address-line"><span>{`${address && address.city}, ${address && address.state}, ${address && address.postalCode}`}</span></div>
      </div>
    </div>
    <div className="result-item--right">
      <div className="result-item--right-name">{name}</div>
      <div className="result-item--right-description">{description}</div>
    </div>
  </div>
);

export default CompaniesResultItem;
