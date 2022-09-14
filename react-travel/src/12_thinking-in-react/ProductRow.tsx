/* eslint-disable react/prefer-stateless-function */
import React from 'react';

type productRowProps = {
  product: {
    category: string,
    price: string,
    stocked: boolean,
    name: string
  }
}

class ProductRow extends React.Component<productRowProps> {
  render(): React.ReactNode {
    const { product } = this.props;
    const name = product.stocked
      ? product.name
      : (
        <span style={{ color: 'red' }}>
          {product.name}
        </span>
      );
    return (
      <tr>
        <td>
          {name}
        </td>
        <td>
          {product.price}
        </td>
      </tr>
    );
  }
}

export default ProductRow;
