export const Filters = ({ filter, setFilter, sort, setSort }) => {
  const updateFilter = (value) => !value ? setFilter({ isOn: false, value }) : setFilter({ isOn: true, value });
  const updateSort = (value) => !value ? setSort({ isOn: false, value }) : setSort({ isOn: true, value });

  return (
    <form className="filterForm">
      <label htmlFor="filterSelect">Filter By: </label>
      <select
        className="filters-select"
        name="filterSelect"
        id="filterSelect"
        value={filter.value}
        onChange={(e) => updateFilter(e.target.value)}
      >
        <option></option>
        <option value="veg">Veg</option>
        <option value="fruit">Fruit</option>
      </select>
      <label htmlFor="sortSelect">Sort By: </label>
      <select
        className="filters-select"
        name="sortSelect"
        id="sortSelect"
        value={sort.value}
        onChange={(e) => updateSort(e.target.value)}
      >
        <option></option>
        <option value="A-Z">A - Z</option>
        <option value="Z-A">Z - A</option>
        <option value="Low-High">Low - High</option>
        <option value="High-Low">High - Low</option>
      </select>
      <button 
        type='reset' 
        onClick={() => {
          updateFilter();
          updateSort()
        }}
      >Reset Filters</button>
    </form>
  );
};
