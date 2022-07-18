export const StoreItem = ({ item, setCartItems }) => {
  const addItemToCart = (id) => {
    setCartItems((currentCartItems) => {
      if (currentCartItems.find((x) => x.id === id)) {
        return currentCartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currentCartItems, { id, quantity: 1 }];
      }
    });
  };

  return (
    <li>
      <div className="store--item-icon">
        <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
      </div>
      <button onClick={() => addItemToCart(item.id)}>Add to cart</button>
    </li>
  );
};
