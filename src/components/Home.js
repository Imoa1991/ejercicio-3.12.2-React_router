import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Form from './Form';

class Home extends Component {
  constructor(props){
    super(props);
    this.props.getPerson();
  }
  render() {
    return (
      <div className="App">
        <Form dataCitysToPrint={this.props.cities} dataGender={this.props.gender} filterGender={this.props.filterGender} filterCity={this.props.filterCity}/>
        <ul>
          {this.props.filterPeople.map((data, index) => {
            return(
              <li>
                <Link to={`/person/${index}`}>
                  <img src={data.picture.medium} alt={`photo of ${data.name.first}`} />
                </Link>
              </li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

export default Home;
