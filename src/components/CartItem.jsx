import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem({ setCurrentPage }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleIncrease = item => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrease = item => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }
  };

  const handleDelete = itemId => {
    dispatch(removeItem(itemId));
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="navbar-links">
          <button onClick={() => setCurrentPage("home")}>
            Home
          </button>

          <button onClick={() => setCurrentPage("plants")}>
            Plants
          </button>

          <button onClick={() => setCurrentPage("cart")}>
            Cart 🛒 ({cartCount})
          </button>
        </div>
      </nav>

      <div className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div>
            <h2>Your cart is empty.</h2>

            <button
              className="continue-button"
              onClick={() => setCurrentPage("plants")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div>
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h2>{item.name}</h2>

                  <p>Unit Price: ${item.price}</p>

                  <p>
                    Total Cost: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                  </div>

                  <br />

                  <button
                    className="delete-button"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-total">
              Total Cart Amount: $
              {calculateTotalAmount().toFixed(2)}
            </div>

            <div className="cart-actions">
              <button
                className="checkout-button"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              <button
                className="continue-button"
                onClick={() => setCurrentPage("plants")}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartItem;