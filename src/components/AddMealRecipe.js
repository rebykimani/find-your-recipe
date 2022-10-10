import React, {useState} from "react";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function AddMealRecipe({ handleChange, handleSubmit }) {
    const [mealForm, setMealForm] = useState({
        idMeal: 0,
          strMeal: "",
          strDrinkAlternate: null,
          strCategory: "",
          strArea: "",
          strInstructions: "",
          strMealThumb: "",
          strTags: "",
          strYoutube: "",
          strIngredient1: "",
          strIngredient2: "",
          strIngredient3: "",
          strIngredient4: "",
          strIngredient5: "",
          strIngredient6: "",
          strIngredient7: "",
          strIngredient8: "",
          strIngredient9: "",
          strIngredient10: "",
          strIngredient11: "",
          strIngredient12: "",
          strIngredient13: "",
          strIngredient14: "",
          strIngredient15: "",
          strIngredient16: null,
          strIngredient17: null,
          strIngredient18: null,
          strIngredient19: null,
          strIngredient20: null,
          strMeasure1: "175g/6oz",
          strMeasure2: "75g/3oz",
          strMeasure3: "200g/7oz",
          strMeasure4: "75g/3oz",
          strMeasure5: "75g/3oz",
          strMeasure6: "2",
          strMeasure7: "75g/3oz",
          strMeasure8: "1 tsp",
          strMeasure9: "50g/1¾oz",
          strMeasure10: "",
          strMeasure11: "",
          strMeasure12: "",
          strMeasure13: "",
          strMeasure14: "",
          strMeasure15: "",
          strMeasure16: null,
          strMeasure17: null,
          strMeasure18: null,
          strMeasure19: null,
          strMeasure20: null,
          strSource: null,
          strImageSource: null,
          strCreativeCommonsConfirmed: null,
          dateModified: null,
        
      });
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
              <div className="ui segment add-recipe">
           <button onClick={openModal}>Add Meal Recipe</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <button onClick={closeModal}>close</button>
  <form className="ui form" onSubmit={handleSubmit}>
          <div className="inline fields">
            <input
              onChange={e=>setMealForm({ idMeal: e.target.value})}
              type="number"
              name="idMeal"
              value={mealForm.idMeal}
            />
            <input
              onChange={e=>setMealForm({strMeal: e.target.value})}
              type="text"
              name="strmeal"
              placeholder="strmeal"
              value={mealForm.strMeal}
            />
            <input
              onChange={e=>setMealForm({ strDrinkAlternate: e.target.value})}
              type="text"
              name="strDrinkAlternate"
              placeholder="Drink Alternate"
              value={mealForm.strDrinkAlternate}
            />
            <input
              onChange={e=>setMealForm({ strCategory: e.target.value})}
              type="text"
              name="strCategory"
              placeholder="category"
              value={mealForm.strCategory}
            />
              <input
              onChange={e=>setMealForm({ strArea: e.target.value})}
              type="text"
              name="strArea"
              placeholder="Area"
              value={mealForm.strArea}
            />
              <input
              onChange={e=>setMealForm({ strInstructions: e.target.value})}
              type="text"
              name="strInstructions"
              placeholder="instructions"
              value={mealForm.strInstructions}
            />
            

            <input
              onChange={e=>setMealForm({ strMealThumb: e.target.value})}
              type="text"
              name="strMealThumb"
              placeholder="Meal thumb"
              value={mealForm.strMealThumb}
            />
             <input
              onChange={e=>setMealForm({ strTags: e.target.value})}
              type="text"
              name="strTags"
              placeholder="Tags"
              value={mealForm.strTags}
            />
            <input
              onChange={e=>setMealForm({ strYoutube: e.target.value})}
              type="text"
              name="strYoutube"
              placeholder="youtube link"
              value={mealForm.strYoutube}
            />
             <input
              onChange={e=>setMealForm({ strIngredient1: e.target.value})}
              type="text"
              name="strIngredient1"
              placeholder="Ingredient 1"
              value={mealForm.strIngredient1}
            />
            <input
              onChange={e=>setMealForm({ strIngredient2: e.target.value})}
              type="text"
              name="strIngredient2"
              placeholder="Ingredient 2"
              value={mealForm.strIngredient2}
            />
             <input
              onChange={e=>setMealForm({ strIngredient3: e.target.value})}
              type="text"
              name="strIngredient3"
              placeholder="Ingredient 3"
              value={mealForm.strIngredient3}
              />
               <input
              onChange= {e=>setMealForm({ strIngredient4: e.target.value})}
              type="text"
              name="strIngredient4"
              placeholder="Ingredient 4"
              value={mealForm.strIngredient4}
            /> 
            <input
              onChange={handleChange}
              type="text"
              name="strIngredient5"
              placeholder="Ingredient 5"
              value={mealForm.strIngredient5}
            />       
            <input
              onChange={handleChange}
              type="text"
              name="strIngredient6"
              placeholder="Ingredient 6"
              value={mealForm.strIngredient6}
            />      
                 <input
              onChange={handleChange}
              type="text"
              name="strIngredient7"
              placeholder="Ingredient 7"
              value={mealForm.strIngredient7}
            /> 
                 <input
              onChange={handleChange}
              type="text"
              name="strIngredient8"
              placeholder="Ingredient 8"
              value={mealForm.strIngredient8}
            /> 
                 <input
              onChange={handleChange}
              type="text"
              name="strIngredient9"
              placeholder="Ingredient 9"
              value={mealForm.strIngredient9}
            /> 
              <input
              onChange={handleChange}
              type="text"
              name="strIngredient10"
              placeholder="Ingredient 10"
              value={mealForm.strIngredient10}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strIngredient11"
              placeholder="Ingredient 11"
              value={mealForm.strIngredient11}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strIngredient12"
              placeholder="Ingredient 12"
              value={mealForm.strIngredient12}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strIngredient13"
              placeholder="Ingredient 13"
              value={mealForm.strIngredient13}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strIngredient14"
              placeholder="Ingredient 14"
              value={mealForm.strIngredient14}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strIngredient15"
              placeholder="Ingredient 15"
              value={mealForm.strIngredient15}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strIngredient16"
              placeholder="Ingredient 16"
              value={mealForm.strIngredient16}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strIngredient17"
              placeholder="Ingredient 17"
              value={mealForm.strIngredient17}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strIngredient18"
              placeholder="Ingredient 18"
              value={mealForm.strIngredient18}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strIngredient19"
              placeholder="Ingredient 19"
              value={mealForm.strIngredient19}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strIngredient20"
              placeholder="Ingredient 20"
              value={mealForm.strIngredient20}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure1"
              placeholder="Measure 1"
              value={mealForm.strMeasure1}
            />
              <input
              onChange={handleChange}
              type="text"
              name="MstrMeasure2"
              placeholder="Measure 2"
              value={mealForm.strMeasure2}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure1"
              placeholder="Measure 3"
              value={mealForm.strMeasure3}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure4"
              placeholder="Measure 4"
              value={mealForm.strMeasure4}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure5"
              placeholder="Measure 5"
              value={mealForm.strMeasure5}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure6"
              placeholder="Measure 6"
              value={mealForm.strMeasure6}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure7"
              placeholder="Measure 7"
              value={mealForm.strMeasure7}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure8"
              placeholder="Measure 8"
              value={mealForm.strMeasure8}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure9"
              placeholder="Measure 9"
              value={mealForm.strMeasure9}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure10"
              placeholder="Measure 10"
              value={mealForm.strMeasure10}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure11"
              placeholder="Measure 11"
              value={mealForm.strMeasure11}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure12"
              placeholder="Measure 12"
              value={mealForm.strMeasure12}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure13"
              placeholder="Measure 13"
              value={mealForm.strMeasure13}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure14"
              placeholder="Measure 14"
              value={mealForm.strMeasure14}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure15"
              placeholder="Measure 15"
              value={mealForm.strMeasure15}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure16"
              placeholder="Measure 16"
              value={mealForm.strMeasure16}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure17"
              placeholder="Measure 17"
              value={mealForm.strMeasure17}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure18"
              placeholder="Measure 18"
              value={mealForm.strMeasure18}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure19"
              placeholder="Measure 19"
              value={mealForm.strMeasure19}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strMeasure20"
              placeholder="Measure 20"
              value={mealForm.strMeasure20}
            />
              <input
              onChange={handleChange}
              type="text"
              name="strSource"
              placeholder="Source"
              value={mealForm.strSource}
            />
            <input
              onChange={handleChange}
              type="text"
              name="strImageSource"
              placeholder="Image Source"
              value={mealForm.strImageSource}
            />
            <input
              onChange={handleChange}
              type="text"
              name="strCreativeCommonsConfirmed"
              placeholder="Creative Commons"
              value={mealForm.strCreativeCommonsConfirmed}
            />
               <input
              onChange={handleChange}
              type="dateModified"
              name="date"
              value={mealForm.dateModified}
            />
          </div>
          <button className="ui button " type="button" >
            Add Meal Recipe
          </button>
        </form>
        </Modal>
      </div>
    );
  }
  
  export default AddMealRecipe;