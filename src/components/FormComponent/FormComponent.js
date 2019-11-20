import React from 'react';
import ListComponent from "../ListComponent/ListComponent";
import { addNewTask } from "../../api/Api";
import '../../assets/styles/FormComponent.css';

class FormComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      value: ''
    }
    this.onInputTextChange = this.onInputTextChange.bind(this);
    this.onAddTaskClick = this.onAddTaskClick.bind(this);    
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  onInputTextChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  onAddTaskClick() {
    addNewTask(this, this.state.value);
  }

  render() {  
    return (
      <form className="todo-form" onSubmit={this.onFormSubmit}>
        <div className="todo-header">
          <input            
            className="todo-add-input"
            type="text"
            value={this.state.value}
            onChange={this.onInputTextChange}
          />
          <input
            className="todo-add-button"        
            type="button"
            value="Add"
            onClick={this.onAddTaskClick}            
          />
        </div>        
        <ListComponent />
      </form>
    );
  }
}
  
export default FormComponent;    