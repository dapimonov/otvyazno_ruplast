import React, { Component } from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './ProductScreen.scss';
import {ReactComponent as Download} from "../../svg/downloads.svg";
import MediaQuery from "react-responsive";

class ProductScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // current: 0,
      descriptionOpened: new Set(),
    };

    this.contentRef = React.createRef();
    this.descriptionRef = React.createRef();
    this.screenRef = React.createRef();
    this.productsRefs = this.props.products.map(() => React.createRef());
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.current !== prevProps.current && window.innerWidth < 1024) {
      this.scrollToProduct(this.props.current);
    }
  }

  debounce(func, wait) {
    let timeout;

    return function() {
      const context = this;
      const args = arguments;
      args[0].persist();
      // args[0].preventDefault();

      const later = function() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);
    };
  };

  itemClickHandler = (index) => {
    this.props.setProduct(index);
  };

  wheelHandler = (e) => {
    // console.log(this.myWheelChecker(e.deltaY));
    if (e.deltaY < 0 && this.props.current > 0) {
      this.props.setProduct(this.props.current-1);
    }
    else if (e.deltaY > 0 && this.props.current < this.props.products.length-1) {
      this.props.setProduct(this.props.current+1);
    }
  };

  toggleDescription = (index) => {
    const newOpened = new Set(this.state.descriptionOpened);
    this.state.descriptionOpened.has(index) ? newOpened.delete(index) : newOpened.add(index);

    this.setState({
      ...this.state,
      descriptionOpened: newOpened,
    })
  };

  scrollToProduct = (index) => {
    this.productsRefs[index].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  render() {
    const {current} = this.props;

    return (
      <>
        <MediaQuery minWidth={1024}>
          <div className='product-screen aligned-content' onWheel={this.debounce(this.wheelHandler, 100)} ref={this.screenRef}>
            <SwitchTransition>
              <CSSTransition
                key={current}
                nodeRef={this.contentRef}
                timeout={400}
                classNames="fade"
              >
                <div className='content' ref={this.contentRef}>
                  <div className='text'>
                    <h3>{this.props.products[current].name}</h3>
                    <hr className='smallHr'/>
                    <h5>{this.props.products[current].model}</h5>
                    {this.props.products[current].contentNode}
                    <div className='buttons-wrapper'>
                      <button className='black-button order-button' onClick={this.props.openOrder}>Заказать бесплатный образец</button>
                      <a className='link-button' href='#download'><Download className='download-icon' /><span>Скачать технический паспорт</span></a>
                    </div>
                  </div>
                  <div className='blue-info'>
                    {this.props.products[current].blueNode}
                  </div>
                </div>
              </CSSTransition>
            </SwitchTransition>
            <div className='scroll-list'>
              <ul>
                {
                  this.props.products.map((product, index) =>
                    <li
                      key={index}
                      className={index === current ? 'active-li' : 'inactive-li'}
                      onClick={() => this.itemClickHandler(index)}
                    >
                      {product.shortName}
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
          {
            this.props.products.map((product, index) =>
              <div className='product-screen aligned-content' ref={this.productsRefs[index]} key={index}>
                <div className='content' ref={this.contentRef}>
                  <div className='text'>
                    <h3>{product.name}</h3>
                    <hr className='smallHr'/>
                    <h5>{product.model}</h5>
                    <div className='blue-info'>
                      {product.blueNode}
                    </div>
                    <MediaQuery minWidth={426}>
                      {product.contentNode}
                    </MediaQuery>
                    <CSSTransition
                      in={this.state.descriptionOpened.has(index)}
                      nodeRef={this.descriptionRef}
                      timeout={300}
                      classNames="description"
                      unmountOnExit
                    >
                      <div ref={this.descriptionRef}>{product.contentNode}</div>
                    </CSSTransition>
                    <div className='buttons-wrapper'>
                      <MediaQuery maxWidth={425}>
                        <button className='link-button' onClick={() => this.toggleDescription(index)}>
                          <span>{this.state.descriptionOpened.has(index) ? 'Скрыть' : 'Показать'} описание</span>
                        </button>
                      </MediaQuery>
                      <button className='black-button order-button' onClick={this.props.openOrder}>Заказать бесплатный образец</button>
                      <a className='link-button' href='#download'><Download className='download-icon' /><span>Скачать технический паспорт</span></a>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </MediaQuery>
    </>
    )
  }
}

export default ProductScreen;