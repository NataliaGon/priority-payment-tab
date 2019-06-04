import * as React from "react";
import classNames from 'classnames/bind';
import { ComponentBaseProperties, ComponentBase, PriorityIcon } from "../../../core";
import styles from "./GridContainer.module.scss";
import MediaQuery from 'react-responsive';
const cx = classNames.bind(styles);




interface GridContainerProperties extends ComponentBaseProperties {
    columnsMobile?: any;
    columnsDesktop?: any;
    gutterWidthDesktop?: any
    gutterWidthMobile?: any;
    paddingDesktop?: any;
    paddingMobile?: any;
    mobileBreakpoint?: any;
    children?: any;
}

export class GridContainer extends ComponentBase<GridContainerProperties> {
    public render() {
        const defaultGutterWidth = '20px'
        const GridContainer = cx(styles.component);

        return (
            <React.Fragment>
                <MediaQuery minDeviceWidth={parseInt(this.props.mobileBreakpoint) + 1}>
                    <div className={GridContainer} style={{
                        gridTemplateColumns: `repeat(${this.props.columnsDesktop}, calc(calc(100% - calc(calc(${this.props.columnsDesktop} - 1)*${this.props.gutterWidthDesktop}))/ ${this.props.columnsDesktop}))`,
                        columnGap: this.props.gutterWidthDesktop,
                        height: '500px',
                        padding: this.props.paddingDesktop
                    }}>{this.props.children}</div>

                </MediaQuery>
                <MediaQuery maxDeviceWidth={parseInt(this.props.mobileBreakpoint)}>
                    <div className={GridContainer} style={{
                        gridTemplateColumns: `repeat(${this.props.columnsMobile}, calc(calc(100% - calc(calc(${this.props.columnsMobile} - 1)*${this.props.gutterWidthMobile ? this.props.gutterWidthMobile : defaultGutterWidth}))/ ${this.props.columnsMobile}))`,
                        columnGap: this.props.gutterWidthMobile ? this.props.gutterWidthMobile : defaultGutterWidth,
                        height: '500px',
                        padding: this.props.paddingMobile
                    }}>{this.props.children}</div>
                </MediaQuery>
            </React.Fragment>
        );
    }
}
