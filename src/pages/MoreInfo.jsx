import { useLocation } from 'react-router-dom';
import { capitaliseFirstLetter } from '../utilities/capitaliseFirstLetter';
import storeItems from '../data/store-items.json';
import { formatPath } from '../utilities/formatPath';

export const MoreInfo = () => {
  const currentWindow = useLocation().pathname.substring(1);
  const item = storeItems.find(
    (item) => formatPath(item.name) === currentWindow
  );
  return item ? (
    <div className="more-info-container">
      <h1>{capitaliseFirstLetter(item.name)}</h1>
      <div className="more-info-img">
        <img
          className="more-info-img"
          src={`./assets/icons/${item.id}.svg`}
          alt={item.name}
          width="100px"
        />
      </div>
      <p className="more-info-body">{item.body}</p>
    </div>
  ) : (
    <h1 style={{ textAlign: 'center', marginTop: 100 }}>Page Not Found</h1>
  );
};
