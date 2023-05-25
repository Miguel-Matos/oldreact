import React, { Component } from 'react';
import './App.css';

const Header = () => {
  return (
    <div>
      <h1>Task Adder</h1>
    </div>
  )
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      userInput: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }
  

  handleChange() {
    this.setState(prevState => ({
      taskList: [...prevState.taskList, document.getElementById('val').value]
    }))
  }

  render() {
    const listItem = this.state.taskList.map(item => <li key={item}>{item}</li>)

    return (
      <div>
        <input id="val" type='text'></input>
        <button onClick={this.handleChange} type='submit'>Add Task</button>
        <ul>{listItem}</ul>
      </div>

    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
