import DrinkCard from './DrinkCard.js';

// container component for all drink cards
function DrinkMenu({ drinksToDisplay, updateLikedStatusOfDrink }) {

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
        />
      );
    }
  );

  return (
    <ul className="cards"
    style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: "25px 300px" 
        // gap first# is spacing from top and bottom boxes, 2nd # is left and right
        // pushing it high lets us show 4 cards instead of more
    }}>
      {drinksToDisplayJSX}
    </ul>
  );
}

export default DrinkMenu;