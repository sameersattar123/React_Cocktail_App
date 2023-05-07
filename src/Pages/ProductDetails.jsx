import React from "react";
import Layout from "../Components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSingleCocktail } from "../Redux/CocktailSlice";
import Spinner from "../Components/Spinner";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [modifiedCocktail, setmodifiedCocktail] = useState([]);
  const { loading, cocktail } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleCocktail({ id}));
  }, [dispatch, id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: img,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        img,
        info,
        category,
        glass,
        ingredients,
      };
      setmodifiedCocktail(newCocktail);
    } else {
      setmodifiedCocktail(null);
    }
  }, [id, cocktail]);
  if (!modifiedCocktail) {
    return <h2>No Cocktail Details</h2>;
  } else {
    const { name, img, info, category, glass, ingredients } = modifiedCocktail;
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <Layout>
            <div className="container mt-4">
              <Link to="/" className="btn btn-info">
                GO BACK
              </Link>
              <div className="row mt-4">
                <div className="col-md-5">
                  <img src={img} alt="aa" height={300} width={400} />
                </div>
                <div className="col-md-5">
                  <h2>Name : {name}</h2>
                  <p className="mt-1">Category : {category}</p>
                  <p>Info : {info}</p>
                  <p>Glass : {glass}</p>
                  <p>Ingredients : {ingredients + " ,"}</p>
                </div>
              </div>
            </div>
          </Layout>
        )}
      </>
    );
  }
};

export default ProductDetails;
