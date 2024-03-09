import React from "react";

interface BlockProps {
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  knockoff: number;
}

const Block = ({
  imageSrc,
  title,
  description,
  price,
  knockoff,
}: BlockProps) => {
  return (
    <div className="block-container">
      <img src={imageSrc} alt="Square Image" className="square-image" />

      <div className="info-container">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>

        <div className="price-container">
          <p className="price">${price}</p>
          <p className="knockoff">${knockoff}</p>
        </div>

        <button className="add-button">Add</button>
      </div>
    </div>
  );
};

export default Block;
