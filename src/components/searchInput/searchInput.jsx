import { Component } from 'react';

import './searchInput.scss';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onChangeInput = (e) => {
    this.setState({
      term: e.target.value
    });
    this.props.onChangeTerm(e.target.value);
  };

  render() {
    const { term } = this.state;
    return (
      <input
        type="text"
        name=""
        id=""
        placeholder="Найти сотрудника"
        className="search__input input txt20"
        value={term}
        onChange={(e) => this.onChangeInput(e)}
      />
    );
  }
}

export default SearchInput;
