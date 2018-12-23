import * as React from "react";
import classNames from 'classnames';
import styles from "./TextInput.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";

class TextInputProperties extends ComponentBaseProperties {

}

interface TextInputState extends ComponentBaseState {
  isOpen?: boolean;
}

export default class TextInput extends ComponentBase<TextInputProperties, TextInputState> {

  dropDownToggle = () => {
    this.setState({ isOpen: !(this.state && this.state.isOpen) });
  };

  public render() {

    const dropDownVisibilityClass = (this.state && this.state.isOpen) ? styles.expanded : null;
    const elementClasses = classNames(styles.component, this.props.componentClasses, dropDownVisibilityClass);

    return (
      <div className={elementClasses}>
        <div className={classNames(styles.option, styles.active, styles.placeholder)} data-value="placeholder">Choose wisely</div>
        <div className={styles.option} data-value="wow">
          Wow!</div>
        <div className={styles.option} data-value="drop">
          So dropdown!</div>
        <div className={styles.option} data-value="select">
          Very select!</div>
        <div className={styles.option} data-value="custom">
          Much custom!</div>
        <div className={styles.option} data-value="animation">
          Such animation!</div>
      </div>
    );
  }
}

// $(document).ready(function () {
//   $(".drop .option").click(function () {
//     var val = $(this).attr("data-value"),
//       $drop = $(".drop"),
//       prevActive = $(".drop .option.active").attr("data-value"),
//       options = $(".drop .option").length;
//     $drop.find(".option.active").addClass("mini-hack");
//     $drop.toggleClass("visible");
//     $drop.removeClass("withBG");
//     $(this).css("top");
//     $drop.toggleClass("opacity");
//     $(".mini-hack").removeClass("mini-hack");
//     if ($drop.hasClass("visible")) {
//       setTimeout(function () {
//         $drop.addClass("withBG");
//       }, 400 + options * 100);
//     }
//     triggerAnimation();
//     if (val !== "placeholder" || prevActive === "placeholder") {
//       $(".drop .option").removeClass("active");
//       $(this).addClass("active");
//     };
//   });

//   function triggerAnimation() {
//     var finalWidth = $(".drop").hasClass("visible") ? 22 : 20;
//     $(".drop").css("width", "24em");
//     setTimeout(function () {
//       $(".drop").css("width", finalWidth + "em");
//     }, 400);
//   }
// });
