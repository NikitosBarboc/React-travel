import React from 'react';
import Button from '../Button';
import Paragraph from '../Paragraph';
import Title from '../Title';
import './products.css';

function ProductSection() {
  return (
    <section className="products">
      <div className="products-content content">
        <h2 className="product-subtitle">Our product</h2>
        <Title
          text="You tell us your stress,
          We make your diary"
          cls="products-title"
        />
        <Paragraph
          text="Everyone experiences it, and in different ways.
          Let Alivio guide you, in a personalized journal experience, to overcome your stress."
          cls="products-paragraph"
        />
        <Button
          cls="green-button products-button"
          text="Find Your Way"
        />
      </div>
      <div className="product-img" />
    </section>
  );
}

export default ProductSection;
