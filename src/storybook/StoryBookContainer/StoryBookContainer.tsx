import * as React from "react";
import styles from "./StoryBookContainer.scss";

export default class StoryBookContainer extends React.Component {
  public render() {
    return (
      <div className={styles.storyBookContainer}>{this.props.children}</div>
    );
  }
}
