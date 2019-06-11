import classNames from 'classnames/bind';
import * as React from "react";
import MediaQuery from 'react-responsive';
import { ComponentBase, ComponentBaseProperties } from "../../../../core";
import { configuration } from '../../../../core/constants/index';
import styles from "./GridContainer.module.scss";

const cx = classNames.bind(styles);


interface GridContainerProperties extends ComponentBaseProperties {
    columnsDesktop?: number|string;
    columnsMobile?: number|string;
    gutterWidthDesktop?: number|string;
    gutterWidthMobile?: number|string;
    paddingDesktop?: number|string;
    paddingMobile?: number|string;
    smallBreakpoint?: number;
    children?: any
}

export class GridContainer extends ComponentBase<GridContainerProperties> {
    public render() {
        const defaultGutterWidth = '20px'
        const GridContainer = cx(styles.component);
        

        return (
            <React.Fragment>
                <MediaQuery minDeviceWidth={ (this.props.smallBreakpoint ? this.props.smallBreakpoint : configuration.smallScreenBreakPoint) + 1 }>
                    <div className={ GridContainer } style={ {
                        gridTemplateColumns: `repeat(${this.props.columnsDesktop}, calc(calc(100% - calc(calc(${this.props.columnsDesktop} - 1)*${this.props.gutterWidthDesktop}))/ ${this.props.columnsDesktop}))`,
                        columnGap: this.props.gutterWidthDesktop ? this.props.gutterWidthDesktop : defaultGutterWidth,
                        padding: this.props.paddingDesktop
                    } }>{ this.props.children }</div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={ this.props.smallBreakpoint ? this.props.smallBreakpoint : configuration.smallScreenBreakPoint }>
                    <div className={ GridContainer } style={ {
                        gridTemplateColumns: `repeat(${this.props.columnsMobile}, calc(calc(100% - calc(calc(${this.props.columnsMobile} - 1)*${this.props.gutterWidthMobile ? this.props.gutterWidthMobile : defaultGutterWidth}))/ ${this.props.columnsMobile}))`,
                        columnGap: this.props.gutterWidthMobile ? this.props.gutterWidthMobile : defaultGutterWidth,
                        padding: this.props.paddingMobile
                    } }>{ this.props.children }</div>
                </MediaQuery>
            </React.Fragment>
        );
    }
}
