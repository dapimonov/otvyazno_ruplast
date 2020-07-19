import React, { Component } from 'react';
import { ReactComponent as Arrow } from '../../svg/arrow.svg';
import './MainScreen.scss';
import MediaQuery from "react-responsive";

class MainScreen extends Component {
  render() {
    return (
      <div className='main-screen'>
        <div className='content aligned-content'>
          <div className='text'>
            <h1>Концентрированные добавки для бетона</h1>
            <hr className='smallHr'/>
            <p>
              Низкий расход, длительный срок хранения при любой температуре, доставка в любую точку России и СНГ от 25 кг
            </p>
            <MediaQuery minWidth={426}>
              <button className='black-button order-button'>Заказать бесплатный образец</button>
            </MediaQuery>
          </div>
          <div className='picture'>
            <div className='list'>
              <ul>
                <li><Arrow/><span>Для ЖБИ</span></li>
                <li><Arrow/><span>Для товарного бетона</span></li>
                <li><Arrow/><span>Для вибропресса</span></li>
                <li><Arrow/><span>Для вибролитья</span></li>
                <li><Arrow/><span>Для наливных полов</span></li>
              </ul>
            </div>
            <MediaQuery maxWidth={425}>
              <button className='black-button order-button'>Заказать бесплатный образец</button>
            </MediaQuery>
          </div>
        </div>
        <div className='blue'/>
      </div>
    )
  }
}

export default MainScreen;