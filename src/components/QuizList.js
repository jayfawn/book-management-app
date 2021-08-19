import React from 'react';
import _ from 'lodash';
import Quiz from './Quiz';

const QuizList = ({ quizzes, setQuizzes }) => {

  const handleRemoveQuiz = (id) => {
    setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
  };

  return (
    <React.Fragment>
      <div className="quiz-list">
        {!_.isEmpty(quizzes) ? (
          quizzes.map((quiz) => (
            <Quiz key={quiz.id} {...quiz} handleRemoveQuiz={handleRemoveQuiz} />
          ))
        ) : (
          <p className="message">No quiz available. Please add some quizzes.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default QuizList;