// component responsible for rendering each drink card
function DrinkCard(props) {
  const BASE_URL = 'http://localhost:4000/drinks'
  
  // destructuring `props`
  const {
    drinkID,
    drinkTitle,
    drinkDescription,
    drinkIngredients,
    drinkImage,
    drinkPrice,
    drinkCount,
    drinkHot,
    drinkLiked,
    drinkDescriptionURL
  } = props;

  // function that is triggered when the heart button is clicked to like a drink
  function loveItHandler () {
    // PATCH /drinks/:id
    fetch(`${BASE_URL}/${drinkID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({liked: !drinkLiked})
    })
    .then(response => response.json())
    .then(data => props.updateLikedStatusOfDrink(data));
  }

  // function that is triggered when subtract-from or add-to cart button is clicked
  function subtractAddOneDrinkItemInCartHandler(event) {
    // creating a variable with `let` because `drinkCount` is defined with `const`
    let itemCountInCart = drinkCount;

    // checking subtract or add button is clicked
    if ((event.target.name === 'subtract-one-item-from-cart-btn') && (itemCountInCart > 0)) {
      itemCountInCart--;
    } else if (event.target.name === 'add-one-item-to-cart-btn') {
      itemCountInCart++;
    }

    // PATCH /drinks/:id
    fetch(`${BASE_URL}/${drinkID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({count: itemCountInCart})
    })
    .then(response => response.json())
    .then(data => props.updateDrinkItemCountInCart(data));
  }
  

  function drinkHandler() {
    let drinkTemp = drinkHot ? "Hot ☕":"Iced ❄️";
    return drinkTemp
  }
  
  let ingredientsArrayJSX = drinkIngredients.map((ingredient, idx) => {
    return (
      <li key={idx} style={{listStyle: "none"}}>{ingredient}</li>
    )
  })
  
  return (
    <li className="card container text-center p-2 mt-4 gap" 
        style={{backgroundColor: "#EFC3A4",}}
    >
      <h1 id="drinkTitle" className="card-font">{drinkTitle}</h1>
      <img className="" src={drinkImage} alt={drinkTitle}
        width="300px" height="300px"
      />
      <ul 
        className="card-font text-center p-3">{ingredientsArrayJSX}</ul>
      <p className="card-font">${drinkPrice.toFixed(2)}</p>
      <p className="card-font">{drinkHandler()}</p>
      {/* directs us to the ternary function drinkHandler */}

      <a className="btn details px-auto card-title-font" href={drinkDescriptionURL} target="_blank">Description</a>

      {/* ternary function that holds an empty heart or a full heart when liked/unliked */}
      <button className="btn details like-btn" onClick={loveItHandler}>{drinkLiked ? '❤' : '♡'}</button>
      {/* <div>Add Cart + -</div> */}
      <div>
        <button
          name='subtract-one-item-from-cart-btn'
          onClick={subtractAddOneDrinkItemInCartHandler}
          className="btn"
        >
          ➖
        </button>
        <span>
          {drinkCount}
        </span>
        <button
          name='add-one-item-to-cart-btn'
          onClick={subtractAddOneDrinkItemInCartHandler}
          className="btn"
        >
          ➕
        </button>
      </div>
    </li>
  );
}

export default DrinkCard;