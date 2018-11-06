import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import DogList from './DogList'
import Dog from './Dog'
import NavBar from './NavBar'
import './App.css';

class App extends Component {
  static defaultProps={
    dogs:[
      {
      id:1,
      name:'Whiskey',
      age: 5,
      hobbies:['Whiskey loves eating popcorn','Whiskey is a terrible guard dog.', 'Whiskey wants to cuddle with you!'],
      picture:'http://curric.rithmschool.com/r8/exercises/_try-dogfinder/static/media/whiskey.5c1e3b17.jpg'
    },
    {
      id:2,
      name:'Hazel',
      age: 0,
      hobbies:['Hazel has soooo much energy','Hazel is highly intelligent,','Hazel loves people more than dogs.'],
      picture:'http://curric.rithmschool.com/r8/exercises/_try-dogfinder/static/media/hazel.4eb85e80.jpg'
    },
    {
      id:3,
      name:'Tubby',
      age: 4,
      hobbies:['Tubby is really stupid.','Tubby does not like walks.','Angelina hates Tubby.'],
      picture:'http://curric.rithmschool.com/r8/exercises/_try-dogfinder/static/media/tubby.2f47cb65.jpg'
    }
    ]
  }

  render() {
    const names = this.props.dogs.map(function(dog){
      return dog.name
    })

    // const routes = this.props.dogs.map(function(dog){
    // return <Route key={dog.id} exact path={`/${dog.name}`} 
    // render={props =><Dog {...props} />}/>
    // })

    return (
      <div className="App">
        <NavBar names={names}/>
        <Switch>
          <Route exact path="/dogs"
                render={() => <DogList dogs={this.props.dogs} />} />
          <Route exact path="/dogs/:name"
                render={props => <Dog {...props} dogs={this.props.dogs} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
