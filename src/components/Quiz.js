import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Quiz = ({
  id,
  quizname,
  author,
  price,
  quantity,
  date,
  handleRemoveQuiz
}) => {
  return (
    <Card style={{ width: '18rem' }} className="quiz">
      <Card.Body>
        <Card.Title className="quiz-title">{quizname}</Card.Title>
        <div className="quiz-details">
          <div>Author: {author}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary">Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveQuiz(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Quiz;