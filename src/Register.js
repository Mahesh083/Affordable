// Forms.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row } from 'react-bootstrap';
import './Form.css';
import user from './assets/user.jpg';
import { useDispatch } from 'react-redux';
import { registerUser } from './Redux/UserSlice.js';
import axios from 'axios';

function Forms() {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [Error, setError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    return email.endsWith('@gmail.com');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (Username.length === 0) {
      setError(true);
      hasError = true;
    }

    if (Email.length === 0 || !validateEmail(Email)) {
      setError(true);
      hasError = true;
    }

    if (Mobile.length !== 10) {
      setError(true);
      hasError = true;
    }

    if (Password.length === 0) {
      setError(true);
      hasError = true;
    }

    if (ConfirmPassword.length === 0 || Password !== ConfirmPassword) {
      setError(true);
      hasError = true;
    }

    setError(hasError);

    if (!hasError) {
      const data = {
        name: Username,
        email: Email,
        password: Password,
      };
      axios.post('http://localhost:8181/api/v1/auth/register', data)
          .then(() => {
              alert("Successfull")
              navigate('/login');
              dispatch(registerUser(data));
          })
            .catch((error) => {
              console.error('Error occurred during registration:', error);
              setError(true);
            });
        };
      



    }

  return (
    <div className="Registration">
      <Form className="form" onSubmit={handleSubmit}>
        <div>
          <Form.Group controlId="formGridlabel" id="reg-head" className="col col-sm-20">
            <h3>Register Here</h3>
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
              {Error && Username.length === 0 ? (
                <Form.Label className="error">Username can't be empty</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Label className="input">Email</Form.Label>
              <Form.Control
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {Error && Email.length === 0 ? (
                <Form.Label className="error">Email can't be empty</Form.Label>
              ) : ''}
              {Error && Email.length > 0 && !validateEmail(Email) ? (
                <Form.Label className="error">Email should end with @gmail.com</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group controlId="formBasicMobile" className="col col-sm-10">
              <Form.Label className="input">Mobile Number</Form.Label>
              <Form.Control
                placeholder="Mobile Number"
                onChange={(e) => setMobile(e.target.value)}
              />
              {Error && Mobile.length !== 10 ? (
                <Form.Label className="error">Mobile number should be 10 digits</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>
          <Form.Label className="input">Password</Form.Label>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Control
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {Error && Password.length === 0 ? (
                <Form.Label className="error">Password can't be empty</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Label className="input">Confirm Password</Form.Label>
              <Form.Control
                placeholder="Re-Enter Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {Error &&
              (ConfirmPassword.length === 0 || Password !== ConfirmPassword) ? (
                <Form.Label className="error">Passwords do not match</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>
          <center>
            <button id="button" className="me-1 btn btn btn-lg" type="submit">
              Submit
            </button>
          </center>
        </div>
        <center>
          <button id="button" className="me-1 btn btn btn-lg">
            <Link to="/login">Already have an account? Login here.</Link>
          </button>
        </center>
      </Form>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Forms;



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Row, InputGroup } from 'react-bootstrap';
// import './Form.css';
// import user from './assets/user.jpg';
// import axios from 'axios';

// function Forms() {
//   const [Username, setUsername] = useState('');
//   const [Email, setEmail] = useState('');
//   const [Mobile, setMobile] = useState('');
//   const [Password, setPassword] = useState('');
//   const [ConfirmPassword, setConfirmPassword] = useState('');
//   const [Error, setError] = useState(false);

//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     return email.endsWith('@gmail.com');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let hasError = false;

//     if (Username.length === 0) {
//       setError(true);
//       hasError = true;
//     }

//     if (Email.length === 0 || !validateEmail(Email)) {
//       setError(true);
//       hasError = true;
//     }

//     if (Mobile.length !== 10) {
//       setError(true);
//       hasError = true;
//     }

//     if (Password.length === 0) {
//       setError(true);
//       hasError = true;
//     }

//     if (ConfirmPassword.length === 0 || Password !== ConfirmPassword) {
//       setError(true);
//       hasError = true;
//     }

//     if (hasError) {
//       return;
//     }

//     const data = {
//       name: Username,
//       email: Email,
//       password: Password,
//     };

//     axios.post('http://localhost:8181/api/v1/auth/register', data)
//     .then(() => {
//         alert("Successfull")
//         navigate('/login');
//     })
//       .catch((error) => {
//         console.error('Error occurred during registration:', error);
//         setError(true);
//       });
//   };

//   return (
//     <div className="Registration">
//       <Form className="form" onSubmit={handleSubmit}>
//         <div>
//           <Form.Group controlId="formGridlabel" id="reg-head" className="col col-sm-20">
//             <h3>Register Here</h3>
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
//               {Error && Username.length === 0 ? (
//                 <Form.Label className="error">Username can't be empty</Form.Label>
//               ) : ''}
//             </Form.Group>
//           </Row>
//           <Row className="mb-3">
//             <Form.Group controlId="formBasicEmail" className="col col-sm-10">
//               <Form.Label className="input">Email</Form.Label>
//               <InputGroup>
//                 <Form.Control
//                   placeholder="Email"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </InputGroup>
//               {Error && Email.length === 0 ? (
//                 <Form.Label className="error">Email can't be empty</Form.Label>
//               ) : ''}
//               {Error && Email.length > 0 && !validateEmail(Email) ? (
//                 <Form.Label className="error">Email should end with @gmail.com</Form.Label>
//               ) : ''}
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Group controlId="formBasicMobile" className="col col-sm-10">
//               <Form.Label className="input">Mobile Number</Form.Label>
//               <InputGroup>
//                 <Form.Control
//                   placeholder="Mobile Number"
//                   onChange={(e) => setMobile(e.target.value)}
//                 />
//               </InputGroup>
//               {Error && Mobile.length !== 10 ? (
//                 <Form.Label className="error">Mobile number should be 10 digits</Form.Label>
//               ) : ''}
//             </Form.Group>
//           </Row>
//           <Form.Label className="input">Password</Form.Label>
//           <Row className="mb-3">
//             <Form.Group controlId="formBasicEmail" className="col col-sm-10">
//               <Form.Control
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               {Error && Password.length === 0 ? (
//                 <Form.Label className="error">Password can't be empty</Form.Label>
//               ) : ''}
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Group controlId="formBasicEmail" className="col col-sm-10">
//               <Form.Label className="input">Confirm Password</Form.Label>
//               <Form.Control
//                 placeholder="Re-Enter Password"
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//               {Error &&
//               (ConfirmPassword.length === 0 || Password !== ConfirmPassword) ? (
//                 <Form.Label className="error">Passwords do not match</Form.Label>
//               ) : ''}
//             </Form.Group>
//           </Row>
//           <center>
//             <button id="button" className="me-1 btn btn btn-lg" type="submit">
//               Submit
//             </button>
//           </center>
//         </div>
//         <center>
//           <button id="button" className="me-1 btn btn btn-lg">
//             <Link to="/login">Already have an account? Login here.</Link>
//           </button>
//         </center>
//       </Form>

//       <br />
//       <br />
//       <br />
//     </div>
//   );
// }

// export default Forms;
