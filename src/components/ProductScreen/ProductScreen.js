import React, { Component } from 'react';
import './ProductScreen.scss';
import {ReactComponent as Download} from "../../svg/downloads.svg";

class ProductScreen extends Component {
  render() {
    return (
      <div className='product-screen'>
        <div className='content'>
          <div className='text'>
            <h3>Добавка для ЖБИ</h3>
            <hr className='smallHr'/>
            <h5>PC-1023</h5>
            <p>Высокоэффективный гиперпластификатор на основе поликарбоксилатов:</p>
            <ul>
              <li>снижает расход цемента и уменьшает себестоимость изделия;</li>
              <li>повышает марочность бетона и прочность изделия;</li>
              <li>улучшает показатели водонепроницаемости и морозостойкости;</li>
              <li>придаёт бетонам повышенную начальную прочность трое суток и конечную прочность 28 суток.</li>
            </ul>
            <p>Совместим с разными видами цемента, может применяться в рядовых бетонах и в сверхжестких смесях. Сертифицирован НИИЖБ в соответствии с ГОСТ 30459-2008 и ГОСТ 24211-2008.</p>
            <div className='buttons-wrapper'>
              <button className='black-button order-button'>Заказать бесплатный образец</button>
              <a className='link-button' href='#download'><Download className='download-icon' /><span>Скачать технический паспорт</span></a>
            </div>
          </div>
          <div className='blue-info'>
            <h6>Дозировка</h6>
            <p>0,10% - 0,14% сухого вещества к массе цемента.</p>
            <h6>Экономия цемента</h6>
            <p>25%-30% по сравнению с бездобавочным составом.</p>
          </div>
        </div>
        <div className='scroll-list'>
          ...
        </div>
      </div>
    )
  }
}

export default ProductScreen;