import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './DogList.css';

class DogList extends Component {

  render() {
    const dogs = this.props.dogs.map(function(dog){
      return <div className='DogList'>
          <img src={dog.picture}></img>
          <br></br>
          <Link to={`/${dog.name}`}>{dog.name}</Link>
      </div>
    })


    return (
      <div className='DogContainer'>
        <h1>HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFO</h1>
        {dogs}
      </div>
    );
  }
}

export default DogList;
