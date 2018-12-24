import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./InputAutofill.module.scss";

export default class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

render(){
    return(
      <input className={styles.input} type="email"/>
    );
}
}
