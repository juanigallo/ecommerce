import React from 'react'

class Total extends React.Component {
  render() {
    const { totalPrice } = this.props
    return (
      <div>
        <span>Total: </span>
        <span>{totalPrice}</span>
      </div>
    )
  }
}

export default Total