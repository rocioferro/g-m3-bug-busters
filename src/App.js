import React from 'react';
import './scss/main.scss';
import Cards from './components/Cards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewData : {
        name: '',
        career: '',
        email: '',
        tel: '',
        linkedin: '',
        github: '',        
      },

      previewDefaultData:{
        name: 'Horse Luis Palomino',
        career: 'Front-pony Developer',
        photo: 'https://image.shutterstock.com/image-photo/palomino-horse-avelignese-haflinger-breed-260nw-1456529102.jpg',
        paletteValue: 1,
      },
      
      id : null
      
    };

    this.getInputValue = this.getInputValue.bind(this);
    this.getRadioValue = this.getRadioValue.bind(this);
    this.getCollapsable = this.getCollapsable.bind(this);
    this.addCollapsableClass = this.addCollapsableClass.bind(this);

  }

  getInputValue(event) {
    const targetId = event.currentTarget.id;
    const targetValue = event.currentTarget.value;
    const obj = {};
    obj[targetId] = targetValue;
    this.setState(obj);
  }

	getRadioValue(event) {
	const radioValue = parseInt(event.currentTarget.value); 
	this.setState({
		paletteValue: radioValue
	 });
  }

  addCollapsableClass(id, data_id) {
    console.log(id, data_id)
    return (id === data_id ? null :  'collapsed')
  }

  getCollapsable(event){
    const targetCollapsableID = event.currentTarget.id;
 
    this.setState (
      prevState => {
      if (prevState.id === null) {
        return(
          {
            id: targetCollapsableID 
          }
        )
      }
      else if (
        prevState.id === targetCollapsableID 
      ) {
        return (
          {
            id: null
          }
        )
      }
      else{
        return {
          id: targetCollapsableID
        }
      }
      }
    )
  }
  
 render() {
    return (
        <Cards 
        addClass = {this.addCollapsableClass}
        id = {this.state.id}
        divAction = {this.getCollapsable}
        inputAction={this.getInputValue}
        form_name={this.state.form_name}
        form_career={this.state.form_career}
        photo={this.state.form_photo}
        email={this.state.form_email}
        phone={this.state.form_tel}
        linkedin={this.state.form_linkedin}
        github={this.state.form_github}
				paletteValue={this.state.paletteValue}
        RadioValue={this.getRadioValue}
				/>
		)
  }
}	

export default App;