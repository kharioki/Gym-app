import React, { Component, Fragment } from 'react';

import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store';

class App extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelect = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;

    return (
      <Fragment>
        <Header />

        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelect}
        />

        <Footer
          muscles={muscles}
          onSelect={this.handleCategorySelect}
          category={category}
        />
      </Fragment>
    );
  }
}

export default App;
