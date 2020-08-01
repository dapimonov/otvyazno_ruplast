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
        <label htmlFor='checkbox' className='burger-button' ref={this.containerRef}>
          <div className='burger-icon' ref={this.iconRef}></div>
        </label>
        <div className='burger-fade'></div>
        <div className='burger-container' >
          <ul className='burger-list'>
            <hr className='bigHr'/>
            <li className='burger-link'><Notebook width='20px' height='20px' viewBox="0 0 20 20"/><span><a className='link-button' href='#catalog'>Каталог</a></span></li>
            <li className='burger-link'><span><a className='link-button' href='#product0' onClick={() => this.props.setProduct(0)}>Для ЖБИ</a></span></li>
            <li className='burger-link'><span><a className='link-button' href='#product1' onClick={() => this.props.setProduct(1)}>Для товарного бетона</a></span></li>
            <li className='burger-link' ><span><a className='link-button' href='#product2' onClick={() => this.props.setProduct(2)}>Для вибролитья</a></span></li>
            <li className='burger-link'><span><a className='link-button' href='#product3' onClick={() => this.props.setProduct(3)}>Для вибропресса</a></span></li>
            <li className='burger-link'><span><a className='link-button' href='#product4' onClick={() => this.props.setProduct(4)}>Пигменты для бетона</a></span></li>
            <li className='burger-link'><span><a className='link-button' href='#product5' onClick={() => this.props.setProduct(5)}>Для наливных полов</a></span></li>
            <li className='burger-link'><span><a className='link-button' href='#product6' onClick={() => this.props.setProduct(6)}>Для пенобетона</a></span></li>
            <hr className='bigHr'/>
            <li className='burger-link'><Grain width='20px' height='20px'/><span><a className='link-button' href='#about' onClick={this.props.scrollToAbout}>О добавках Рупласт</a></span></li>
            <hr className='bigHr'/>
            <li className='burger-link'><Call width='20px' height='20px'/><span><a className='link-button' href='#contacts' onClick={this.props.scrollToContacts}>Контакты</a></span></li>
            <hr className='bigHr'/>
          </ul>
          <div className='bottom-buttons'>
            <button className='link-button question-button' href='#question' onClick={this.props.openQuestion}><Question className='question-icon' /><span>Задать вопрос</span></button>
            <button className='black-button order-button' onClick={this.props.openOrder}>Заказать образец</button>
          </div>
        </div>
      </div>
    )
  }
}

export default BurgerMenu;