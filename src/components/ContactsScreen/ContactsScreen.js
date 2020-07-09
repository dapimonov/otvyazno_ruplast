import React, { Component } from 'react';
import './ContactsScreen.scss';
import { ReactComponent as Pin } from '../../svg/pin.svg';
import { ReactComponent as Plane } from '../../svg/plane.svg';
import { ReactComponent as Laptop } from '../../svg/laptop.svg';
import { ReactComponent as Phone } from '../../svg/phone.svg';
import { ReactComponent as NHK } from '../../svg/nhk.svg';
import OrderForm from "../OrderForm/OrderForm";

class ContactsScreen extends Component {
  render() {
    return (
      <div className='contacts-screen'>
        <div className='content aligned-content'>
          <div className='text'>
            <h2>Контакты</h2>
            <hr className='smallHr'/>
            <p>
              Поставщик добавок Рупласт на территории РФ и СНГ — <br/>компания <strong>Новые химические компоненты</strong>
            </p>
            <div className='list'>
              <ul>
                <li><div className='circle'><Phone/></div><span className='circle-text'>8 (800) 505-21-47</span></li>
                <li><div className='circle'><Plane/></div><span className='circle-text'>info@chem.expert</span></li>
                <li><div className='circle'><Laptop/></div><span className='circle-text'>www.chem.expert</span></li>
                <li><div className='circle'><Pin/></div><span className='circle-text'>ООО «Новые химические компоненты»<br/> 630083, Россия, г. Новосибирск, ул. Большевистская, д. 92, оф. 6-1-18</span></li>
              </ul>
            </div>
            <NHK className='nhk'/>
          </div>
          <OrderForm name={'order-contacts'}/>
        </div>
      </div>
    )
  }
}

export default ContactsScreen;