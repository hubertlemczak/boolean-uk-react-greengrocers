import { StoreItem } from './StoreItem';

export const Store = ({ storeItems, setCartItems }) => {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {storeItems.map((item) => (
          <StoreItem key={item.id} item={item} setCartItems={setCartItems} />
        ))}
      </ul>
    </header>
  );
};
