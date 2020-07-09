import React, { Component } from 'react';
import './FormScreen.scss';
import { ReactComponent as Truck } from '../../svg/truck.svg';
import { ReactComponent as Spoon } from '../../svg/spoon.svg';
import { ReactComponent as Grain } from '../../svg/grain.svg';
import { ReactComponent as Lorry } from '../../svg/lorry.svg';
import { ReactComponent as Support } from '../../svg/support.svg';
import { ReactComponent as Hands } from '../../svg/hands.svg';
import OrderForm from "../OrderForm/OrderForm";

class FormScreen extends Component {
  render() {
    return (
      <div className='form-screen'>
        <div className='content aligned-content'>
          <OrderForm name={'order-form'}/>
          <div className='list'>
            <ul>
              <li><div className='circle'><Truck/></div><span className='circle-text'>Подходит для крупных заводов и<br/>частного строительства</span></li>
              <li><div className='circle'><Spoon/></div><span className='circle-text'>Высокая концентрация действующего<br/>вещества обеспечивает низкий расход</span></li>
              <li><div className='circle'><Grain/></div><span className='circle-text'>Длительный срок хранения<br/>при любой температуре</span></li>
              <li><div className='circle'><Lorry/></div><span className='circle-text'>Оперативная доставка в любую<br/>точку РФ и СНГ от 25 кг</span></li>
              <li><div className='circle'><Support/></div><span className='circle-text'>Бесплатные консультации по<br/>использованию продукции</span></li>
              <li><div className='circle'><Hands/></div><span className='circle-text'>Программа лояльности</span></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default FormScreen;