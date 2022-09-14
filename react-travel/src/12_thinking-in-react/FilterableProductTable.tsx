/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

type filterableProductTableProps = {
  products: {
    category: string,
    price: string,
    stocked: boolean,
    name: string
  }[]
}
type filterableProductTableState = {
  filterText: string,
  inStockOnly: boolean
}

class FilterableProductTable extends React.Component<filterableProductTableProps,
  filterableProductTableState> {
  constructor(props: filterableProductTableProps) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText: string) {
    this.setState({
      filterText,
    });
  }

  handleInStockChange(inStockOnly: boolean) {
    this.setState({
      inStockOnly,
    });
  }

  render() {
    const { filterText, inStockOnly } = this.state;
    const { products } = this.props;
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={Array.from(products)}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }
}
export default FilterableProductTable;
