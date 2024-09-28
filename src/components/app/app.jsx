import { Component } from 'react';

import nextId from 'react-id-generator';

import Banner from '../banner/banner';
import SearchBox from '../searchBox/searchBox';
import ListBox from '../listBox/listBox';
import NewItemBox from '../newItemBox/newItemBox';

import './app.scss';

class App extends Component {
  state = {
    data: [
      { name: 'Olga. K', salary: 1000, increase: true, bonus: false, id: 1 },
      { name: 'Valerii. G', salary: 1300, increase: false, bonus: true, id: 2 },
      { name: 'Kira. I', salary: 800, increase: false, bonus: false, id: 3 }
    ],
    term: '',
    filter: 'all'
  };

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id)
    }));
  };

  toggleProp = (id, prop) => {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);
      const changeItem = { ...data[index], [prop]: !data[index][prop] };
      const newArr = data.map((item) => (item.id === id ? changeItem : item));
      return {
        data: newArr
      };
    });
  };

  onChangeSalary = (id, value) => {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);
      const changeItem = { ...data[index], salary: value };
      const newArr = data.map((item) => (item.id === id ? changeItem : item));
      return {
        data: newArr
      };
    });
  };

  createNewItem = (name, salary) => {
    this.setState(({ data }) => {
      const newItem = {
        name,
        salary,
        increase: false,
        bonus: false,
        id: nextId()
      };

      return {
        data: [...data, newItem]
      };
    });
  };

  searchData = (items, term) => {
    return items.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()));
  };

  onChangeTerm = (term) => {
    this.setState({ term });
  };

  filterData = (items, filter) => {
    switch (filter) {
      case 'increase':
        return items.filter((item) => item.increase);
      case 'moreThen1000':
        return items.filter((item) => item.salary >= 1000);
      default:
        return items;
    }
  };

  onChangeFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const allCount = data.length;
    const bonusCount = data.filter((item) => item.bonus).length;
    const visibleData = this.filterData(this.searchData(data, term), filter);
    return (
      <main className="main">
        <Banner allCount={allCount} bonusCount={bonusCount} />
        <SearchBox onChangeTerm={this.onChangeTerm} onChangeFilter={this.onChangeFilter} filter={filter}/>
        <ListBox
          data={visibleData}
          deleteItem={this.deleteItem}
          toggleProp={this.toggleProp}
          onChangeSalary={this.onChangeSalary}
        />
        <NewItemBox createNewItem={this.createNewItem} />
      </main>
    );
  }
}

export default App;
