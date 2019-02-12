import * as React from "react";
import classNames from 'classnames';
import Scrollbars from 'react-custom-scrollbars';

import { ComponentBaseProperties, ComponentBase } from "../../../../core";

import styles from "./ScrollPanel.module.scss";

interface ScrollPanelProperties extends ComponentBaseProperties {
    gradient?: boolean,
    autoHeight?: boolean,
    autoHeightMax?: number,
    autoHeightMin?: number,
    className?: string,

}



export class ScrollPanel extends ComponentBase<ScrollPanelProperties> {

    scrollbar: Scrollbars | null;

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
        if (gradient && children !== prevProps.children) {
            this.checkScroll();
        }
    }

    checkScroll() {
        if (this.scrollbar != null) {
            const scrolledToEnd = this.scrollbar.getScrollHeight() === this.scrollbar.getScrollTop() + this.scrollbar.getClientHeight();
            this.setState({ scrolledToEnd });
        }
    }

    render() {
        const { className, autoHeight, autoHeightMax, autoHeightMin, gradient, children } = this.props;
        const componentClasses = classNames(styles.component, className);

        return (
            <div className={componentClasses}>
                <Scrollbars ref={s => this.scrollbar = s}
                    autoHeight={autoHeight}
                    autoHeightMax={autoHeightMax}
                    autoHeightMin={autoHeightMin}
                    className={styles.scrollArea}
                    renderThumbVertical={(props) => <div {...props} className={styles.thumbVertical} />}
                    autoHide>
                    {children}
                </Scrollbars>
                {gradient && !this.state.scrolledToEnd && <div className={styles.gradient}></div>}
            </div>
        )
    }
}
