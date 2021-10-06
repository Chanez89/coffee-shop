import {useState} from 'react';

function NewDrinkForm({addNewDrinkToDrinksMenuArr}) {
  const BASE_URL = 'http://localhost:4000/drinks';

  // defining state to keep track of `formData`
  const [newDrinkFormData, setNewDrinkFormData] = useState({
    title: '',
    description: '',
    ingredient1: '',
    ingredient2: '',
    ingredient3: '',
    image: '',
    hot: true
  });

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

    // setter function to set the new state
    setNewDrinkFormData({
      ...newDrinkFormData,
      [event.target.name]: value
    });
  }

  // function that is triggered when user clicks to submit the new drink form
  function submitNewDrinkFormHandler(event) {
    event.preventDefault();

    // creating the new drink object using `newDrinkFormData`
    const newDrinkObj = {
      title: newDrinkFormData.title,
      description: newDrinkFormData.description,
      ingredients: [
        newDrinkFormData.ingredient1,
        newDrinkFormData.ingredient2,
        newDrinkFormData.ingredient3
      ],
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
      ingredient1: '',
      ingredient2: '',
      ingredient3: '',
      image: '',
      hot: newDrinkFormData.hot
    });
  }

  return (
    <div>
      <h1>New Drink Suggestion</h1>
      <form onSubmit={submitNewDrinkFormHandler}>
        <label>Name:
          <input
            type='text'
            name='title'
            value={newDrinkFormData.title}
            onChange={newDrinkFormInputFieldHandler}
            style={{display: 'block'}}
          />
        </label>
        <label>Description:
          <textarea
            name='description'
            value={newDrinkFormData.description}
            onChange={newDrinkFormInputFieldHandler}
            style={{display: 'block'}}
          >
          </textarea>
        </label>
        <label>Ingredient 1:
          <input
            type='text'
            name='ingredient1'
            value={newDrinkFormData.ingredient1}
            onChange={newDrinkFormInputFieldHandler}
            style={{display: 'block'}}
          />
        </label>
        <label>Ingredient 2:
          <input
            type='text'
            name='ingredient2'
            value={newDrinkFormData.ingredient2}
            onChange={newDrinkFormInputFieldHandler}
            style={{display: 'block'}}
          />
        </label>
        <label>Ingredient 3:
          <input
            type='text'
            name='ingredient3'
            value={newDrinkFormData.ingredient3}
            onChange={newDrinkFormInputFieldHandler}
            style={{display: 'block'}}
          />
        </label>
        <label>Image URL:
          <input
            type='text'
            name='image'
            value={newDrinkFormData.image}
            onChange={newDrinkFormInputFieldHandler}
            style={{display: 'block'}}
          />
        </label>
        <label>Hot or cold:
          <input
            type='radio'
            name='hot'
            value={true}
            defaultChecked
            onClick={newDrinkFormInputFieldHandler}
            />Hot
          <input
            type='radio'
            name='hot'
            value={false}
            onClick={newDrinkFormInputFieldHandler}
          />Cold
        </label>
        <button style={{display: 'block'}}>Submit New Drink!</button>
      </form>
    </div>
  );
}

export default NewDrinkForm;