import { Component } from 'react';

import './banner.scss';

class Banner extends Component {
  render() {
    return (
      <section className="banner _first">
        <div className="container">
          <div className="banner__inner">
            <h1 className="banner__title tl1">Учет сотрудников компании ООО 'Компания'</h1>
            <div className="banner__info-box">
              <p className="banner__info-text tl2">Общее число сотрудников: {this.props.allCount}</p>
              <p className="banner__info-text tl2">Премию получат: {this.props.bonusCount}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
