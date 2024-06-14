import React from "react";
import "../Styles/Card.css";
import axios from "axios";
// import Search from "./SearchBar";
// import { useNavigate } from "react-router-dom";

const Cards = ({ item, setCart, handleClick }) => {
  const { id, title, author, price, img } = item;
  // const navigate = useNavigate();

  const handleAddToCart = () => {
    axios.post("http://localhost:8088/addproducts", item)
      .then((response) => {
        console.log("Item added to cart:", response.data);
        alert("Successfully");
        setCart((prevCart) => [...prevCart, item]);

        handleClick(item);
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  const handleButtonClicked = () => {
    handleAddToCart();
    handleClick(item);
  };

  return (
    <div>
    <div className="dis">
      <div className="cards">
        <div className="dis">
          <img src={img} alt="" />
          <p>{id}</p>
          <p>{title}</p>
          <p>{author}</p>
          <p>Price - {price}</p>
          <button onClick={handleButtonClicked}>Add to Cart</button>
        </div>
        </div>
        </div>
    </div>

  );
};

export default Cards;




// import React from "react";
// import "../Styles/Card.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Cards = ({ item, handleClick }) => {
//   const { id, title, author, price, img } = item;
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     axios.post('http://localhost:8088/addproducts', item)
//       .then((response) => {
//         console.log('Item added to cart:', response.data);
//         alert("Successfully");   

//         // navigate("/");
//       })
//       .catch((error) => {
//         console.error('Error adding item to cart:', error);
//       });
//   };

//   return (
//     <div className="dis">
//       <div className="cards">
//         <div className="dis">
//           <img src={img} alt="" />
//           <p>{id}</p>
//           <p>{title}</p>
//           <p>{author}</p>
//           <p>Price - {price}</p>
//           <button onClick={() => handleClick(item)}>Add</button>
//           <button onClick={handleAddToCart}>Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;
