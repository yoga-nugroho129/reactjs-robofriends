import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

// changing from function to class is to being able for creating a state usig constructor
class App extends Component {
  // creating constructor
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  // fetching data from API
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Robo Friends</h1>
        <SearchBox 
          placeholder="Search Robo..." 
          handleChange={this.handleChange}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;