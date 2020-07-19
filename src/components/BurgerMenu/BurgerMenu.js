import React, { Component } from 'react';
import { ReactComponent as Notebook } from '../../svg/notebook.svg';
import { ReactComponent as Grain } from '../../svg/grain.svg';
import { ReactComponent as Call } from '../../svg/call.svg';
import './BurgerMenu.scss';
import {ReactComponent as Question} from "../../svg/question.svg";

class BurgerMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };

    this.checkboxRef = React.createRef();
    this.containerRef = React.createRef();
    this.iconRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (event.target !== this.containerRef.current && event.target !== this.iconRef.current) {
      this.checkboxRef.current.checked = false;
    }
  };

  render() {
    return (
      <div className='burger-menu'>
        <input type='checkbox' id='checkbox' className='burger-checkbox' ref={this.checkboxRef}/>
        <label htmlFor='checkbox' className='burger-button'>
          <div className='burger-icon' ref={this.iconRef}></div>
        </label>
        <div className='burger-fade'></div>
        <div className='burger-container' ref={this.containerRef}>
          <ul className='burger-list'>
            <hr className='bigHr'/>
            <li className='burger-link'><Notebook width='20px' height='20px' viewBox="0 0 20 20"/><span><a className='link-button' href='#catalog'>Каталог</a></span></li>
            <li className='burger-link'><span><a className='link-button' href='#product1'>Для ЖБИ</a></span></li>
            <li className='burger-link'><span><a className='link-button' href='#product2'>Для товарного бетона</a></span></li>
            <li className='burger-link' ><span><a className='link-button' href='#product3'>Для вибропресса</a></span></li>
            <li className='burger-link'><span><a className='link-button' href='#product4'>Для вибролитья</a></span></li>
            <li className='burger-link'><span><a className='link-button' href='#product5'>Пигменты для бетона</a></span></li>
            <li className='burger-link'><span><a className='link-button' href='#product6'>Для наливных полов</a></span></li>
            <li className='burger-link'><span><a className='link-button' href='#product7'>Для пенобетона</a></span></li>
            <hr className='bigHr'/>
            <li className='burger-link'><Grain width='20px' height='20px'/><span><a className='link-button' href='#about'>О добавках Рупласт</a></span></li>
            <hr className='bigHr'/>
            <li className='burger-link'><Call width='20px' height='20px'/><span><a className='link-button' href='#contacts'>Контакты</a></span></li>
            <hr className='bigHr'/>
          </ul>
          <div className='bottom-buttons'>
            <a className='link-button question-button' href='#question'><Question className='question-icon' /><span>Задать вопрос</span></a>
            <button className='black-button order-button'>Заказать образец</button>
          </div>
        </div>
      </div>
    )
  }
}

export default BurgerMenu;