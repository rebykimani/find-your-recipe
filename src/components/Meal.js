import React, { useEffect, useState }  from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
import AddMealRecipe from "./AddMealRecipe";

const [mealForm, setMealForm] = useState({
    idMeal: 52768,
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
const Meal=() =>{
    const [url, setUrl] = useState("https://dbjson-backend.herokuapp.com/meals");
    const [item, setItem]= useState();
    const [show, setShow]= useState(false);
    const [search, setSearch]= useState("");
    
    useEffect(()=>{
      fetch(url)
        .then(response=>response.json())
        .then(data=> {
            console.log("RESPONSE: ", data);
            setItem(data);
            setShow(true);
        })
    },[url]);

    const setIndex=(alpha)=>{
        setUrl(
            `https://dbjson-backend.herokuapp.com/meals?f=${alpha}`
            );
    }
    
    const searchRecipe=(e)=>{
        if(e.key==="Enter"){
            setUrl(`https://dbjson-backend.herokuapp.com/meals?s=${search}`)
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        fetch("https://dbjson-backend.herokuapp.com/meals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mealForm),
        })
          .then(() => {
            Meal();
          })
          .catch((err) => console.log(err + " " + "Run server first"));
      }

    return(
    <>
     <div className="main">
            <div className="heading">
                <h1><span>Mama's</span>-Recipe</h1>
                <h2>Type your Food Recipe and Search</h2>
            </div>
            <div className="searchBox">
                <input type="search recipe" className="searchBar" 
                onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
                <AddMealRecipe
                onChange={e=>setMealForm(e.target.value)} onKeyPress={handleSubmit}
                mealForm={mealForm}
                />
            </div>
            <div className="container">
                {
                    show ? <MealItem data={item}/>:"Unavailable"
                }
            </div>
            <div className="indexContainer">
                <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
        </div>
    </>
    );
}

export default Meal;