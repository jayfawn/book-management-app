import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddQuiz from '../components/AddQuiz';
import QuizList from '../components/QuizList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
    const [quizzes, setQuizzes] = useLocalStorage('quizzes', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <QuizList {...props} quizzes={quizzes} setQuizzes={setQuizzes} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddQuiz {...props} quizzes={quizzes} setQuizzes={setQuizzes} />
              )}
              path="/add"
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;