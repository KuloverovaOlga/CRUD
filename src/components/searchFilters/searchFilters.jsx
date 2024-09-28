import { Component } from 'react';

import './searchFilters.scss';

class SearchFilters extends Component {
  btnsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'increase', label: ' На повышение' },
    { name: 'moreThen1000', label: 'Зп больше 1000$' }
  ];

  render() {
    const { filter, onChangeFilter } = this.props;

    const elements = this.btnsData.map(({ name, label }) => {
      const active = filter === name;
      const activeClass = active ? 'isActive' : '';
      const btnClass = `search__btn button txt20 ${activeClass}`;
      return (
        <button name={name} className={btnClass} key={name} onClick={() => onChangeFilter(name)}>
          {label}
        </button>
      );
    });

    return <div className="search__btn-box">{elements}</div>;
  }
}

export default SearchFilters;
