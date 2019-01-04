import * as React from "react";
import classNames from 'classnames';
import styles from "./ScrollPanel.module.scss";
import { Scrollbars } from 'react-custom-scrollbars';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../base-classes";

interface ScrollPanelProperties extends ComponentBaseProperties {
  gradient?: boolean,
  autoHeight?: boolean,
  autoHeightMax?: number,
  autoHeightMin?: number,
  className?: string,
//   spaceBottom?:number
}

interface ScrollPanelState extends ComponentBaseState {
  scrolledToEnd: boolean
}

export class ScrollPanel extends ComponentBase<ScrollPanelProperties, ScrollPanelState> {

    scrollbar: Scrollbars;

    constructor(props: ScrollPanelProperties) {
        super(props);
        this.state = {
            scrolledToEnd: false
        }
        this.checkScroll = this.checkScroll.bind(this);
    }

    componentDidMount() {
       this.props.gradient && this.checkScroll();
    }

    componentDidUpdate(prevProps) {
        const { children, gradient } = this.props;
        if(gradient && children !== prevProps.children) {
            this.checkScroll();
        }
    }

    checkScroll() {
        const scrolledToEnd = this.scrollbar.getScrollHeight() === this.scrollbar.getScrollTop() + this.scrollbar.getClientHeight();
        this.setState({scrolledToEnd});
    }

    render() {
      const { className, autoHeight, autoHeightMax, autoHeightMin, gradient, children } = this.props;
      const scrollClass = classNames(styles.scrollArea,className);

      return (
          <div className={styles.component}>
              <Scrollbars ref={s => this.scrollbar = s}
                          onScroll={gradient && this.checkScroll}
                          autoHeight={autoHeight}
                          autoHeightMax={autoHeightMax}
                          autoHeightMin={autoHeightMin}
                          className={scrollClass}
                          renderThumbVertical={(props) => <div {...props} className={styles.thumbVertical}/>}
                          autoHide>
              {children}
              </Scrollbars>
              {gradient && !this.state.scrolledToEnd && <div className={styles.gradient}></div>}
          </div>
      )
    }
}
