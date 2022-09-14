/* eslint-disable react/prefer-stateless-function */
import React, { ReactNode } from 'react';
import ProductCategoryRow from './ProducrCategoryRow';
import ProductRow from './ProductRow';

type productTableProps = {
  products: {
    category: string,
    price: string,
    stocked: boolean,
    name: string
  }[],
  filterText: string,
  inStockOnly: Boolean
}

class ProductTable extends React.Component<productTableProps> {
  render() {
    // eslint-disable-next-line no-undef
    const rows: Array<JSX.Element> = [];
    let lastCategory: string | null = null;
    const { products } = this.props;
    const { filterText, inStockOnly } = this.props;
    products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />,
        );
      }
      rows.push(<ProductRow
        product={product}
        key={product.name}
      />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows as ReactNode}</tbody>
      </table>
    );
  }
}

export default ProductTable;
