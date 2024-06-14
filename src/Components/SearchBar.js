// import axios from "axios";
// import React, { Component } from "react";


// class Search extends Component {
//   state = {
//     data: [],
//     searchTerm: "",
//   };

//   componentDidMount() {
//     axios
//       .get("http://localhost:8088/getproducts")
//       .then(response => {
//         this.setState({ data: response.data });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
//   // Function to handle changes in the search input
//   handleSearchChange = event => {
//     const { value } = event.target;
//     this.setState({ searchTerm: value });
//   };

//   render() {
//     const { data, searchTerm } = this.state;
//     const filteredRecipes = data.filter(user =>
//       user.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//       <div>
//         <br />
//         <br />
//         <br />
//         <br />
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search for recipes..."
//             value={searchTerm}
//             onChange={this.handleSearchChange}
//           />
//         </div>
//         <div className="showans">
//           <div></div>
//           {filteredRecipes.map((user, index) => (
//             <div className="div" key={user.title}>
//               <div className="lab1">
//                 <h1 className="tabcon">{user.title}</h1>
//               </div>

//               <div className="lab1">
//                 <h1 className="con">Author:</h1>
//               </div>
//               <div className="lab1">
//                 <h1 className="tabcon">{user.author}</h1>
//               </div>
//               <div className="lab1">
//                 <h1 className="con">Price: </h1>
//               </div>
//               <div className="lab1">
//                 <h1 className="tabcon">{user.price}</h1>
//               </div>

              
//             </div>
//           ))}
//       </div>
//       </div>
//     )
//   }
// }

// export default Search;