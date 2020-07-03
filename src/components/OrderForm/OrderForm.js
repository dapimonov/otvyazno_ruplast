import React, { Component } from 'react';
import './OrderForm.scss';
import FormField from "../FormField/FormField";

class OrderForm extends Component {
  render() {
    return (
      <div className='order-form'>
        <h4>Закажите бесплатные образцы</h4>
        <p className='we-offer-text'>Мы бесплатно предоставляем 300 граммов добавки для испытаний.<br/>Этого количества хватит для 300-500 кг бетонной смеси.</p>
        <div className='order-form-fields'>
          <FormField
            label={'Имя и отчество'}
            name={this.props.name}
            type={'text'}
            placeholder={'Иван Иванович'}
          />
          <FormField
            label={'Номер телефона'}
            name={this.props.name}
            type={'tel'}
            placeholder={'+7 (900) 000-00-00'}
          />
          <FormField
            label={'Электронная почта'}
            name={this.props.name}
            type={'email'}
            placeholder={'example@email.com '}
          />
          <div className='submit-wrapper'>
            <button className='black-button'>Заказать</button>
            <p className='politics-text'>Нажимая кнопку “Заказать”, я принимаю условия<br/><a href='#policy'>политики конфиденциальности.</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderForm;