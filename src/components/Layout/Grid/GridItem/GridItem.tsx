import * as React from "react";
import MediaQuery from 'react-responsive';
import { ComponentBase, ComponentBaseProperties, configuration } from "../../../../core";

interface GridItemProperties extends ComponentBaseProperties {
    columns?: number;
    columnsMob?: number
    smallR?: boolean;
    smallL?: boolean;
    smallRMob?: boolean;
    smallLMob?: boolean;
    large?: boolean;
    largeMob?: boolean;
    offset?: number;
    gutterWidthDesktop?: number;
    gutterWidthMob?: number;
    smallBreakpoint?: number;

    children?: any;
}

export class GridItem extends ComponentBase<GridItemProperties> {

    public render() {

        const offset = this.props.offset ? this.props.offset : 0;
        const columns = this.props.columns ? this.props.columns : 0;
        const mobileColumns = this.props.columnsMob ? this.props.columnsMob : 0;
        const smallBreakpoint = this.props.smallBreakpoint ? this.props.smallBreakpoint : configuration.smallScreenBreakPoint;
        const defaultGutterWidth = '20';

        const gridItemStyleDesktop = {
            gridColumn: `${this.props.offset}/${offset + columns}`,
            marginRight: this.props.smallR || this.props.large ? -(this.props.gutterWidthDesktop ? this.props.gutterWidthDesktop : defaultGutterWidth) + 'px' : '',
            marginLeft: this.props.smallL || this.props.large ? -(this.props.gutterWidthDesktop ? this.props.gutterWidthDesktop : defaultGutterWidth) + 'px' : ''
        }
        const gridItemStyleMobile = {
            gridColumn: `${this.props.offset}/${offset + mobileColumns}`,
            marginRight: this.props.smallRMob || this.props.largeMob ? -(this.props.gutterWidthMob ? this.props.gutterWidthMob : defaultGutterWidth) + 'px' : '',
            marginLeft: this.props.smallLMob || this.props.largeMob ? -(this.props.gutterWidthMob ? this.props.gutterWidthMob : defaultGutterWidth) + 'px' : ''
        }
        return (
            <React.Fragment>
                <MediaQuery minDeviceWidth={ smallBreakpoint + 1 }>
                    <div style={ gridItemStyleDesktop }>
                        { this.props.children }
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={ smallBreakpoint }>
                    <div style={ gridItemStyleMobile }>
                        { this.props.children }
                    </div>
                </MediaQuery>
            </React.Fragment>
        );
    }
}
