import React from 'react';

class PersonalDetail extends React.Component {
constructor(props){
  super(props);
  this.personDetail = this.props.dataperson[this.props.match.params.id];
}
  render() {
    return (
      <div>
      <h2>{this.personDetail.name.first}</h2>
      <img src={this.personDetail.picture.medium} alt={`photo of ${this.personDetail.name.first}`}/>
      <h3>{this.personDetail.location.city}</h3>
      <h4>{this.personDetail.dob.age}</h4>
       </div>
      );
  }
}

export default PersonalDetail;
