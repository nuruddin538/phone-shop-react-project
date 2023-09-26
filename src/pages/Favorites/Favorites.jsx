import { useEffect, useState } from 'react';

import FavoritesCard from './FavoritesCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNofound] = useState(false);

  const [isShow, setIsShow] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
    if (favoriteItems) {
      setFavorites(favoriteItems);

      const total = favoriteItems.reduce(
        (preValue, currentItem) => preValue + currentItem.price,
        0
      );
      setTotalPrice(total);
    } else {
      setNofound('No Data Found');
    }
  }, []);
  const handleRemove = () => {
    localStorage.clear();
    setFavorites([]);
    setNofound('No Data Found');
  };
  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          {favorites.length > 0 && (
            <div>
              <button
                onClick={handleRemove}
                className="px-5 bg-green-400 block py-2 mx-auto mb-5"
              >
                Deleted All favorite
              </button>
              <h1 className="text-3xl font-bold mb-5">
                Total price : ${totalPrice}
              </h1>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {isShow
              ? favorites.map(phone => (
                  <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                ))
              : favorites
                  .slice(0, 4)
                  .map(phone => (
                    <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                  ))}
          </div>
          {favorites.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="px-5 bg-green-400 block py-2 mx-auto mt-5"
            >
              {isShow ? 'See less' : 'See More'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
