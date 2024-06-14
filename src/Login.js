// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row } from 'react-bootstrap';
import './Form.css';
import user from './assets/user.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './Redux/UserSlice.js';

function Login() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Error, setError] = useState(false);
  const [usernameError, setUsernameError] = useState(false); // Separate error state for username
  const [passwordError, setPasswordError] = useState(false); // Separate error state for password

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storedUser = useSelector((state) => state.user.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (Username.length === 0) {
      setUsernameError(true);
      hasError = true;
    }

    if (Password.length === 0) {
      setPasswordError(true);
      hasError = true;
    }

    setError(hasError);

    if (!hasError) {
      const data = {
        username: Username,
        password: Password,
      };

      if (storedUser && data.username === storedUser.name && data.password === storedUser.password) {
           dispatch(loginUser({ Username, Password }));
        alert('You successfully logged in');
        navigate('/products');
      } else {
        setError(true);
        alert('Invalid credentials. Please try again.');
      }
    }
  };

  return (
    <div className="Registration">
      <Form className="form" onSubmit={handleSubmit}>
        <div>
          <Form.Group controlId="formGridlabel" id="reg-head" className="col col-sm-20">
            <h3>Login</h3>
          </Form.Group>
          <br />
          <div className="users">
            <img src={user} alt=" " width={100} />
            <span className="fa fa-user-o"></span>
          </div>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Label className="input">Username</Form.Label>
              <Form.Control
                placeholder="UserName"
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && Username.length <= 0 ? (
                <Form.Label className="error">Username can't be empty</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Control
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && Password.length <= 0 ? (
                <Form.Label className="error">Password can't be empty</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>

          <center>
            <button id="button" className="me-1 btn btn btn-lg">
              Submit
            </button>
          </center>
        </div>
        <Link to="/reg">Don't have an account? Register here.</Link>
      </Form>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Login;




// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Row } from 'react-bootstrap';
// import './Form.css';
// import user from './assets/user.jpg';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { login } from './Redux/UserSlice.js';

// function Login() {
//   const [Username, setUsername] = useState('');
//   const [Password, setPassword] = useState('');
//   const [Error, setError] = useState(false);
//   const [usernameError, setUsernameError] = useState(false); // Separate error state for username
//   const [passwordError, setPasswordError] = useState(false); // Separate error state for password

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let hasError = false;

//     if (Username.length === 0) {
//       setUsernameError(true);
//       hasError = true;
//     }

//     if (Password.length === 0) {
//       setPasswordError(true);
//       hasError = true;
//     }

//     setError(hasError);

//     if (hasError) {
//       return;
//     }

//     const data = {
//       username: Username,
//       password: Password,
//     };
//     axios.post('http://localhost:8088/post', data);
//     navigate('/products');
//     dispatch(login({ Username, Password }));
//     alert('You successfully Login');
//   };

//   return (
//     <div className="Registration">
//       <Form className="form" onSubmit={handleSubmit}>
//         <div>
//           <Form.Group controlId="formGridlabel" id="reg-head" className="col col-sm-20">
//             <h3>Login</h3>
//           </Form.Group>
//           <br />
//           <div className="users">
//             <img src={user} alt=" " width={100} />
//             <span className="fa fa-user-o"></span>
//           </div>
//           <Row className="mb-3">
//             <Form.Group controlId="formBasicEmail" className="col col-sm-10">
//               <Form.Label className="input">Username</Form.Label>
//               <Form.Control
//                 placeholder="UserName"
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               {usernameError && Username.length <= 0 ? (
//                 <Form.Label className="error">Username can't be empty</Form.Label>
//               ) : ''}
//             </Form.Group>
//           </Row>
//           <Row className="mb-3">
//             <Form.Group controlId="formBasicEmail" className="col col-sm-10">
//               <Form.Control
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               {passwordError && Password.length <= 0 ? (
//                 <Form.Label className="error">Password can't be empty</Form.Label>
//               ) : ''}
//             </Form.Group>
//           </Row>

//           <center>
//             <button id="button" className="me-1 btn btn btn-lg">
//               Submit
//             </button>
//           </center>
//         </div>
//         <Link to="/reg">Don't have an account? Register here.</Link>
//       </Form>

//       <br />
//       <br />
//       <br />
//     </div>
//   );
// }

// export default Login;
