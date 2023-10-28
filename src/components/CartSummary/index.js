import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalAmt = cartList.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0,
      )
      return (
        <div>
          <h1>
            Order Total: <span>Rs {totalAmt}/-</span>
          </h1>
          <p>{cartList.length}</p>
          <button>Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
