import React, { ComponentElement } from 'react';
import styles from './TabsExample.module.scss';

import { Title } from 'priority-style-react';
import { GridContainer } from 'priority-style-react';
import { GridItem } from 'priority-style-react';

type PanelContentProperties = {
    id?: Object;
}


const GridExample: () => ComponentElement<PanelContentProperties, any> = () => {
    const grid = {
        gridColumn: 2 / 5
    }
    return (

        <div>
            <GridContainer columnsDesktop='12' gutterWidthDesktop='30px' paddingDesktop='30px' mobileBreakpoint='800' columnsMobile='6' paddingMobile="10px">
                <div style={{ gridColumn: '2/5' }}><Title skin='h2-blue' >I am a grid container. To see my columns use dev tools. This tittle took 2,3,4 columns
                </Title></div>
                <GridItem offset='1' columns='3' gutterWidthDesktop='30px' smallR mobileBreakpoint='800' gutterWidthMob="20px" columnsMob='4' smallRMob /> </GridContainer>
        </div>
    );
}

export { GridExample };
export default GridExample;

