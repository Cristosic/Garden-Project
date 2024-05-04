import React from 'react'
import { useSelector } from 'react-redux';
import FavoritesCard from '../FavoritesCard/FavoritesCard';

function FavoritesContainer() {
    const favoritesCard = useSelector(state => state.favorites.card);

  return (
    <div>
      <div>
      <h1>Избранные товары</h1>
      <div>
        {favoritesCard.length > 0 ? (
          favoritesCard.map(el => (
            <FavoritesCard key={el.id} products={el} />
          ))
        ) : (
          <p>товаров нет</p>
        )}
      </div>
    </div>
    </div>
  )
}

export default FavoritesContainer
