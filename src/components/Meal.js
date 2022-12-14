import React, { useEffect, useState }  from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
import AddMealRecipe from "./AddMealRecipe";

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
          body: JSON.stringify(e),
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
                <h1><span>Your Favorite</span>-Recipe</h1>
                <h2>Type your Food Recipe and Search</h2>
            </div>
            <div className="searchBox">
                <input type="search recipe" className="searchBar" 
                onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
                
            </div>
            <div className="container">
                {
                    show ? <MealItem data={item}/>:"Unavailable"
                }
            </div>
            <div className="indexContainer">
                <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>

            <AddMealRecipe
                 onKeyPress={handleSubmit}
                
                />
        </div>
    </>
    );
}

export default Meal;