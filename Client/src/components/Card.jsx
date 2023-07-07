import { Link } from "react-router-dom";
import { addFav, removeFav  } from '../redux/action';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";


function Card(props) {
  const { id, name, species, gender, image, onClose, addFav, removeFav, myFavorites } = props
  
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    }
    else {
      setIsFav(true);
      addFav(props);
    }
  }
  
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myFavorites]);
  
   return (
     <div>
       <button onClick={() => onClose(id)}>X</button> 
       <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
       <Link to={`/Detail/${id}`}>
         <h2>{name}</h2>
       </Link>
       <h2>{species}</h2>
       <h2>{gender}</h2>
       <img src={image} alt="" />
     </div>
   );
}


const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => { dispatch(addFav(character)) },
    removeFav: (id) => {dispatch(removeFav(id))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);