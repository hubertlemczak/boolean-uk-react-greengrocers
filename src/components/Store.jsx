import { StoreItem } from './StoreItem';

export const Store = ({ storeItems, setCartItems, setPath }) => {
  return (
    <header id="store">
      <ul className="item-list store--item-list">
        {storeItems.map((item) => (
          <StoreItem
            key={item.id}
            item={item}
            setCartItems={setCartItems}
            setPath={setPath}
          />
        ))}
      </ul>
    </header>
  );
};
