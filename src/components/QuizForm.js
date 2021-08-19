import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const QuizForm = (props) => {
  const [quiz, setQuiz] = useState({
    quizname: props.quiz ? props.quiz.quizname : '',
    author: props.quiz ? props.quiz.author : '',
    quantity: props.quiz ? props.quiz.quantity : '',
    price: props.quiz ? props.quiz.price : '',
    date: props.quiz ? props.quiz.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { quizname, author, price, quantity } = quiz;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [quizname, author, price, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const quiz = {
        id: uuidv4(),
        quizname,
        author,
        price,
        quantity,
        date: new Date()
      };
      props.handleOnSubmit(quiz);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setQuiz((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setQuiz((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setQuiz((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Quiz Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="quizname"
            value={quizname}
            placeholder="Enter name of quiz"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Quiz Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Quiz Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of quiz"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default QuizForm;