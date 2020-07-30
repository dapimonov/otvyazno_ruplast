import React, { Component } from 'react';
import './AboutScreen.scss';
import MediaQuery from "react-responsive";
import OrderForm from "../Forms/OrderForm";

class AboutScreen extends Component {
  render() {
    return (
      <div className='about-screen'>
        <MediaQuery maxWidth={425}>
          <OrderForm name={'order-form'}/>
        </MediaQuery>
        <div className='about-window'>
          <h3>О добавках Рупласт</h3>
          <MediaQuery maxWidth={425}>
            <hr className='smallHr'/>
          </MediaQuery>
          <p>
            Рупласт — это зарегистрированный российский торговый знак.
            Под маркой Рупласт на ведущих предприятиях Китая производят химические вещества, разработанные специально
            для применения с цементами Российского производства.<br/><br/>Все добавки Рупласт поставляются в виде сухого порошка
            <strong> с содержанием основного действующего вещества более 90%.</strong> Таким образом, затраты на
            транспортировку сокращаются в несколько раз, ведь обычная концентрация водных растворов добавок
            не превышает 20%. Добавка в сухом виде не теряет свойств в широком температурном диапазоне
            <strong> от -50°C до +40°C</strong> и может храниться <strong>до двух лет.</strong><br/><br/>Для применения сухие
            добавки Рупласт нужно растроврить в воде. Вы легко подготовите любое необходимое количество раствора с
            удобной концентрацией.<br/><br/>Мы доставляем добавки Рупласт <strong>от одного мешка 25 кг</strong> любой
            транспортной компаней до ближайшего к вам терминала.
          </p>
          <div className='button-wrapper'>
            <button className='black-button order-button' onClick={this.props.openOrder}>Заказать бесплатный образец</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutScreen;