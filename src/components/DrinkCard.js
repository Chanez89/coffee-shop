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

 function loveItHandler () {
   return (
     console.log('Love it clicked!')
   )
 }

 function descriptionHandler() {
   return (
     console.log({drinkDescription})
   )
  }
 
function drinkHandler() {
  return(
    console.log('drinkHot')
    // drinkHot ? "☕":"❄️";
  )
}
 
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
      <p style= {{fontStyle: "italic"}}>{drinkIngredients}</p>
      {/*  need to add an empty space between DrinkIngredients */}
      {/* <p>Description: {drinkDescription}</p> */}
      <p>Price: ${drinkPrice}</p>
      {/* <p>Number of item in cart: {drinkCount}</p>      do we need this? */}
      <p>Hot? {drinkHandler}</p>
      {/* directs us to the ternary function drinkHandler */}
      <button onClick={descriptionHandler}>Description</button>
      <button onClick={loveItHandler}>Love it! {drinkLiked}</button>
    </li>
  );
}

export default DrinkCard;