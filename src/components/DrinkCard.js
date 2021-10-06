import {useState} from 'react';
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
    drinkLiked
  } = props;
  
  const [isLiked, setLiked] = useState(false);



  function loveItHandler () {
    setLiked(!isLiked)
  }

  //  fetch(`${BASE_URL}/${drinkID}`, {
  //    method: "PATCH",
  //    headers: {
  //      "Content-Type": "application/json"
  //    },
  //    body: JSON.stringify({liked: isLiked})
  //  })

  //  console.log("checking Status of isLiked", isLiked)
  //  .then(response => response.json())
  //  .then(data => {debugger;})


  function descriptionHandler() {
    console.log("description was clicked!")
    return (
      console.log({drinkDescription})
    )
  }

  function drinkHandler() {
    let drinkTemp = drinkHot ? "☕":"❄️";
    return drinkTemp
  }
  
  let ingredientsArrayJSX = drinkIngredients.map((ingredient, idx) => {
    return (
      <li key={idx} style={{listStyle: "none"}}>{ingredient}</li>
    )
  })
  
  return (
    <li classsName="card"
      style={{
      margin: "1rem",
      backgroundColor: "#EFC3A4"   
      }}
    >
      <img src={drinkImage} alt={drinkTitle}
        width="200px" height="200px"
        // style={{alignSelf: "center"}}
        // need to figure out how to center picture in card
      />
      <h3 id="drinkTitle">{drinkTitle}</h3>
      <ul style= {{fontStyle: "italic"}}>{ingredientsArrayJSX}</ul>
      {/*  need to add an empty space between DrinkIngredients */}
      {/* <p>Description: {drinkDescription}</p> */}
      <p>Price: ${drinkPrice}</p>
      {/* <p>Number of item in cart: {drinkCount}</p> do we need this? */}
      <p>Hot? {drinkHandler()}</p>
      {/* directs us to the ternary function drinkHandler */}
      <button onClick={descriptionHandler}>Description</button>
      {/* ternary function that holds an empty heart or a full heart when liked/unliked */}
      {isLiked ? (<button onClick={loveItHandler}>❤</button>) : (<button onClick={loveItHandler}>♡</button>)}
    </li>
  );
}

export default DrinkCard;