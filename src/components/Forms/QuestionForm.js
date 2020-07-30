import React, { Component } from 'react';
import './Forms.scss';
import FormField from "../FormField/FormField";

class QuestionForm extends Component {
  render() {
    return (
      <div className='user-form'>
        <h4>Задайте вопрос</h4>
        <p className='we-offer-text'>Менеджер свяжется с вами в течение часа в рабочее время.<br/>Вы можете позвонить нам по номеру <u>8 (800) 505-21-47</u>.</p>
        <div className='user-form-fields'>
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
            placeholder={'example@email.com'}
          />
          <FormField
            label={'Вопрос'}
            name={this.props.name}
            type={'textarea'}
            placeholder={'Задайте вопрос'}
          />
          <div className='submit-wrapper'>
            <button className='black-button'>Отправить</button>
            <p className='politics-text'>Нажимая кнопку “Отправить”, я принимаю условия<br/><a href='#policy'>политики конфиденциальности.</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionForm;