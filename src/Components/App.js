import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store';
import { Provider } from '../context';

class App extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByMuscles() {
    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {});

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = [...exercises[muscles], exercise]
          
        return exercises;
      }, initExercises)
    );
  }

  handleCategorySelect = category => 
    this.setState({
      category
    });
 

  handleExerciseSelect = id => 
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }));


  handleExerciseCreate = exercise => 
    this.setState(({ exercises}) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))


  handleExerciseDelete = id => 
    this.setState(({ exercises, exercise }) => ({
      exercises: exercises.filter(ex => ex.id !== id ),
      editMode: false,
      exercise: exercise.id === id ? {} : exercise
    }))


  handleExerciseSelectEdit = id => 
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }));

  handleExerciseEdit = exercise => 
    this.setState(({ exercises}) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
      exercise
    }))

  getContext = () => ({
    muscles,
    ...this.state,
    exercisesByMuscles: this.getExercisesByMuscles(),
    onCreate: this.handleExerciseCreate,
    onCategorySelect: this.handleCategorySelect,
    onEdit: this.handleExerciseEdit,
    onSelectEdit: this.handleExerciseSelectEdit,
    onDelete: this.handleExerciseDelete,
    onSelect: this.handleExerciseSelect
  })

  render() {
    return (
      <Provider value={this.getContext()}>
          <CssBaseline />
          <Header />

          <Exercises />

          <Footer />
      </Provider>
    );
  }
}

export default App;
