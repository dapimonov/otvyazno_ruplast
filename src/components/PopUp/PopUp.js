import React, { Component } from 'react';
import './PopUp.scss';

class PopUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };

    this.backgroundRef = React.createRef();
    this.crossRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClose);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClose);
  }

  handleClose = event => {
    if (event.target === this.backgroundRef.current || event.target === this.crossRef.current) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <>
        {this.props.active &&
          <div className='pop-up' ref={this.backgroundRef}>
          <div className='child-wrapper'>
            {this.props.cross &&
              <div className='cross-wrapper' ref={this.crossRef} >
                <div className='cross'/>
              </div>
            }
            {this.props.children}
          </div>
        </div>}
      </>
    )
  }
}

export default PopUp;