import {useState} from 'react';

function NewDrinkForm({addNewDrinkToDrinksMenuArr}) {
  const BASE_URL = 'http://localhost:4000/drinks';

  // defining state to keep track of `formData`
  const [newDrinkFormData, setNewDrinkFormData] = useState({
    title: '',
    description: '',
    ingredients: [
      ''
    ],
    image: '',
    hot: true
  });
  
  // iterate through the new drink form data's ingredients array
    // to create `label` and `input` tags for each ingredient
  // need to do this b/c the user can add variable number of ingredients
  const ingredientInputFieldsJSX = newDrinkFormData.ingredients.map(
    (singleIngredient, idx) => {
      return (
        <div key={idx}>
          <label>{`Ingredient ${idx+1}:`}</label>
          <input
            type='text'
            name={`ingredient-${idx+1}`}
            value={singleIngredient}
            onChange={newDrinkFormInputFieldHandler}
            style={{ display: 'block' }}
          />
        </div>
      );
    }
  );

  // function triggered as user fills out each input field of the new drink form
  // set up as a controlled form
  function newDrinkFormInputFieldHandler(event) {
    let value = event.target.value;

    // need to convert the strings 'true' and 'false' into booleans before saving to db.json
    if (event.target.name === 'hot' && event.target.value === 'true') {
      value = true;
    } else if (event.target.name === 'hot' && event.target.value === 'false') {
      value = false;
    }

    if (event.target.name.includes('ingredient')) { // if this is an ingredient input field
      // creating a copy of the new drink form data's ingredients array
      const ingredientsNewArr = [...newDrinkFormData.ingredients];
      
      // get the index of the ingredient in the new drink form data's ingredients array
        // using the `name` attribute of the input tag
      // update the copy of the new drink form data's ingredients array
      const ingredientIdx = event.target.name.split('-')[1] - 1;
      ingredientsNewArr[ingredientIdx] = event.target.value;
      
      // setter function to set the new state
      setNewDrinkFormData({
        ...newDrinkFormData,
        ingredients: ingredientsNewArr
      });
    } else {  // if this is not an ingredient input field
      // setter function to set the new state
      setNewDrinkFormData({
        ...newDrinkFormData,
        [event.target.name]: value
      });
    }
  }

  // function that is triggered when user clicks to submit the new drink form
  function submitNewDrinkFormHandler(event) {
    event.preventDefault();

    // creating the new drink object using `newDrinkFormData`
    const newDrinkObj = {
      title: newDrinkFormData.title,
      description: newDrinkFormData.description,
      ingredients: newDrinkFormData.ingredients,
      image: newDrinkFormData.image,
      price: 5.00,
      count: 0,
      hot: newDrinkFormData.hot,
      liked: false
    };

    // POST /drinks
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newDrinkObj)
    })
    .then(response => response.json())
    .then(data => addNewDrinkToDrinksMenuArr(data));

    // setting state for `newDrinkFormData` to clear out user input fields
    setNewDrinkFormData({
      title: '',
      description: '',
      ingredients: [
        ''
      ],
      image: '',
      hot: newDrinkFormData.hot
    });
  }

  // function triggered when `Add Another Ingredient` button is clicked
  function addAnotherIngredientInputFieldHandler(event) {
    // don't fully understand why this line is needed
      // triggers the `submitNewDrinkFormHandler` function without this line
      // has something to do with event propagation
    event.preventDefault();
    
    // creating a copy of the new drink form data's ingredients array
    const ingredientsNewArr = [...newDrinkFormData.ingredients, ''];

    // setter function to set the new state
    setNewDrinkFormData({
      ...newDrinkFormData,
      ingredients: ingredientsNewArr
    });
  }

  return (
    <div>
      <h1>New Drink Suggestion</h1>
      <form onSubmit={submitNewDrinkFormHandler}>
        <label>Name:</label>
        <input
          type='text'
          name='title'
          value={newDrinkFormData.title}
          onChange={newDrinkFormInputFieldHandler}
          style={{display: 'block'}}
        />
        <label>Description:</label>
        <textarea
          name='description'
          value={newDrinkFormData.description}
          onChange={newDrinkFormInputFieldHandler}
          style={{display: 'block'}}
        >
        </textarea>
        {/* <label>Ingredient 1:</label>
        <input
          type='text'
          name='ingredients'
          value={newDrinkFormData.ingredients[0]}
          onChange={newDrinkFormInputFieldHandler}
          style={{display: 'block'}}
        /> */}
        {ingredientInputFieldsJSX}
        <button
          onClick={addAnotherIngredientInputFieldHandler}
          style={{display: 'block'}}
        >
          Add Another Ingredient
        </button>
        <label>Image URL:</label>
        <input
          type='text'
          name='image'
          value={newDrinkFormData.image}
          onChange={newDrinkFormInputFieldHandler}
          style={{display: 'block'}}
        />
        <input
          type='radio'
          name='hot'
          value={true}
          defaultChecked
          onClick={newDrinkFormInputFieldHandler}
        />
        <label>Hot</label>
        <input
          type='radio'
          name='hot'
          value={false}
          onClick={newDrinkFormInputFieldHandler}
        />
        <label>Cold</label>
        <button style={{display: 'block'}}>Submit New Drink!</button>
      </form>
    </div>
  );
}

export default NewDrinkForm;