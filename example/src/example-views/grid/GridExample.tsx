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
            <GridContainer columnsDesktop={ 12 } gutterWidthDesktop={ 30 } paddingDesktop={ 30 } smallBreakpoint={ 800 } columnsMobile={ 6 } paddingMobile={ 10 }>
                <div style={ { gridColumn: '1/5' } }>
                    <Title >I am a grid container. To see my columns use dev tools. This tittle took 2,3,4 columns</Title>
                </div>
                <GridItem offset={ 1 } columns={ 3 } gutterWidthDesktop={ 30 } smallR smallBreakpoint={ 800 } gutterWidthMob={ 20 } columnsMob={ 4 } smallRMob >
                    Testing Grid Item
                </GridItem>
            </GridContainer>
        </div>
    );
}

export { GridExample };
export default GridExample;
