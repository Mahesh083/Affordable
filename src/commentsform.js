import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, InputGroup } from 'react-bootstrap';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CommentsForms() {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Error, setError] = useState(false);
  const [description, setdescription] = useState('');
   let navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    if (Username.length === 0 || Email.length === 0 || Mobile.length !== 10) {
      setError(true);
      return;
    }

    const data = {
      name: Username,
      email: Email,
      phoneNo: Mobile,
      description: description,
    };

    axios.post("http://localhost:8081/addsupport", data)
      .then((response) => {
        console.log(response.data);
        alert("Successfully submitted!");
        navigate("/success")
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        alert("Failed to submit data. Please try again later.");
      });
  };

  return (
    <div className="Registration">
      <Form className="form" onSubmit={handleSubmit}>
        <div>
          <Form.Group controlId="formGridlabel" id="reg-head" className="col col-sm-20">
            <h3>Feedback</h3>
          </Form.Group>
          <br />
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Label className='input'>Username</Form.Label>
              <Form.Control placeholder='UserName' onChange={e => setUsername(e.target.value)} />
              {Error && Username.length <= 0 ?
                <Form.Label className='error'>UserName can't be Empty </Form.Label> : ""}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Label className='input'>Email</Form.Label>
              <InputGroup>
                <Form.Control placeholder='Email' onChange={e => setEmail(e.target.value)} />
              </InputGroup>
              {Error && Email.length <= 0 ?
                <label className='error'>Email can't be Empty </label> : ""}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group controlId="formBasicMobile" className="col col-sm-10">
              <Form.Label className='input'>Mobile Number</Form.Label>
              <InputGroup>
                <Form.Control placeholder='Mobile Number' onChange={e => setMobile(e.target.value)} />
              </InputGroup>
              {Error && Mobile.length !== 10 ?
                <Form.Label className='error'>Mobile number should be 10 digits</Form.Label> : ""}
            </Form.Group>
          </Row>

          <Form.Label className='input'>Enter your Comment</Form.Label><br />
          <textarea onChange={e => setdescription(e.target.value)} />
          <center><button type="button" id="button" className="me-1 btn btn btn-lg" onClick={handleSubmit}>Submit</button></center>
        </div>
      </Form>
    </div>
  );
}

export default CommentsForms;
