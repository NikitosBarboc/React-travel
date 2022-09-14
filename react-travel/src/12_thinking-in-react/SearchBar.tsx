/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { ChangeEvent } from 'react';

type searchBarProps = {
  filterText: string,
  inStockOnly: boolean,
  onFilterTextChange: (str: string) => void,
  onInStockChange: (boolean: boolean) => void
}

class SearchBar extends React.Component<searchBarProps> {
  constructor(props: searchBarProps) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e: ChangeEvent<HTMLInputElement>) {
    const { onFilterTextChange } = this.props;
    onFilterTextChange(e.target.value);
  }

  handleInStockChange(e: ChangeEvent<HTMLInputElement>) {
    const { onInStockChange } = this.props;
    onInStockChange(e.target.checked);
  }

  render(): React.ReactNode {
    const { filterText, inStockOnly } = this.props;
    return (
      <form>
        <input
          type="text"
          placeholder="search..."
          value={filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
export default SearchBar;
