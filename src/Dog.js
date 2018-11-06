import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './Dog.css';

class Dog extends Component {

  render() {
    const dogNames = this.props.dogs.map(function(dog){
        return dog.name;
    })

    // console.log('this.props.match', this.props.match.params.name)
    // console.log('this.props.dogs', this.props.dogs)
    // console.log(dogNames)


    if(dogNames.includes(this.props.match.params.name)){

        const dog = this.props.dogs.find((dog) => {
            return dog.name===this.props.match.params.name
        })

        return <div>
            <img src={dog.picture}></img>
            <h4>{dog.name}</h4>
            <h3>{dog.age} years old</h3>
            <ul>
                {dog.hobbies.map((hobby)=> <li>{hobby}</li>)}
            </ul>
        </div>
    } else{
        return <Redirect to='/dogs'/>
    }
  }
}

export default Dog;
