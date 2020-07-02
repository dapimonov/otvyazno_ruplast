import React, { Component } from 'react';
import './OrderForm.scss';
import FormField from "../FormField/FormField";

class OrderForm extends Component {
  render() {
    return (
      <div className='order-form'>
        <FormField
          label={'Имя и отчество'}
          name={'order'}
          type={'text'}
          placeholder={'Иван Иванович'}
        />
        <FormField
          label={'Номер телефона'}
          name={'order'}
          type={'tel'}
          placeholder={'+7 (900) 000-00-00'}
        />
        <FormField
          label={'Электронная почта'}
          name={'order'}
          type={'email'}
          placeholder={'example@email.com '}
        />
        <div className='submit-wrapper'>
          <button className='black-button'>Заказать</button>
          <p className='politics-text'>Нажимая кнопку “Заказать”, я принимаю условия<br/><a href='#politics'>политики конфиденциальности.</a></p>
        </div>
      </div>
    )
  }
}

export default OrderForm;