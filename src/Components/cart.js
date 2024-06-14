import React, { useState, useEffect } from "react";
import "../Styles/cart.css";
import axios from "axios";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    axios
      .delete(`http://localhost:8088/deleteproducts/${id}`)
      .then((response) => {
        setCart((cart) => cart.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };
  

  const handlePrice = () => {
    let totalPrice = cart.reduce((total, item) => total + item.amount * item.price, 0);
    setPrice(totalPrice);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Cart;
// 


// import React, { useState, useEffect } from "react";
// import "../Styles/cart.css";
// import axios from "axios";

// const Cart = ({ cart, setCart }) => {
//   const [price, setPrice] = useState(0);

//   const handleRemove = (id) => {
//     axios
//       .delete(`http://localhost:8088/deleteproducts/${id}`)
//       .then((response) => {
//         setCart((cart) => cart.filter((item) => item.id !== id));
//       })
//       .catch((error) => {
//         console.error('Error deleting item:', error);
//       });
//   };

//   const handleChange = (item, amount) => {
//     // Calculate the updated quantity
//     const updatedAmount = item.amount + amount;

//     // Make a PUT request to the backend API to update the item quantity
//     axios.put("http://localhost:8088/updateproducts/" + item.id, { price: amount })
//       .then((response) => {
//         // Update the cart state after successful update
//         setCart((cart) => {
//           return cart.map((cartItem) => {
//             if (cartItem.id === item.id) {
//               return { ...cartItem, amount: updatedAmount };
//             }
//             return cartItem;
//           });
//         });
//       })
//       .catch((error) => {
//         // Handle error if the update fails
//         console.error('Error updating item quantity:', error);
//       });
//   };

//   const handlePrice = () => {
//     let totalPrice = cart.reduce((total, item) => total + item.amount * item.price, 0);
//     setPrice(totalPrice);
//   };

//   useEffect(() => {
//     handlePrice();
//   }, [cart]);

//   return (
//     <article>
//       {cart.map((item) => (
//         <div className="cart_box" key={item.id}>
//           <div className="cart_img">
//             <img src={item.img} alt="" />
//             <p>{item.title}</p>
//           </div>
//           <div>
//             <button onClick={() => handleChange(item, 1)}>+</button>
//             <button>{item.amount}</button>
//             <button onClick={() => handleChange(item, -1)}>-</button>
//           </div>
//           <div>
//             <span>{item.price}</span>
//             <button onClick={() => handleRemove(item.id)}>Remove</button>
//           </div>
//         </div>
//       ))}
//       <div className="total">
//         <span>Total Price of your Cart</span>
//         <span>Rs - {price}</span>
//       </div>
//     </article>
//   );
// };

// export default Cart;





