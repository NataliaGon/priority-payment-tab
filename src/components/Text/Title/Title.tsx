import * as React from "react";
import classNames from 'classnames/bind';
import { ComponentBaseProperties, ComponentBase } from "../../../core";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

type TitleTag = 'h1-blue' | 'h1-grey' | 'h2-blue' | 'h2-grey' | 'h4';
type TitleBackground = 'white-bg' | 'blue-bg';

interface TitleProperties extends ComponentBaseProperties {
  skin?: TitleTag,
  children?: any,
  background?: TitleBackground
}


export class Title extends ComponentBase<TitleProperties> {
 private renderTitles(){
    const titleClass = cx(styles.component, this.props.skin);
    if (this.props.skin == 'h1-blue' || this.props.skin == 'h1-grey') {
      return <h1 className={titleClass}>{this.props.text ? this.props.text : this.props.children}</h1>
    }
    if(this.props.skin == 'h2-blue' || this.props.skin == 'h2-grey'){
      return <h2 className={titleClass}>{this.props.text ? this.props.text : this.props.children}</h2>
    }
    if (this.props.skin == 'h4'){
      return <h4 className={titleClass}>{this.props.text ? this.props.text : this.props.children}</h4>
    }
    else {return ''}
  }
  public render() {
    return (
      <React.Fragment>
        {this.renderTitles()}
      </React.Fragment>
    );
  }
}
