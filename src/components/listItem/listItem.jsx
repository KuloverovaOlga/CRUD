import { Component } from 'react';

import './listItem.scss';

import cookie from '../../resources/img/cookie.svg';
import trash from '../../resources/img/trash.svg';
import star from '../../resources/img/star.svg';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, salary, increase, bonus, deleteItem, toggleProp, onKeyDown, onChangeSalary } = this.props;

    let classNames = ' list-box__item ';

    classNames += increase ? ' list-box__item--increase ' : null;
    classNames += bonus ? ' list-box__item--cookie ' : null;

    return (
      <li className={classNames}>
        <p
          className="list-box__item-name txt20"
          tabIndex={0}
          data-prop="increase"
          onClick={toggleProp}
          onKeyDown={onKeyDown}
        >
          {name}
        </p>
        <input type="text" className="list-box__item-input txt20" value={salary} onChange={onChangeSalary}/>
        <div className="list-box__item-btn-box">
          <div className="list-box__item-btn list-box__item-btn--increase">
            <div className="list-box__item-svg-box">
              <img src={star} alt="" />
            </div>
          </div>
          <button
            type="button"
            className="list-box__item-btn list-box__item-btn--cookie"
            data-prop="bonus"
            onClick={toggleProp}
          >
            <div className="list-box__item-svg-box">
              <img src={cookie} alt="" />
            </div>
          </button>
          <button type="button" className="list-box__item-btn list-box__item-btn--trash" onClick={deleteItem}>
            <div className="list-box__item-svg-box">
              <img src={trash} alt="" />
            </div>
          </button>
        </div>
      </li>
    );
  }
}

export default ListItem;
