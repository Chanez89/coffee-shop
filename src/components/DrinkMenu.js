import DrinkCard from './DrinkCard.js';

// container component for all drink cards
function DrinkMenu({ drinksToDisplay, updateLikedStatusOfDrink, updateDrinkItemCountInCart }) {

  // map through `drinksToDisplay` to return a new arry of JSX
  const drinksToDisplayJSX = drinksToDisplay.map(
    (singleDrink, idx) => {
      return (
        <DrinkCard
          key={idx}
          drinkID={singleDrink.id}
          drinkTitle={singleDrink.title}
          drinkDescription={singleDrink.description}
          drinkIngredients={singleDrink.ingredients}
          drinkImage={singleDrink.image}
          drinkPrice={singleDrink.price}
          drinkCount={singleDrink.count}
          drinkHot={singleDrink.hot}
          drinkLiked={singleDrink.liked}
          updateLikedStatusOfDrink={updateLikedStatusOfDrink}
          updateDrinkItemCountInCart={updateDrinkItemCountInCart}
          drinkDescriptionURL={singleDrink.descriptionURL}
        />
      );
    }
  );

  return (
    <ul className="cards row">
      {drinksToDisplayJSX}
    </ul>
  );
}

export default DrinkMenu;