import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { ReactComponent as Logo } from '../../svg/logo.svg';
import { ReactComponent as Triangle } from '../../svg/triangle.svg';
import { ReactComponent as Question } from '../../svg/question.svg';
import './Header.scss';
import BurgerMenu from "../BurgerMenu/BurgerMenu";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: false,
    };

    this.dropdownRef = React.createRef();
  }

  enterDropdown = () => {
    this.setState({
      ...this.state,
      dropdown: true,
    });
  };

  leaveDropdown = () => {
    this.setState({
      ...this.state,
      dropdown: false,
    });
  };

  render() {
    return (
      <div className='header-component'>
        <div className='header-wrapper'>
          <header className='header-bar aligned-content'>
            <Logo className='logo' />
            <MediaQuery minWidth={1024}>
              <nav>
                <a className='link-button' href='#catalog' onMouseEnter={this.enterDropdown} onMouseLeave={this.leaveDropdown} ref={this.dropdownRef}><Triangle className='triangle-icon' />Каталог</a>
                <a className='link-button' href='#about'>О&nbsp;добавках Рупласт</a>
                <a className='link-button' href='#contacts'>Контакты</a>
                <a className='link-button question-button' href='#question'><Question className='question-icon' /><span>Задать вопрос</span></a>
                <button className='black-button order-button'>Заказать образец</button>
              </nav>
            </MediaQuery>
            <MediaQuery maxWidth={1023}>
              <BurgerMenu />
            </MediaQuery>
          </header>
        </div>
        {
          this.state.dropdown &&
            (
              <div
                className='dropdown-menu'
                onMouseEnter={this.enterDropdown}
                onMouseLeave={this.leaveDropdown}
                style={{
                  marginLeft: this.dropdownRef.current.offsetLeft-24+4 // 24 - паддинг меню, 4 - квадратик
                }}
              >
                <ul>
                  <li><a className='link-button' href='#product1'>Для ЖБИ</a></li>
                  <li><a className='link-button' href='#product2'>Для товарного бетона</a></li>
                  <li><a className='link-button' href='#product3'>Для вибропресса</a></li>
                  <li><a className='link-button' href='#product4'>Для вибролитья</a></li>
                  <li><a className='link-button' href='#product5'>Пигменты для бетона</a></li>
                  <li><a className='link-button' href='#product6'>Для наливных полов</a></li>
                  <li><a className='link-button' href='#product7'>Для пенобетона</a></li>
                </ul>
              </div>
            )
        }
      </div>
    )
  }
}

export default Header;