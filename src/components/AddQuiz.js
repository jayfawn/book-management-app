import React from 'react';
import QuizForm from './QuizForm';

const AddQuiz = ({ history, quizzes, setQuizzes }) => {
    const handleOnSubmit = (quiz) => {
      setQuizzes([quiz, ...quizzes]);
      history.push('/');
    };

  return (
    <React.Fragment>
      <QuizForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddQuiz;