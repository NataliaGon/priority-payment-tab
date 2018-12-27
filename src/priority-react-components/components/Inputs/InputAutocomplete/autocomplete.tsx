import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./InputAutofill.module.scss";
import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase
} from "../../../base-classes";

class LineInputProperties extends ComponentBaseProperties {
 
   suggestions: string[];
   className:string;
  constructor(suggestions: string[],className: string){
    super();
      this.suggestions =suggestions;
      this.className= className;
  }

}

interface LineInputState extends ComponentBaseState {
  activeSuggestion:number;
  filteredSuggestions:string[];
  showSuggestions:boolean;
  userInput:string;

}

export default class Autocomplete extends ComponentBase<
LineInputProperties,
LineInputState
>  {

  static propTypes = {
    suggestions: PropTypes.array,
    className: PropTypes.string
  };

  static defaultProps = {
    suggestions: [],
    className: ""
  };


  state:LineInputState ={
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: "Search"
    
    };
  

  // Event fired when the input value is changed
  onChange =  (event: React.FormEvent<HTMLInputElement>) => {
    let value=event.currentTarget.value;
    const {suggestions} = this.props;
 
    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions: string[] = suggestions.filter((suggestion:string) =>

    suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  
    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: value
    });
  };

  // Event fired when the user clicks on a suggestion
  onClickHandle = (event:React.MouseEvent<HTMLElement>) => {
    const userInput = event.currentTarget.innerText;
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput
    });
  };
  BlurHandle=()=>{
    if(!this.state.userInput){
     this.setState({userInput:"Search"});
    }
  }
  // Event fired when the user presses a key down
  onKeyDown =(event:React.KeyboardEvent)=>{
    const keyCode = event.keyCode;
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow, decrement the index
    else if (keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };
 
  render(){
    const {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
   
    } = this.state;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className={styles.ul}>
            {filteredSuggestions.map((suggestion: string, index: number) => {
              let className;
              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }
              return (
                <li
                  className={styles.suggestion}
                  key={suggestion}
                  onClick={this.onClickHandle}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <div className={styles.component}>
        <input
          type="text"
          onChange={this.onChange}
          onKeyPress={this.onKeyDown}
          value={userInput}
          className={styles.input}
          onBlur={this.BlurHandle}
        />
        {suggestionsListComponent}
        </div>
    );
  }
}


