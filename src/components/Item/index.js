import React from 'react'
import './style.css'

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      qty: 1
    }
  }

  handleClick(action) {
    const { qty } = this.state
    const { price, id } = this.props.data
    const newQty = action == 'less' ? qty - 1 : qty + 1

    if (newQty > 0) {
      this.props.handleCallback(action, price)

      this.setState({
        qty: newQty
      })
    } else if (newQty == 0) {
      this.props.deleteCallback(id)
    }
  }

  render() {
    const { img, name, price } = this.props.data;
    const { qty } = this.state;

    return (
      <div className="itemContainer">
        <div className="imgContainer">
          <img src={img} />
        </div>
        <div className="dataContainer">
          <p>{name}</p>
          <p>${price * qty} </p>
        </div>
        <div>
          <button onClick={() => this.handleClick('less')}>-</button>
          <span>{qty}</span>
          <button onClick={() => this.handleClick('more')}>+</button>
        </div>
      </div>
    )
  }
}

export default Item