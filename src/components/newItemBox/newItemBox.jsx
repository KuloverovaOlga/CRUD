import { Component } from 'react';

import './newItemBox.scss';

class NewItemBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    };
  }

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  clearForm = () => {
    this.setState({
      name: '',
      salary: ''
    });
  }

  render() {
    const { name, salary } = this.state;
    const { createNewItem } = this.props;
    return (
      <section className="new-item-box">
        <div className="container">
          <div className="new-item-box__inner">
            <h3 className="new-item-box__title tl2">Добавьте нового сотрудника</h3>
            <form className="new-item-box__form">
              <input
                type="text"
                className="new-item-box__input input txt20"
                placeholder="Как его зовут?"
                value={name}
                name="name"
                onChange={(e) => this.onChangeInput(e)}
              />
              <input
                type="number"
                className="new-item-box__input input txt20"
                placeholder="З/П в $?"
                value={salary}
                name="salary"
                onChange={(e) => this.onChangeInput(e)}
              />
              <button
                type="submit"
                className="new-item-box__btn button txt20"
                onClick={(e) => {
                  e.preventDefault()
                  if(name.length > 3 && salary !== '') {
                    createNewItem(name, salary);
                    this.clearForm()
                  }
                }}
              >
                Добавить
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default NewItemBox;
