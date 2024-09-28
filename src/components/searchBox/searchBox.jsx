import { Component } from 'react';

import SearchInput from '../searchInput/searchInput';
import SearchFilters from '../searchFilters/searchFilters';

import './searchBox.scss';

class SearchBox extends Component {
  render() {
    const { onChangeTerm, onChangeFilter, filter} = this.props;

    return (
      <section className="search-box">
        <div className="container">
          <div className="search-box__inner">
            <SearchInput onChangeTerm={onChangeTerm} />
            <SearchFilters onChangeFilter={onChangeFilter}filter={filter} />
          </div>
        </div>
      </section>
    );
  }
}

export default SearchBox;
