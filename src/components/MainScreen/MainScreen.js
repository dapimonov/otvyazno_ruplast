import React, { Component } from 'react';
import { ReactComponent as Arrow } from '../../svg/arrow.svg';
import './MainScreen.scss';

class MainScreen extends Component {
  render() {
    return (
      <div className='main-screen'>
        <div className='content aligned-content'>
          <div className='text'>
            <h1>Концентрированные<br/>добавки для бетона</h1>
            <hr className='smallHr'/>
            <p>
              Низкий расход, длительный срок хранения при любой<br/>температуре, доставка в любую точку России и СНГ от 25 кг
            </p>
            <button className='black-button order-button'>Заказать бесплатный образец</button>
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
          </div>
        </div>
        <div className='blue'/>
      </div>
    )
  }
}

export default MainScreen;