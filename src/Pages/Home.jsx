import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { useEffect , useState } from 'react'
import { fetchCocktail } from '../Redux/CocktailSlice'
import Spinner from '../Components/Spinner'
import { Link } from 'react-router-dom'
const Home = () => {
  const [modifiedCocktail, setmodifiedCocktail] = useState([])
  const {loading , cocktails , error} = useSelector((state) => ({...state.app}))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktail())
  },[dispatch])

  useEffect(() => {
    if(cocktails){
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setmodifiedCocktail(newCocktails)
    }else{
      setmodifiedCocktail([])
    }
  },[cocktails])

  if(loading){
    return <Spinner/>
  }
  if(error){
    return <p>{error.message}</p>
  }
  if (!cocktails) {
    return (
        <h2>No Cocktail Found With This Name</h2>
    );
  }
  return (
     <>
     <div className="container">
      <div className="row">
        {
          modifiedCocktail.map((item)=> {
            return (
              <div className="col-md-3  mt-3" key={item.id}>
                 <div className="card" style={{width: '18rem'}}>
  <img src={item.img} className="card-img-top" alt={item.name} />
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <h5 className="card-title">{item.glass}</h5>
    <p className="card-text">{item.info}</p>
    <Link to={`/product/${item.id}`} className="btn btn-primary">
      Details
      </Link>
  </div>
</div>
              </div>
            )
          })
        }
      </div>
     </div>
     </>
  )
}

export default Home
