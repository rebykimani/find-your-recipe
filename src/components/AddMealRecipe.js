import React from "react";

function AddMealRecipe({ handleChange, handleSubmit, mealForm}) {
    return (
      <div className="ui segment add-recipe">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">

  <form className="ui form" onSubmit={handleSubmit}>
          <div className="inline fields">
            <input
              onChange={handleChange}
              type="number"
              name="number"
              value={mealForm.idMeal}
            />
            <input
              onChange={handleChange}
              type="text"
              name="strmeal"
              placeholder="strmeal"
              value={mealForm.strMeal}
            />
            <input
              onChange={handleChange}
              type="text"
              name="Drink Alternate"
              placeholder="Drink Alternate"
              value={mealForm.strDrinkAlternate}
            />
            <input
              onChange={handleChange}
              type="text"
              name="category"
              placeholder="category"
              value={mealForm.strCategory}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Area"
              placeholder="Area"
              value={mealForm.strArea}
            />
            
            <input
              onChange={handleChange}
              type="text"
              name="meal thumb"
              placeholder="Meal thumb"
              value={mealForm.strMealThumb}
            />
             <input
              onChange={handleChange}
              type="text"
              name="tags"
              placeholder="Tags"
              value={mealForm.strTags}
            />
            <input
              onChange={handleChange}
              type="text"
              name="youtube link"
              placeholder="youtube"
              value={mealForm.strYoutube}
            />
             <input
              onChange={handleChange}
              type="text"
              name="Ingredient 1"
              placeholder="Ingredient 1"
              value={mealForm.strIngredient1}
            />
            <input
              onChange={handleChange}
              type="text"
              name="Ingredient 2"
              placeholder="Ingredient 2"
              value={mealForm.strIngredient2}
            />
             <input
              onChange={handleChange}
              type="text"
              name="Ingredient 3"
              placeholder="Ingredient 3"
              value={mealForm.strIngredient3}
              />
               <input
              onChange={handleChange}
              type="text"
              name="Ingredient 4"
              placeholder="Ingredient 4"
              value={mealForm.strIngredient4}
            /> 
            <input
              onChange={handleChange}
              type="text"
              name="Ingredient 5"
              placeholder="Ingredient 5"
              value={mealForm.strIngredient5}
            />       
            <input
              onChange={handleChange}
              type="text"
              name="Ingredient 6"
              placeholder="Ingredient 6"
              value={mealForm.strIngredient6}
            />      
                 <input
              onChange={handleChange}
              type="text"
              name="Ingredient 7"
              placeholder="Ingredient 7"
              value={mealForm.strIngredient7}
            /> 
                 <input
              onChange={handleChange}
              type="text"
              name="Ingredient 8"
              placeholder="Ingredient 8"
              value={mealForm.strIngredient8}
            /> 
                 <input
              onChange={handleChange}
              type="text"
              name="Ingredient 9"
              placeholder="Ingredient 9"
              value={mealForm.strIngredient9}
            /> 
              <input
              onChange={handleChange}
              type="text"
              name="Ingredient 10"
              placeholder="Ingredient 10"
              value={mealForm.strIngredient10}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Ingredient 11"
              placeholder="Ingredient 11"
              value={mealForm.strIngredient11}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Ingredient 12"
              placeholder="Ingredient 12"
              value={mealForm.strIngredient12}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Ingredient 13"
              placeholder="Ingredient 13"
              value={mealForm.strIngredient13}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Ingredient 14"
              placeholder="Ingredient 14"
              value={mealForm.strIngredient14}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Ingredient 15"
              placeholder="Ingredient 15"
              value={mealForm.strIngredient15}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Ingredient 16"
              placeholder="Ingredient 16"
              value={mealForm.strIngredient16}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Ingredient 17"
              placeholder="Ingredient 17"
              value={mealForm.strIngredient17}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Ingredient 18"
              placeholder="Ingredient 18"
              value={mealForm.strIngredient18}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Ingredient 19"
              placeholder="Ingredient 19"
              value={mealForm.strIngredient19}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Ingredient 20"
              placeholder="Ingredient 20"
              value={mealForm.strIngredient20}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 1"
              placeholder="Measure 1"
              value={mealForm.strMeasure1}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 2"
              placeholder="Measure 2"
              value={mealForm.strMeasure2}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 3"
              placeholder="Measure 3"
              value={mealForm.strMeasure3}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 4"
              placeholder="Measure 4"
              value={mealForm.strMeasure4}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 5"
              placeholder="Measure 5"
              value={mealForm.strMeasure5}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 6"
              placeholder="Measure 6"
              value={mealForm.strMeasure6}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 7"
              placeholder="Measure 7"
              value={mealForm.strMeasure7}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 8"
              placeholder="Measure 8"
              value={mealForm.strMeasure8}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 9"
              placeholder="Measure 9"
              value={mealForm.strMeasure9}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 10"
              placeholder="Measure 10"
              value={mealForm.strMeasure10}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 11"
              placeholder="Measure 11"
              value={mealForm.strMeasure11}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 12"
              placeholder="Measure 12"
              value={mealForm.strMeasure12}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 13"
              placeholder="Measure 13"
              value={mealForm.strMeasure13}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 14"
              placeholder="Measure 14"
              value={mealForm.strMeasure14}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 15"
              placeholder="Measure 15"
              value={mealForm.strMeasure15}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 16"
              placeholder="Measure 16"
              value={mealForm.strMeasure16}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 17"
              placeholder="Measure 17"
              value={mealForm.strMeasure17}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 18"
              placeholder="Measure 18"
              value={mealForm.strMeasure18}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 19"
              placeholder="Measure 19"
              value={mealForm.strMeasure19}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Measure 20"
              placeholder="Measure 20"
              value={mealForm.strMeasure20}
            />
              <input
              onChange={handleChange}
              type="text"
              name="Source"
              placeholder="Source"
              value={mealForm.strSource}
            />
            <input
              onChange={handleChange}
              type="text"
              name="Image source"
              placeholder="Image Source"
              value={mealForm.strImageSource}
            />
            <input
              onChange={handleChange}
              type="text"
              name="Creative commons"
              placeholder="Creative Commons"
              value={mealForm.strCreativeCommonsConfirmed}
            />
               <input
              onChange={handleChange}
              type="date"
              name="date"
              value={mealForm.dateModified}
            />
          </div>
          <button className="ui button " type="button" >
            Add Meal Recipe
          </button>
        </form>
        </div>
  </div>
      </div>
    );
  }
  
  export default AddMealRecipe;