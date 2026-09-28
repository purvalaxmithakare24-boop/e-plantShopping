import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 25,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 30,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 28,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Spider Plant",
    category: "Indoor Plants",
    price: 22,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 35,
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Pothos",
    category: "Indoor Plants",
    price: 20,
    image: "https://images.unsplash.com/photo-1614594576264-3e6a9c2e6a2a?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 7,
    name: "Aloe Vera",
    category: "Succulents",
    price: 18,
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8e8a5d7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Echeveria",
    category: "Succulents",
    price: 16,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Jade Plant",
    category: "Succulents",
    price: 24,
    image: "https://images.unsplash.com/photo-1597055181300-0c4c0c3b6f77?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Haworthia",
    category: "Succulents",
    price: 19,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Zebra Haworthia",
    category: "Succulents",
    price: 21,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "String of Pearls",
    category: "Succulents",
    price: 27,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 13,
    name: "African Violet",
    category: "Flowering Plants",
    price: 26,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Anthurium",
    category: "Flowering Plants",
    price: 32,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    name: "Orchid",
    category: "Flowering Plants",
    price: 40,
    image: "https://images.unsplash.com/photo-1566907225476-3d9f2c2e5d42?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    name: "Kalanchoe",
    category: "Flowering Plants",
    price: 29,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17,
    name: "Begonia",
    category: "Flowering Plants",
    price: 31,
    image: "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    name: "Geranium",
    category: "Flowering Plants",
    price: 27,
    image: "https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=600&q=80"
  }
];

function ProductList({ setCurrentPage }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Flowering Plants"
  ];

  const handleAddToCart = product => {
    dispatch(addItem(product));
  };

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

      <div className="product-page">
        <h1>Paradise Nursery Plants</h1>

        {categories.map(category => (
          <div key={category}>
            <h2 className="category-title">{category}</h2>

            <div className="product-grid">
              {products
                .filter(product => product.category === category)
                .map(product => {
                  const isAdded = cartItems.some(
                    item => item.id === product.id
                  );

                  return (
                    <div className="product-card" key={product.id}>
                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <h3>{product.name}</h3>

                      <p>Price: ${product.price}</p>

                      <button
                        className="add-button"
                        onClick={() => handleAddToCart(product)}
                        disabled={isAdded}
                      >
                        {isAdded ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;