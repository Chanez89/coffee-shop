// component responsible for rendering each drink card
function DrinkCard(props) {
  // destructuring `props`
  const {
    drinkTitle,
    drinkDescription,
    drinkIngredients,
    drinkImage,
    drinkPrice,
    drinkCount,
    drinkHot,
    drinkLiked
  } = props;

  return (
    <li>
      <p>Title: {drinkTitle}</p>
      <p>Description: {drinkDescription}</p>
      <p>Ingredients: {drinkIngredients}</p>
      <img src={drinkImage} alt={drinkTitle}/>
      <p>Price: ${drinkPrice}</p>
      <p>Number of item in cart: {drinkCount}</p>
      <p>Hot? {drinkHot}</p>
      <p>Liked? {drinkLiked}</p>
    </li>
  );
}

export default DrinkCard;