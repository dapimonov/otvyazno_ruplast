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

  chooseProduct = (index) => {
    this.props.scrollToProducts();
    this.props.setProduct(index);
  };

  render() {
    return (
      <div className='header-component'>
        <div className='header-wrapper'>
          <header className='header-bar aligned-content'>
            <div className='logo-wrapper'>
              <Logo className='logo' />
            </div>
            <MediaQuery minWidth={1024}>
              <nav>
                <a className='link-button' href='#catalog' onMouseEnter={this.enterDropdown} onMouseLeave={this.leaveDropdown} onClick={this.props.scrollToProducts} ref={this.dropdownRef}><Triangle className='triangle-icon' />Каталог</a>
                <a className='link-button' href='#about' onClick={this.props.scrollToAbout}>О&nbsp;добавках Рупласт</a>
                <a className='link-button' href='#contacts' onClick={this.props.scrollToContacts}>Контакты</a>
                <button className='link-button question-button' href='#question' onClick={this.props.openQuestion}><Question className='question-icon' /><span>Задать вопрос</span></button>
                <button className='black-button order-button' onClick={this.props.openOrder}>Заказать образец</button>
              </nav>
            </MediaQuery>
            <MediaQuery maxWidth={1023}>
              <BurgerMenu
                openOrder={this.props.openOrder}
                openQuestion={this.props.openQuestion}
                scrollToAbout={this.props.scrollToAbout}
                scrollToContacts={this.props.scrollToContacts}
                setProduct={this.chooseProduct}
              />
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
                  <li><a className='link-button' href='#product0' onClick={() => this.chooseProduct(0)}>Для ЖБИ</a></li>
                  <li><a className='link-button' href='#product1' onClick={() => this.chooseProduct(1)}>Для товарного бетона</a></li>
                  <li><a className='link-button' href='#product2' onClick={() => this.chooseProduct(2)}>Для вибролитья</a></li>
                  <li><a className='link-button' href='#product3' onClick={() => this.chooseProduct(3)}>Для вибропресса</a></li>
                  <li><a className='link-button' href='#product4' onClick={() => this.chooseProduct(4)}>Пигменты для бетона</a></li>
                  <li><a className='link-button' href='#product5' onClick={() => this.chooseProduct(5)}>Для наливных полов</a></li>
                  <li><a className='link-button' href='#product6' onClick={() => this.chooseProduct(6)}>Для пенобетона</a></li>
                </ul>
              </div>
            )
        }
      </div>
    )
  }
}

export default Header;