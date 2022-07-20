import { useState } from 'react';
import initialStoreItems from '../data/store-items';
import { Filters } from './Filters';
import { StoreItem } from './StoreItem';

import './Store.scss';

export const Store = ({ setCartItems }) => {
  const [storeItems] = useState(initialStoreItems);
  const [filter, setFilter] = useState({ isOn: false, value: '' });
  const [sort, setSort] = useState({ isOn: false, value: '' });

  let filteredItems = [...storeItems];

  const sortItems = () => {
    const sortByName = filteredItems.sort((a, b) => (a.name < b.name ? -1 : 1));
    if (sort.value === 'A-Z') return sortByName;
    if (sort.value === 'Z-A') return sortByName.reverse();
    const sortByPrice = filteredItems.sort((a, b) => a.price - b.price);
    if (sort.value === 'Low-High') return sortByPrice;
    if (sort.value === 'High-Low') return sortByPrice.reverse();
  };

  if (filter.isOn)
    filteredItems = filteredItems.filter((item) => item.type === filter.value);
  if (sort.isOn) filteredItems = sortItems();

  return (
    <header id="store">
      <Filters
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <ul className="item-list store--item-list">
        {filteredItems.map((item) => (
          <StoreItem key={item.id} item={item} setCartItems={setCartItems} />
        ))}
      </ul>
    </header>
  );
};
