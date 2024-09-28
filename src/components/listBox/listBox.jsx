import { Component } from 'react';

import ListItem from '../listItem/listItem';

import './listBox.scss';

class ListBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, deleteItem, toggleProp, onChangeSalary } = this.props;

    const elements = data.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <ListItem
          key={id}
          {...itemProps}
          deleteItem={() => deleteItem(id)}
          toggleProp={(e) => toggleProp(id, e.currentTarget.getAttribute('data-prop'))}
          onChangeSalary={(e) => onChangeSalary(id, e.target.value)}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              toggleProp(id, e.currentTarget.getAttribute('data-prop'));
            }}}
        />
      );
    });

    return (
      <section className="list-box">
        <div className="container">
          <ul className="list-box__list">{elements}</ul>
        </div>
      </section>
    );
  }
}

export default ListBox;
