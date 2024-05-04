
function FavoritesCard({ products }) {
   
    return (
      <div>
        <img src={products.image} alt={products.title} />
        <h4>{products.title}</h4>
        <p>{products.price}$</p>
        <p>{products.discont_price}$</p>
      </div>
    );
  }
  

export default FavoritesCard
