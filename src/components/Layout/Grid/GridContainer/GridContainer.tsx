import * as React from "react";
import classNames from 'classnames/bind';
import { ComponentBaseProperties, ComponentBase, PriorityIcon } from "../../../../core";
import styles from "./GridContainer.module.scss";
import MediaQuery from 'react-responsive';
import { configuration } from '../../../../core/constants/index';

const cx = classNames.bind(styles);


interface GridContainerProperties extends ComponentBaseProperties {
    columnsMobile?: number;
    columnsDesktop?: number;
    gutterWidthDesktop?: number
    gutterWidthMobile?: number;
    paddingDesktop?: number;
    paddingMobile?: number;
    smallBreakpoint?: number;
    children?: any;
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
                        height: '500px',
                        padding: this.props.paddingDesktop
                    } }>{ this.props.children }</div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={ this.props.smallBreakpoint ? this.props.smallBreakpoint : configuration.smallScreenBreakPoint }>
                    <div className={ GridContainer } style={ {
                        gridTemplateColumns: `repeat(${this.props.columnsMobile}, calc(calc(100% - calc(calc(${this.props.columnsMobile} - 1)*${this.props.gutterWidthMobile ? this.props.gutterWidthMobile : defaultGutterWidth}))/ ${this.props.columnsMobile}))`,
                        columnGap: this.props.gutterWidthMobile ? this.props.gutterWidthMobile : defaultGutterWidth,
                        height: '500px',
                        padding: this.props.paddingMobile
                    } }>{ this.props.children }</div>
                </MediaQuery>
            </React.Fragment>
        );
    }
}
