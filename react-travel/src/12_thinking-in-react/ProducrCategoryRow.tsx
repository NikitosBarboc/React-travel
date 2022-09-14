/* eslint-disable react/prefer-stateless-function */
import React from 'react';

type productCategoryRowProps = {
  category: string
}

class ProductCategoryRow extends React.Component<productCategoryRowProps> {
  render() {
    const { category } = this.props;
    return (
      <tr>
        <th colSpan={2}>
          {category}
        </th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
